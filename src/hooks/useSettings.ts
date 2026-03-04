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
    featureFlags: {
        emailCaptureEnabled: boolean;
        showPhoneNumber: boolean;
        seoEnabled: boolean;
    };
    footer: {
        badgeText: string;
        copyrightText: string;
    };
    seo?: {
        siteTitle?: string;
        defaultDescription?: string;
        ogImage?: string;
    };
    socialMedia: Array<{
        platform: string;
        url: string;
        icon: string;
    }>;
}

let cachedSettings: Settings | null = null;
let cachedAt = 0;
let inFlight: Promise<Settings | null> | null = null;
const CACHE_TTL_MS = 60_000;

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
    featureFlags: {
        emailCaptureEnabled: true,
        showPhoneNumber: false,
        seoEnabled: true
    },
    footer: {
        badgeText: "DPIIT Recognised Startup",
        copyrightText: "© {year} Amonarq Systems. All rights reserved."
    },
    seo: {
        siteTitle: "Amonarq - Designing Systems for Continuity",
        defaultDescription: "Amonarq builds digital products focused on reducing chaos, protecting trust, and enabling uninterrupted human flow.",
        ogImage: "/og-image.png"
    },
    socialMedia: []
};

export const useSettings = () => {
    const [settings, setSettings] = useState<Settings>(cachedSettings || defaultSettings);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSettings = useCallback(async () => {
        try {
            const now = Date.now();
            if (cachedSettings && now - cachedAt < CACHE_TTL_MS) {
                setSettings(cachedSettings);
                return;
            }
            if (inFlight) {
                const cached = await inFlight;
                if (cached) setSettings(cached);
                return;
            }
            setIsLoading(true);
            inFlight = api
                .get("/settings")
                .then((response) => {
                    const next: Settings = {
                        ...defaultSettings,
                        ...response.data,
                        featureFlags: {
                            emailCaptureEnabled: response.data?.featureFlags?.emailCaptureEnabled ?? true,
                            showPhoneNumber: response.data?.featureFlags?.showPhoneNumber ?? false,
                            seoEnabled: response.data?.featureFlags?.seoEnabled ?? true
                        },
                        seo: {
                            siteTitle: response.data?.seo?.siteTitle || defaultSettings.seo?.siteTitle,
                            defaultDescription: response.data?.seo?.defaultDescription || defaultSettings.seo?.defaultDescription,
                            ogImage: response.data?.seo?.ogImage || defaultSettings.seo?.ogImage
                        }
                    };
                    cachedSettings = next;
                    cachedAt = Date.now();
                    return next;
                })
                .catch(() => null)
                .finally(() => {
                    inFlight = null;
                });
            const resolved = await inFlight;
            if (resolved) {
                setSettings(resolved);
            }
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
