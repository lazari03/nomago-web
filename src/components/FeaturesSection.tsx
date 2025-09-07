import { ColorTokens } from "../theme/colors";
import Image from 'next/image';
import Link from 'next/link';


const FeaturesSection = () => (
  <section
    className="relative w-full bg-white overflow-hidden pt-0 pb-12"
    style={{ marginTop: 0 }}
  >
  
  <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-12 md:pt-20 z-10">
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
        <Image
          src="/nomad2.jpg"
          alt="Digital Nomad"
          width={520}
          height={400}
          className="w-[32rem] h-96 object-cover rounded-[20px]"
          priority
        />
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkGray leading-tight mb-6">
          Platformë moderne për <span className="text-blue">digital nomads</span>
        </h2>
        <ul className="space-y-4 text-lg mb-8">
          <li className="flex items-start gap-3">
            <span style={{ background: ColorTokens.purple }} className="w-3 h-3 mt-2 rounded-full inline-block"></span>
            Rezervo akomodime dhe hapësira pune në pak klikime
          </li>
          <li className="flex items-start gap-3">
            <span style={{ background: ColorTokens.purple }} className="w-3 h-3 mt-2 rounded-full inline-block"></span>
            Shfleto listime të verifikuara për çdo nevojë nomade
          </li>
          <li className="flex items-start gap-3">
            <span style={{ background: ColorTokens.purple }} className="w-3 h-3 mt-2 rounded-full inline-block"></span>
            Mbështetje dhe asistencë 24/7 për çdo udhëtim
          </li>
          <li className="flex items-start gap-3">
            <span style={{ background: ColorTokens.purple }} className="w-3 h-3 mt-2 rounded-full inline-block"></span>
            Komunitet aktiv për ndarje eksperiencash dhe bashkëpunim
          </li>
          <li className="flex items-start gap-3">
            <span style={{ background: ColorTokens.purple }} className="w-3 h-3 mt-2 rounded-full inline-block"></span>
            Evente, guida dhe resurse për jetën nomade
          </li>
        </ul>
  <Link href="/listings" className="inline-block">
          <button
            className="px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-white"
            style={{ background: ColorTokens.purple }}
          >
            Shiko listimet
          </button>
  </Link>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
