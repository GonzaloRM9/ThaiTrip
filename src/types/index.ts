export interface TripItem {
    id: string;
    title: string;
    description: string;
    type: 'visit' | 'food' | 'activity' | 'tips' | 'shopping';
    price?: string;
    location?: string;
    mapUrl?: string;
    category?: string;
}

export interface CitySection {
    id: string;
    name: string;
    image: string;
    items: TripItem[];
}
