
import Colors, { ColorTokens } from '../theme/colors';

const BusinessAutomationSection = () => (
  <section
    className="py-20 px-4 md:px-16 flex flex-col md:flex-row items-center gap-12"
    style={{ background: ColorTokens.darkGray, color: ColorTokens.white }}
  >
    <div className="flex-1 max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Automatizoni të gjitha proceset e biznesit tuaj në një platformë të vetme
      </h2>
      <p className="text-lg mb-8" style={{ color: ColorTokens.lightGray }}>
        Një mënyrë unike, e thjeshtë dhe efikase për të pranuar pagesa me kartë, kod QR ose link. Thjeshtim dhe automatizim i kalimit të pagave, pagesës së faturave dhe abonimeve të ndryshme. Kartë debiti me komision zero për blerje online dhe në dyqane fizike, në të gjithë botën.
      </p>
    </div>
    <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center items-center">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-80 h-96 flex flex-col items-center justify-end">
        <img src="/automation-pos.jpg" alt="POS" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full flex justify-center pb-6">
          <button
            className="font-bold px-8 py-3 rounded-xl text-lg flex items-center gap-2 shadow-md"
            style={{ background: ColorTokens.lightBlue, color: ColorTokens.purple }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke={ColorTokens.purple} strokeWidth="2"/><rect x="7" y="11" width="2" height="2" rx="1" fill={ColorTokens.purple}/><rect x="11" y="11" width="2" height="2" rx="1" fill={ColorTokens.purple}/></svg>
            POS
          </button>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-lg w-80 h-96 flex flex-col items-center justify-end"
        style={{ background: `linear-gradient(135deg, ${ColorTokens.lightBlue}, ${ColorTokens.purple})` }}>
        <img src="/automation-link.jpg" alt="Pagesa me link" className="absolute top-0 left-0 w-full h-full object-cover opacity-80" />
        <div className="relative z-10 w-full flex justify-center pb-6">
          <button
            className="font-bold px-8 py-3 rounded-xl text-lg flex items-center gap-2 shadow-md"
            style={{ background: ColorTokens.white, color: ColorTokens.purple }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" stroke={ColorTokens.purple} strokeWidth="2"/><rect x="8" y="11" width="8" height="2" rx="1" fill={ColorTokens.purple}/></svg>
            Pagesa me link
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessAutomationSection;
