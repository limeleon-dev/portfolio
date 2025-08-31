const Presentation = () => {
  return (
    <section id="presentations" className="p-4 bg-green-200">
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-16">
          <div className="max-w-3xl text-center flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Développeur Web full-stack</h1>
            <div className="text-justify leading-relaxed space-y-4">
              <p>
                Bonjour, je m'appelle Guillaume Hostache ! Rigoureux, déterminé et bienveillant, je suis passionné par
                l'informatique, et plus particulièrement par le développement d’applications web et mobiles.
              </p>
              <p>
                Mon objectif est de rejoindre des équipes motivées pour participer à des projets stimulants, mettre mes
                compétences à contribution, continuer à progresser techniquement et m’épanouir professionnellement.
              </p>
            </div>

            <div className="flex w-full max-w-3xl justify-between items-center flex-wrap gap-4">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/guillaume-hostache-a6b50b29a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium flex items-center"
                >
                  <i className="fa-brands fa-linkedin text-lg mr-2"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/limeleon-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-600 text-gray-700 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 font-medium flex items-center"
                >
                  <i className="fa-brands fa-github text-lg mr-2"></i> GitHub
                </a>
              </div>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium shadow-md flex items-center"
              >
                <i className="fa-solid fa-download mr-2"></i> Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Presentation;
