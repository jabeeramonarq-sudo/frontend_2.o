import { useState, useCallback } from "react";
import { staticSettings } from "@/data/staticContent";

export interface Settings {
    logos: {
        main: string;
        footer: string;
        favicon: string;
    };
    contactInfo: {
        address: string;
        email: string;
        phone: string;
        mapsUrl: string;
    };
    socialMedia: Array<{
        platform: string;
        url: string;
        icon: string;
    }>;
}

export const useSettings = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [settings, setSettings] = useState<Settings | null>(staticSettings);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);

    const fetchSettings = useCallback(async () => {
        // No-op for static content
        setIsLoading(false);
    }, []);

    return { settings, isLoading, error, refresh: fetchSettings };
};
