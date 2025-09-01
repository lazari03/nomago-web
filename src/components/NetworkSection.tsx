import Link from 'next/link';
const NetworkSection = () => (
  <section
    className="py-20 px-4 flex justify-center items-center"
    style={{
      backgroundImage: 'url(/14.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="w-full flex flex-col items-center justify-center text-center">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg">Nomago app</h3>
      <p className="text-lg mb-4 text-white drop-shadow">
        Bashkohu me komunitetin tonë dhe qëndro i lidhur me risitë më të fundit të Nomago.
      </p>
      <Link href="/blog">
        <button
          className="px-7 py-3 rounded-xl font-semibold text-base shadow-md transition bg-white text-black hover:bg-gray-100"
        >
          Blog
        </button>
      </Link>
    </div>
  </section>
);

export default NetworkSection;
