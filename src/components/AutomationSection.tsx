
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
      </div>
      <div className="flex gap-8 justify-center">
        <div className="bg-[" style={{ background: ColorTokens.lightBlue, borderRadius: '1.5rem', boxShadow: '0 4px 24px 0 rgba(67,97,238,0.08)' }}>
          <img src="/file.svg" alt="Automation 1" className="w-28 h-28 object-contain m-6" />
        </div>
        <div className="bg-[" style={{ background: ColorTokens.lightBlue, borderRadius: '1.5rem', boxShadow: '0 4px 24px 0 rgba(67,97,238,0.08)' }}>
          <img src="/window.svg" alt="Automation 2" className="w-28 h-28 object-contain m-6" />
        </div>
      </div>
    </div>
  </section>
);

export default AutomationSection;
