
import { ColorTokens } from '../theme/colors';
import Image from 'next/image';

const AutomationSection = () => (
  <section className="py-24 px-4" style={{ background: ColorTokens.white }}>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: ColorTokens.blue, letterSpacing: '-0.02em' }}>
          Nomago: Platforma për Digital Nomads
        </h3>
        <p className="mb-6 text-lg" style={{ color: ColorTokens.darkGray, lineHeight: 1.7 }}>
          Nomago është aplikacioni i parë në Shqipëri i dedikuar për digital nomads. Me Nomago, mund të gjesh akomodim, hapësira pune, evente dhe komunitet, të gjitha në një vend të vetëm. Platforma ndihmon në organizimin e jetës nomade, lidhjen me profesionistë të tjerë dhe zbulimin e mundësive të reja për punë dhe eksperienca.
        </p>
        <p className="mb-2 text-base md:text-lg font-medium text-blue">
          Shfrytëzo avantazhet e Nomago për të jetuar dhe punuar lirshëm, kudo që ndodhesh.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/mock.png"
          alt="Nomago App"
          width={800}
          height={600}
          style={{ width: '80%', height: 'auto' }}
          className="object-contain opacity-0 animate-fadein"
          priority
        />
      </div>
    </div>
  </section>
);

export default AutomationSection;
