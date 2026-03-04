import { useState, useEffect, useCallback } from "react";
import api from "@/lib/api";

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
    footer: {
        badgeText: string;
        copyrightText: string;
    };
    socialMedia: Array<{
        platform: string;
        url: string;
        icon: string;
    }>;
}

const defaultSettings: Settings = {
    logos: {
        main: "/logo.png",
        footer: "/mynxt-logo.png",
        favicon: "/favicon.ico"
    },
    contactInfo: {
        address: "4-578, Row House, Prasanth Nagar, Madanapalle, Andhra Pradesh 517325, India.",
        email: "business@amonarq.com",
        phone: "",
        mapsUrl: ""
    },
    footer: {
        badgeText: "DPIIT Recognised Startup",
        copyrightText: "Â© {year} Amonarq Systems. All rights reserved."
    },
    socialMedia: []
};

export const useSettings = () => {
    const [settings, setSettings] = useState<Settings>(defaultSettings);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSettings = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get("/settings");
            setSettings(response.data || defaultSettings);
            setError(null);
        } catch (err) {
            console.error("Failed to fetch settings:", err);
            setError("Failed to load site settings");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSettings();
    }, [fetchSettings]);

    return { settings, isLoading, error, refresh: fetchSettings };
};
