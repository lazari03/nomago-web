


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
        Lidhuni me një rrjet të gjerë partnerësh dhe shfrytëzoni mundësitë e shumta të pagesave.<br />
        Zbuloni si Nomago ju ndihmon të menaxhoni pagesat, të bashkëpunoni me biznese të ndryshme dhe të përfitoni nga teknologjia më e fundit për nomadët digjitalë.<br />
        Lexoni historitë e suksesit, këshilla dhe udhëzime të dobishme në blogun tonë.
      </p>
      <a href="/blog">
        <button
          className="px-7 py-3 rounded-xl font-semibold text-base shadow-md transition bg-white text-black hover:bg-gray-100"
        >
          Shfleto blogun
        </button>
      </a>
    </div>
  </section>
);

export default NetworkSection;
