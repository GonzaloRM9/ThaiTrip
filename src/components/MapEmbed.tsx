

interface MapEmbedProps {
    query: string;
}

export function MapEmbed({ query }: MapEmbedProps) {
    // Construct the embed URL. 
    // Using the legacy embed capable of search queries without an explicit API key for simple use cases.
    // Note: In a high-traffic production app, a proper Google Maps Embed API key should be restricted and used.
    const encodedQuery = encodeURIComponent(query);
    const src = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-inner border border-slate-200 mt-4 relative bg-slate-100 group-hover:border-gold/30 transition-colors duration-500">
            <iframe
                title={`Map of ${query}`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={src}
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                loading="lazy"
            />
            {/* Overlay to prevent scroll capture until interacted (optional, but good for UX) */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] rounded-xl" />
        </div>
    );
}
