
import Colors, { ColorTokens } from '../theme/colors';

const partners = [
  { name: 'Partner 1', logo: '/file.svg' },
  { name: 'Partner 2', logo: '/next.svg' },
  { name: 'Partner 3', logo: '/vercel.svg' },
  { name: 'Partner 4', logo: '/globe.svg' },
];

const PartnersSection = () => (
  <section className="py-16 px-4" style={{ background: ColorTokens.lightGray }}>
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: ColorTokens.blue, letterSpacing: '-0.01em' }}>
        Bashkohuni me rrjetin e partnerëve Pago!
      </h3>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {partners.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl shadow-md flex items-center justify-center p-6 transition hover:scale-105" style={{ minWidth: 96, minHeight: 64 }}>
            <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
