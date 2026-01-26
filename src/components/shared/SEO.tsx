import { useEffect } from "react";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterCard?: string;
}

export const SEO = ({
    title,
    description,
    canonical,
    ogType = "website",
    ogImage = "/og-image.png",
    twitterCard = "summary_large_image",
}: SEOProps) => {
    useEffect(() => {
        const siteName = "amonarq";
        const fullTitle = title ? `${title} | ${siteName}` : `amonarq - Designing Systems for Continuity`;

        // Update Title
        document.title = fullTitle;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description || "amonarq builds digital products focused on reducing chaos, protecting trust, and enabling uninterrupted human flow.");
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
        updateOG("og:description", description || "amonarq builds digital products focused on reducing chaos, protecting trust, and enabling uninterrupted human flow.");
        updateOG("og:type", ogType);
        updateOG("og:url", window.location.href);
        updateOG("og:image", window.location.origin + ogImage);

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
        updateTwitter("twitter:description", description || "amonarq builds digital products focused on reducing chaos, protecting trust, and enabling uninterrupted human flow.");
        updateTwitter("twitter:image", window.location.origin + ogImage);

    }, [title, description, canonical, ogType, ogImage, twitterCard]);

    return null;
};
