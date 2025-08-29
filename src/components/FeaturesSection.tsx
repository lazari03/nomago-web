import Colors, { ColorTokens } from "../theme/colors";


const FeaturesSection = () => (
  <section
    className="relative w-full bg-white overflow-hidden pt-0 pb-12"
  >
    {/* Flipped SVG background at the top */}
    <div className="absolute top-0 left-0 right-0 min-w-full h-[140px] md:h-[220px] pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
        style={{ display: 'block' }}
      >
  <path d="M0 160C360 0 1080 320 1440 160V0H0V160Z" fill={ColorTokens.lightPurple || '#F3EFFF'} fillOpacity="0.3"/>
      </svg>
    </div>
  <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-12 md:pt-20 z-10">
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
        <div className="bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 border border-lightGray">
          <img
            src="/window.svg"
            alt="App Features"
            className="w-60 h-60 object-contain"
          />
        </div>
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkGray leading-tight mb-6">
          Zgjidhje <span className="text-blue">360°</span> për biznesin tuaj
        </h2>
        <ul className="space-y-4 text-lg text-gray mb-8">
          <li className="flex items-center gap-3">
            <span className="text-xl text-purple">⚡</span>
            Pagesa të shpejta dhe të sigurta
          </li>
          <li className="flex items-center gap-3">
            <span className="text-xl text-purple">🤝</span>
            Menaxhim i klientëve dhe partnerëve
          </li>
          <li className="flex items-center gap-3">
            <span className="text-xl text-purple">📊</span>
            Raporte të detajuara
          </li>
          <li className="flex items-center gap-3">
            <span className="text-xl text-purple">🔗</span>
            Integrime të avancuara
          </li>
          <li className="flex items-center gap-3">
            <span className="text-xl text-purple">🛟</span>
            Mbështetje 24/7
          </li>
        </ul>
        <button
          className="px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-purple text-white"
        >
          Kërko një demo
        </button>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
