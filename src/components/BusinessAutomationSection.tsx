
import { ColorTokens } from '../theme/colors';
import Image from 'next/image';

const BusinessAutomationSection = () => (
  <section
    className="py-20 px-4 md:px-16 flex flex-col md:flex-row items-center gap-12"
    style={{ background: ColorTokens.purple, color: ColorTokens.white }}
  >
    <div className="flex-1 max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Jetë Nomade, Mundësi të Pafundme
      </h2>
      <p className="text-lg mb-8" style={{ color: ColorTokens.lightGray }}>
        Nomago është partneri juaj për rritje personale dhe profesionale. Zbuloni mundësi të reja, bashkëpunoni me talente të ndryshme dhe përfitoni nga një platformë që ju mbështet në çdo hap të udhëtimit tuaj nomad. Çdo funksionalitet është ndërtuar për të fuqizuar stilin tuaj të jetesës digjitale.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center">
  <div className="relative rounded-3xl overflow-hidden shadow-lg w-[32rem] h-[28rem]">
        <Image
          src="/nomad1.jpg"
          alt="Jetë Nomade"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

export default BusinessAutomationSection;
