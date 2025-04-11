// Suggested code may be subject to a license. Learn more: ~LicenseLog:1963396824.
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Website Design",
      image: "https://ext.same-assets.com/2751894838/1736798231.jpeg",
      link: "/website-design"
    },
    {
      title: "eCommerce",
      image: "https://ext.same-assets.com/2751894838/2809721076.jpeg",
      link: "/ecommerce"
    },
    {
      title: "Logo & Branding",
      image: "https://ext.same-assets.com/2751894838/2979913565.jpeg",
      link: "/branding"
    },
    {
      title: "Social Media",
      image: "https://ext.same-assets.com/2751894838/293585127.jpeg",
      link: "/social-media"
    }
  ];

  const caseStudies = [
    {
      title: "LHDC Chamber of Commerce",
      image: "https://ext.same-assets.com/2751894838/140894158.jpeg",
      link: "http://www.LHDCChamber.com",
      isExternal: true
    },
    {
      title: "Sanctuary Shelter",
      image: "https://ext.same-assets.com/2751894838/3763205014.png",
      link: "https://www.sanctuary1981.com/",
      isExternal: true
    },
    {
      title: "Haley Pruitt Photography",
      image: "https://ext.same-assets.com/2751894838/245807271.jpeg",
      link: "https://www.haleypruitt.com/",
      isExternal: true
    }
  ];

  const additionalServices = [
    {
      category: "BUSINESS - PRODUCT - SOCIAL",
      title: "Logo y Branding",
      image: "https://ext.same-assets.com/2751894838/3397783468.jpeg",
      link: "/photography"
    },
    {
      category: "GOOGLE RANKING - INCREASING TRAFFIC",
      title: "SEO",
      image: "https://ext.same-assets.com/2751894838/3178176672.png",
      link: "/seo"
    },
    {
      category: "BUSINESS CARDS - PACKAGING",
      title: "Print Design",
      image: "https://ext.same-assets.com/2751894838/3294515083.png",
      link: "/contact"
    },
    {
      category: "WEBSITE - EMAIL MARKETING - GROWTH",
      title: "Management",
      image: "https://ext.same-assets.com/2751894838/1404915815.png",
      link: "/contact"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#f5f5f3] py-16">
        <div className="container-custom">
          <div className="max-w-6xl">
            <h1 className="text-6xl md:text-7xl font-medium text-[#444b46] mb-10">
              Your Vision, Our Expertise
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={service.title} className="relative block">
                 <Link href={service.link}>
                  <div className="relative h-64 overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        width={300}
                        height={250}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#445146]"></div>
                  </div>
                  <div className="w-full h-0.5 bg-[#445146] mt-2" />
                  <div className="mt-4">
                    <h3 className="text-xl font-medium text-[#444b46]">
                      {service.title}
                    </h3>
                    <div className="mt-2">
                      <button className="inline-flex items-center px-4 py-1.5 border border-[#445146] text-sm font-medium text-[#445146] rounded-full hover:bg-black hover:text-white hover:span-white transition">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#445146] mr-2"></span>
                        Learn More
                      </button>

                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-0 bg-white">
        <div className="container-custom">
          <p className="text-2xl font-bold text-[#657769] mb-12 max-w-2xl">
            We enjoy making companies look better with great design and going the extra mile to provide a service that we would like to experience ourselves.
          </p>

          <h2 className="text-2xl font-medium text-[#444b46] mb-4">Other ways we help grow businesses</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            No matter the project or where you are on your journey, our approach stays the same - superior service and impeccable design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {additionalServices.map((service, index) => (
              <Link key={service.title} href={service.link}>
                <div className="relative block group">
                  <div className="relative h-64 overflow-hidden ">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      width={300}
                      height={250}
                      />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#445146]"></div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      {service.category}
                    </p>
                    <h3 className="text-2xl font-medium text-[#444b46]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <button className="px-4 py-2 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors">
                      Ver Más
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="relative block">
                <a href={study.link} target={study.isExternal ? "_blank" : "_self"} rel={study.isExternal ? "noopener noreferrer" : ""}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-medium text-[#444b46]">
                      {study.title}
                    </h3>
                    <div className="mt-3">
                      <button className="px-4 py-2 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors">
                        Launch the site
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            <div className="relative block">
              <Link href="/our-work">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2751894838/670551361.jpeg"
                    alt="View more of our work"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium text-[#444b46]">
                    View more of our work!
                  </h3>
                  <div className="mt-3">
                    <button className="px-4 py-2 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#657769] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">
              A strategic and tactical approach is essential for long-term goals, but what is even more important is keeping deadlines and promises. Our work gets results and we have satisfied clients to prove it.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
