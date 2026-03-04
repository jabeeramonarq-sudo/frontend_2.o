import { useState, useCallback, useEffect, useRef } from "react";
import { staticContent } from "@/data/staticContent";
import api from "@/lib/api";

export interface ContentSection {
    _id: string;
    sectionId: string;
    title?: string;
    subtitle?: string;
    body?: string;
    image?: string;
    images?: string[];
    order: number;
    isActive: boolean;
}

export const useContent = () => {
    const [sections, setSections] = useState<ContentSection[]>(staticContent);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const sectionsRef = useRef<ContentSection[]>(staticContent);

    const normalizeSection = (section: any): ContentSection => ({
        ...section,
        images: Array.isArray(section?.images)
            ? section.images.filter((img: any) => typeof img === "string" && img.trim())
            : (section?.image ? [section.image] : []),
    });

    const mergeSections = (remoteSections: any[]): ContentSection[] => {
        const merged = new Map<string, ContentSection>();
        staticContent.forEach((section: any) => {
            merged.set(section.sectionId, normalizeSection(section));
        });

        remoteSections.forEach((section: any) => {
            if (!section?.sectionId) return;
            if (section.isDeleted) {
                merged.delete(section.sectionId);
                return;
            }
            const existing = merged.get(section.sectionId);
            merged.set(section.sectionId, normalizeSection({ ...existing, ...section }));
        });

        return Array.from(merged.values()).sort((a, b) => a.order - b.order);
    };

    useEffect(() => {
        sectionsRef.current = sections;
    }, [sections]);

    const fetchContent = useCallback(async () => {
        if (sectionsRef.current.length === 0) {
            setIsLoading(true);
        }
        setError(null);
        try {
            const response = await api.get("/content");
            const remoteSections = Array.isArray(response.data) ? response.data : [];
            setSections(mergeSections(remoteSections));
        } catch (err) {
            setSections(mergeSections([]));
            setError("Failed to load content from API");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if ("requestIdleCallback" in window) {
            const idleId = (window as any).requestIdleCallback(() => fetchContent(), { timeout: 2000 });
            return () => (window as any).cancelIdleCallback?.(idleId);
        }
        const timeoutId = window.setTimeout(fetchContent, 0);
        return () => window.clearTimeout(timeoutId);
    }, [fetchContent]);

    const getContent = (sectionId: string) => {
        const section = sections.find(s => s.sectionId === sectionId);
        return {
            title: section?.title || "",
            subtitle: section?.subtitle || "",
            body: section?.body || "",
            image: section?.images?.[0] || section?.image || "",
            images: section?.images || (section?.image ? [section.image] : []),
            exists: !!section
        };
    };

    return { sections, isLoading, error, getContent, refresh: fetchContent };
};
