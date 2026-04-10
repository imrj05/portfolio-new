import { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface CompanyLinkPreviewProps {
    company: string;
    url: string;
    previewMode?: 'iframe' | 'fallback';
    description?: string;
}

export default function CompanyLinkPreview({
    company,
    url,
    previewMode = 'fallback',
    description,
}: CompanyLinkPreviewProps) {
    const [open, setOpen] = useState(false);
    const openTimeoutRef = useRef<number | null>(null);
    const closeTimeoutRef = useRef<number | null>(null);
    const domain = useMemo(() => {
        try {
            return new URL(url).hostname.replace(/^www\./, '');
        } catch {
            return url;
        }
    }, [url]);

    useEffect(() => {
        return () => {
            if (openTimeoutRef.current) {
                window.clearTimeout(openTimeoutRef.current);
            }

            if (closeTimeoutRef.current) {
                window.clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    function openPreview() {
        if (closeTimeoutRef.current) {
            window.clearTimeout(closeTimeoutRef.current);
        }

        openTimeoutRef.current = window.setTimeout(() => {
            setOpen(true);
        }, 140);
    }

    function closePreview() {
        if (openTimeoutRef.current) {
            window.clearTimeout(openTimeoutRef.current);
        }

        closeTimeoutRef.current = window.setTimeout(() => {
            setOpen(false);
        }, 100);
    }

    return (
        <span
            className={`company-preview${open ? ' company-preview--open' : ''}`}
            onMouseEnter={openPreview}
            onMouseLeave={closePreview}
            onFocus={openPreview}
            onBlur={closePreview}
        >
            <a href={url} target="_blank" rel="noopener noreferrer" className="experience-link">
                {company}
            </a>

            <span className="company-preview-panel" aria-hidden={!open}>
                <span className="company-preview-panel-inner">
                    <span className="company-preview-topbar">
                        <span className="company-preview-url">
                            <Globe size={12} />
                            <span>{domain}</span>
                        </span>
                        <span className="company-preview-open">
                            <span>Open</span>
                            <ExternalLink size={12} />
                        </span>
                    </span>

                    {previewMode === 'iframe' ? (
                        <span className="company-preview-frame-shell">
                            <iframe
                                src={url}
                                title={`${company} website preview`}
                                loading="lazy"
                                className="company-preview-frame"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </span>
                    ) : (
                        <span className="company-preview-fallback">
                            <span className="company-preview-fallback-label">Preview unavailable</span>
                            <strong className="company-preview-fallback-title">{company}</strong>
                            <span className="company-preview-fallback-copy">
                                {description ?? 'This website does not allow live embedding, but the link opens directly in a new tab.'}
                            </span>
                        </span>
                    )}
                </span>
            </span>
        </span>
    );
}
