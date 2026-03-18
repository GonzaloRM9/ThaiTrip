import type { CitySection } from '../types';

export const thailandData: CitySection[] = [
    {
        id: 'bangkok',
        name: 'Bangkok',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80', // Wat Arun at twilight
        items: [
            // CENAS
            {
                id: 'bkk-dinner-1',
                title: 'Swing Bar',
                description: 'Rooftop con vistas a los monumentos.',
                type: 'food',
                category: 'Cenas',
                location: 'Sao Chingcha',
                mapUrl: 'https://share.google/wCO46wTj5MZsqURG1'
            },
            {
                id: 'bkk-dinner-2',
                title: 'River Vibe',
                description: 'Rooftop en el río. Opción menos guiri y más auténtica.',
                type: 'food',
                category: 'Cenas',
                location: 'Chinatown / River',
                mapUrl: 'https://share.google/gh6bO0mvQ3pcbTN8P'
            },
            // COMIDA CALLEJERA
            {
                id: 'bkk-street-1',
                title: 'Ruta Local Universitaria',
                description: 'Banthat Thong. Zona de comida callejera frecuentada por universitarios.',
                type: 'food',
                category: 'Comida Callejera',
                location: 'Banthat Thong',
                mapUrl: 'https://www.google.com/maps/dir/National+Stadium,+Rama+IV+Rd,+Wang+Mai,+Pathum+Wan,+Bangkok+10330,+Tailandia/Stadium+One,+719,721,723,725,727+Chulalongkorn+4+Alley,+Wang+Mai,+Pathum+Wan,+Bangkok+10330,+Tailandia/Bualoy+Parinya,+1398+Banthat+Thong+Rd,+Wang+Mai,+Pathum+Wan,+Bangkok+10330,+Tailandia/Jeh+O+Chula+Banthatthong,+113+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B8%88%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+Rong+Mueang,+Pathum+Wan,+Bangkok+10330,+Tailandia/Nam+Dao+Huu,+1574+Banthat+Thong+Rd,+Rong+Mueang,+Pathum+Wan,+Bangkok+10330,+Tailandia/@13.7446822,100.5205681,16z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x30e29932a95480ab:0xeab9f76cf7025f3a!2m2!1d100.529073!2d13.746473!1m5!1m1!1s0x30e2992dfdabee3b:0x894e279b2389d2a8!2m2!1d100.5244451!2d13.7466193!1m5!1m1!1s0x30e2992e9505f4b9:0x6655a10588ad1c0a!2m2!1d100.5229683!2d13.7436152!1m5!1m1!1s0x30e2992eeb145315:0xd37af0e1dfbbcd7c!2m2!1d100.522519!2d13.7425057!1m5!1m1!1s0x30e299cb6a667c85:0x760a83b0310354a8!2m2!1d100.522669!2d13.7421982!3e2?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D'
            },
            // DESAYUNO
            {
                id: 'bkk-bkf-1',
                title: 'Cafetería Años 30 (On Lok Yun)',
                description: 'Cafetería clásica que apenas ha cambiado. Tiene "classics".',
                type: 'food',
                category: 'Desayuno',
                location: 'Old City',
                mapUrl: 'https://share.google/8HnaiBK7DUYa8uC3T'
            },
            {
                id: 'bkk-bkf-2',
                title: 'Kope Hya Tai Kee',
                description: 'Competidor del anterior. Desayunos tradicionales.',
                type: 'food',
                category: 'Desayuno',
                mapUrl: 'https://www.tripadvisor.es/Restaurant_Review-g293916-d6091180-Reviews-Kope_Hya_Tai_Kee-Bangkok.html'
            },
            {
                id: 'bkk-bkf-3',
                title: 'Jok Prince',
                description: 'Famoso por su papilla de arroz (Jok).',
                type: 'food',
                category: 'Desayuno',
                location: 'Bang Rak',
                mapUrl: 'https://share.google/1iolJXO9xGOrlH4W2'
            },
            // DISPENSARIOS
            {
                id: 'bkk-weed-1',
                title: 'Cloud Nine',
                description: 'Diseño retro-futurista premiado. Una experiencia muy premium y visual en Sukhumvit.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Sukhumvit 21',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cloud+Nine+Bangkok'
            },
            {
                id: 'bkk-weed-2',
                title: 'Cookies Thailand',
                description: 'Marca mundialmente famosa (Berner). Calidad top y strains exclusivas.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Pathum Wan',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cookies+Thailand+Bangkok'
            },
            {
                id: 'bkk-weed-3',
                title: 'Four Twenty',
                description: 'Ambiente chill tipo lounge/rooftop, perfecto para relajarse.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Sukhumvit 22',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Four+Twenty+Dispensary+Bangkok'
            }
        ]
    },
    {
        id: 'chiang-mai',
        name: 'Chiang Mai',
        image: 'https://images.unsplash.com/photo-1598971861713-54ad167248b9?auto=format&fit=crop&q=80',
        items: [
            {
                id: 'cm-food-1',
                title: 'Khao Soi Khun Yai',
                description: 'Khao soi clásico con caldo cremoso y pollo tierno, favorito de locales.',
                type: 'food',
                category: 'Comida',
                location: 'Old City',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Khao+Soi+Khun+Yai+Chiang+Mai'
            },
            {
                id: 'cm-food-2',
                title: 'Huen Phen',
                description: 'Cocina del norte auténtica con especialidades como Nam Prik y Sai Oua.',
                type: 'food',
                category: 'Comida',
                location: 'Old City',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Huen+Phen+Chiang+Mai'
            },
            {
                id: 'cm-weed-1',
                title: 'Cookies Chiang Mai',
                description: 'Dispensario de la marca internacional Cookies, buen servicio y variedad de flores.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Nimmanhaemin',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cookies+Chiang+Mai'
            },
            {
                id: 'cm-weed-2',
                title: '4:20 Chiang Mai',
                description: 'Tienda accesible con productos CBD y opciones de cannabis medicinal legal.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Old City',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=4%3A20+Chiang+Mai'
            }
        ]
    },
    {
        id: 'phuket',
        name: 'Phuket',
        image: 'https://images.unsplash.com/photo-1589394815804-989b3b785d03?auto=format&fit=crop&q=80',
        items: [
            {
                id: 'phuket-food-1',
                title: 'No.9 2nd Restaurant',
                description: 'Comida tailandesa local muy popular, excelente pad thai y currys.',
                type: 'food',
                category: 'Comida',
                location: 'Kata Beach',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=No.9+2nd+Restaurant+Phuket'
            },
            {
                id: 'phuket-food-2',
                title: 'Suay Restaurant',
                description: 'Platos contemporáneos del sur de Tailandia en ambiente moderno.',
                type: 'food',
                category: 'Comida',
                location: 'Rawai',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Suay+Restaurant+Phuket'
            },
            {
                id: 'phuket-weed-1',
                title: 'Ivan Cannabis Clinic Phuket',
                description: 'Dispensario y clínica cannábica con buenas reviews y asesoría profesional.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Chalong',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ivan+Cannabis+Clinic+Phuket'
            },
            {
                id: 'phuket-weed-2',
                title: '420 Express Phuket',
                description: 'Opción rápida en Patong con selección de flores y productos de CBD.',
                type: 'shopping',
                category: 'Dispensario',
                location: 'Patong',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=420+Express+Phuket'
            }
        ]
    }
];
