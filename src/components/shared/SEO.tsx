import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterCard?: string;
    schema?: object | object[];
}

export const SEO = ({
    title,
    description,
    canonical,
    ogType = "website",
    ogImage,
    twitterCard = "summary_large_image",
    schema,
}: SEOProps) => {
    const { settings } = useSettings();

    useEffect(() => {
        if (settings?.featureFlags?.seoEnabled === false) {
            return;
        }
        const siteName = "Amonarq";
        const baseTitle = settings?.seo?.siteTitle?.trim() || "Amonarq - Designing Systems for Continuity";
        const fullTitle = title ? `${title} | ${siteName}` : baseTitle;
        const metaDescriptionValue =
            description ||
            settings?.seo?.defaultDescription?.trim() ||
            "Amonarq builds digital products focused on reducing chaos, protecting trust, and enabling uninterrupted human flow.";
        const ogImageValue = ogImage || settings?.seo?.ogImage || "/og-image.png";

        // Update Title
        document.title = fullTitle;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", metaDescriptionValue);
        }

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', canonical || window.location.href);

        // Update Open Graph
        const updateOG = (property: string, content: string) => {
            let el = document.querySelector(`meta[property="${property}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', property);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        updateOG("og:title", fullTitle);
        updateOG("og:description", metaDescriptionValue);
        updateOG("og:type", ogType);
        updateOG("og:url", window.location.href);
        updateOG("og:image", window.location.origin + ogImageValue);

        // Update Twitter
        const updateTwitter = (name: string, content: string) => {
            let el = document.querySelector(`meta[name="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        updateTwitter("twitter:card", twitterCard);
        updateTwitter("twitter:title", fullTitle);
        updateTwitter("twitter:description", metaDescriptionValue);
        updateTwitter("twitter:image", window.location.origin + ogImageValue);

        // Update Structured Data (JSON-LD)
        let scriptSchema = document.querySelector('script[type="application/ld+json"]#structured-data');
        if (schema) {
            if (!scriptSchema) {
                scriptSchema = document.createElement('script');
                scriptSchema.setAttribute('type', 'application/ld+json');
                scriptSchema.id = 'structured-data';
                document.head.appendChild(scriptSchema);
            }
            scriptSchema.textContent = JSON.stringify(schema);
        } else if (scriptSchema) {
            // If no schema is provided, keep the existing one or clear it?
            // Usually, we want to remove it if the page doesn't define it to avoid stale global data
            // But index.html had one. We'll handle removal to ensure clean per-page SEO.
            scriptSchema.remove();
        }

    }, [title, description, canonical, ogType, ogImage, twitterCard, schema, settings]);

    return null;
};
