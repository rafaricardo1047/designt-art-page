import Image from "next/image";
import Link from "next/link";

export default function WebsiteDesign() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://ext.same-assets.com/1623126413/1826535023.jpeg"
            alt="Website Design Northwest Arkansas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container-custom text-white">
              <div className="max-w-lg">
                <h2 className="text-5xl font-medium mb-4">
                  Dont settle, transform.
                </h2>
                <p className="text-xl">
                  Custom Website Design & Development for growing brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-medium text-[#444b46] mb-3">
              Creating digital experiences
            </h1>
            <h2 className="text-4xl font-medium text-[#444b46]">
              that drive revenue & loyalty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                Modern Website Design
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our data-driven methods with users in mind enable you to convert sales, tailor user journeys and create engaging content to amaze your customers. We partner with you to build a website that reaches your business goals and ambitions.
              </p>
            </div>
            <div>
              <Image
                src="https://ext.same-assets.com/1623126413/787774986.jpeg"
                alt="Website Design Northwest Arkansas"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://ext.same-assets.com/1623126413/2959258300.jpeg"
                alt="Website Design Northwest Arkansas"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                Is your website your best salesperson?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Here at Elevate Digital Designs, we let you sit back while we do the research and creation. We create fresh content, relevant categories, and easy-to-navigate design with your visitors in mind. We look at web design from a user's perspective, which sets us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Content Section */}
      <section className="py-16 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                Your Online Presence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer much more than a website. We give you a powerful marketing tool for your brand that has a focus on creativity, usability, and conversions. The result is a representation of your business that is appealing, functional, and will generate more leads.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="https://ext.same-assets.com/1623126413/4183629862.jpeg"
                alt="Website Design Northwest Arkansas"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
