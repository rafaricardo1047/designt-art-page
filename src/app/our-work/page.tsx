import Image from "next/image";

export default function OurWork() {
  const projects = [
    {
      title: "Lead Hill - Diamond City Chamber",
      image: "https://ext.same-assets.com/1166560785/840759524.jpeg",
      link: "http://www.LHDCChamber.com",
    },
    {
      title: "The Resort at Rockwater",
      image: "https://ext.same-assets.com/1166560785/953662277.png",
      link: "https://www.theresortrockwater.com/",
    },
    {
      title: "Sugarloaf Harbor Marina",
      image: "https://ext.same-assets.com/1166560785/3584387704.jpeg",
      link: "https://sugarloafharbormarina.com/",
    },
    {
      title: "Jamie's Creative Catering",
      image: "https://ext.same-assets.com/1166560785/2641783239.jpeg",
      link: "http://www.JamiesCreativeCatering.com",
    },
    {
      title: "Haley Pruitt Photography",
      image: "https://ext.same-assets.com/1166560785/3800911957.jpeg",
      link: "http://www.haleypruitt.com",
    },
    {
      title: "Ozark Mountain Zipline",
      image: "https://ext.same-assets.com/1166560785/1083641895.jpeg",
      link: "http://www.ziplineeurekasprings.com",
    },
    {
      title: "Sanctuary Shelter",
      image: "https://ext.same-assets.com/1166560785/329239370.png",
      link: "https://www.sanctuary1981.com",
    },
    {
      title: "A Lorraine Formal Wear",
      image: "https://ext.same-assets.com/1166560785/3011474884.webp",
      link: "http://alorraineharrison.com",
    },
    {
      title: "Roadrunner Inn",
      image: "https://ext.same-assets.com/1166560785/2333383664.jpeg",
      link: "http://rrinn.com",
    },
    {
      title: "Harrison Granite",
      image: "https://ext.same-assets.com/1166560785/1806443600.jpeg",
      link: "http://www.HarrisonGranite.com",
    },
    {
      title: "Harrison RV Park",
      image: "https://ext.same-assets.com/1166560785/3416436799.jpeg",
      link: "http://www.Harrison-RVPark.com",
    },
    {
      title: "Buffalo River Vacations",
      image: "https://ext.same-assets.com/1166560785/3454508564.jpeg",
      link: "http://www.BuffaloRiverVacations.com",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-medium text-[#444b46] mb-6">
              Portfolio
            </h1>
            <p className="text-xl">
              A look at a few of our clients
            </p>
          </div>
          <div className="mt-8">
            <p className="text-lg text-[#657769]">
              We specialize in creating websites for businesses of all sizes, cohesive branding, and digital marketing for all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors"
                      >
                        Launch Website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-xl font-medium text-[#444b46]">{project.title}</h3>
                  <div className="mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors"
                    >
                      Launch Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
