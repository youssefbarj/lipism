import LipBlushingSlider from "./lip-blushing-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive slider */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="w-full max-w-lg mx-auto">
            <LipBlushingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Glaçage des Lèvres
            <br />
            <span className="text-slate-900">Professionnel</span>
          </h1>

          <h2 className="text-xl font-medium text-slate-700">Maîtrisez l'art du maquillage semi-permanent</h2>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Transformez des lèvres pâles ou asymétriques en lèvres parfaitement colorées et définies qui durent des
              mois. Vos clientes se réveilleront avec des lèvres naturellement rosées chaque matin.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Dans ce module, vous allez apprendre à :</h3>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Maîtriser la technique du dermographe sur les lèvres</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Choisir les pigments adaptés à chaque carnation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Appliquer le protocole de soin en 9 étapes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Respecter les contre-indications et soins post-traitement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
