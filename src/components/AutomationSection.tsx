
import Colors, { ColorTokens } from '../theme/colors';

const AutomationSection = () => (
  <section className="py-24 px-4" style={{ background: ColorTokens.white }}>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: ColorTokens.blue, letterSpacing: '-0.02em' }}>
          Automatizoni të gjitha proceset e biznesit tuaj në një platformë të vetme
        </h3>
        <p className="mb-10 text-lg" style={{ color: ColorTokens.darkGray, lineHeight: 1.7 }}>
          Menaxhoni, monitoroni dhe optimizoni çdo aspekt të biznesit tuaj me lehtësi dhe efikasitet.
        </p>
        <p className="mb-2 text-base md:text-lg font-medium text-blue">
          <span className="font-bold">Nomago</span> është platforma e parë e dedikuar për digital nomads në Shqipëri, duke ofruar mjete të avancuara për menaxhimin e jetës dhe punës në lëvizje.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/mock.png"
          alt="Nomago App"
          style={{ width: '80%', height: 'auto' }}
          className="object-contain opacity-0 animate-fadein"
        />
      </div>
    </div>
  </section>
);

export default AutomationSection;
