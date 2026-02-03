import type { TripItem } from '../types';
import { InfoCard } from './InfoCard';

interface InfoListProps {
    items: TripItem[];
}

export function InfoList({ items }: InfoListProps) {
    return (
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
            {items.map((item, index) => (
                <InfoCard key={item.id} item={item} index={index} />
            ))}
        </div>
    );
}
