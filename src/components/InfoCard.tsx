import { MapPin, Camera, Utensils, Info, Tag, ExternalLink, Leaf } from 'lucide-react';
import type { TripItem } from '../types';
import { MapEmbed } from './MapEmbed';

interface InfoCardProps {
    item: TripItem;
    index: number;
}

export function InfoCard({ item, index }: InfoCardProps) {
    const getIcon = (type: TripItem['type']) => {
        switch (type) {
            case 'visit': return <MapPin className="w-5 h-5 text-emerald-500" />;
            case 'food': return <Utensils className="w-5 h-5 text-orange-500" />;
            case 'activity': return <Camera className="w-5 h-5 text-blue-500" />;
            case 'tips': return <Info className="w-5 h-5 text-purple-500" />;
            case 'shopping': return <Leaf className="w-5 h-5 text-green-500" />;
            default: return <Tag className="w-5 h-5 text-gray-400" />;
        }
    };

    return (
        <div
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-sand rounded-xl group-hover:bg-royal group-hover:text-white transition-colors duration-300 shadow-sm">
                    {getIcon(item.type)}
                </div>
                {item.category && (
                    <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-royal/5 text-royal rounded-full border border-royal/10">
                        {item.category}
                    </span>
                )}
            </div>

            <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-gold-dark transition-colors">
                    {item.title}
                </h3>
                {item.price && (
                    <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 mb-2">
                        {item.price}
                    </span>
                )}
                <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-gold/30 pl-4 py-1">
                    {item.description}
                </p>
            </div>

            <div className="mt-auto">
                {/* Map Integration */}
                <div className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Location
                        </span>
                        {item.mapUrl && (
                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-royal hover:text-gold flex items-center gap-1 transition-colors"
                            >
                                Abrir en Maps <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>

                    {/* Uses title and location for the map query */}
                    <MapEmbed query={`${item.title} ${item.location || ''} Bangkok Thailand`} />
                </div>
            </div>
        </div>
    );
}
