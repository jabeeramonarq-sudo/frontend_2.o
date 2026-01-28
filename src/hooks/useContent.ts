import { useState, useEffect, useCallback } from "react";
import api from "@/lib/api";

export interface ContentSection {
    _id: string;
    sectionId: string;
    title?: string;
    subtitle?: string;
    body?: string;
    image?: string;
    order: number;
    isActive: boolean;
}

export const useContent = () => {
    const [sections, setSections] = useState<ContentSection[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchContent = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get("/content");
            setSections(response.data);
            setError(null);
        } catch (err) {
            console.error("Failed to fetch content:", err);
            setError("Failed to load site content");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContent();
    }, [fetchContent]);

    const getContent = (sectionId: string) => {
        const section = sections.find(s => s.sectionId === sectionId);
        return {
            title: section?.title || "",
            subtitle: section?.subtitle || "",
            body: section?.body || "",
            image: section?.image || "",
            exists: !!section
        };
    };

    return { sections, isLoading, error, getContent, refresh: fetchContent };
};
