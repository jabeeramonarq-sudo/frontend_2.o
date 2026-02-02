import { useState, useCallback } from "react";
import { staticContent } from "@/data/staticContent";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sections, setSections] = useState<ContentSection[]>(staticContent);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);

    const fetchContent = useCallback(async () => {
        // No-op for static content, but kept for compatibility
        setIsLoading(false);
    }, []);

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
