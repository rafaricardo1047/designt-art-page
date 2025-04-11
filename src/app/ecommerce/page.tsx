import Image from "next/image";
import Link from "next/link";

export default function Ecommerce() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="https://ext.same-assets.com/1843023774/1580343021.jpeg"
            alt="eCommerce Website Design Branson Missouri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="container-custom text-white">
              <div className="max-w-lg">
                <h1 className="text-5xl font-medium mb-4">
                  eCommerce Website Design
                </h1>
                <p className="text-xl">
                  Sell 24/7 with your eCommerce website
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
            <h2 className="text-4xl font-medium text-[#444b46] mb-3">
              Be available anytime, anywhere, and never miss a sell
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                User Focused Websites
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our full suite of eCommerce services includes everything you need to maximize your business potential no matter where you're in your eCommerce journey.
              </p>
            </div>
            <div>
              <Image
                src="https://ext.same-assets.com/1843023774/2592647603.jpeg"
                alt="eCommerce Website Design Branson Missouri"
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
                src="https://ext.same-assets.com/1843023774/2657505473.jpeg"
                alt="eCommerce Website Design Branson Missouri"
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
                Whether you're an established brand looking for a redesign or to migrate to a new platform, or a new business just starting out, our design team creates thoughtful user experiences that shoppers want to buy from. From initial research and strategy to wireframing to UX/CX/UI design, we follow a full-circle approach to deliver the best shopping experience.
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
                Long Term Partner
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We have extensive knowledge of eCommerce platforms, which allows our team to effectively deliver complex builds and extend the functionality as your business continues to evolve. We continue to offer support after your eCommerce website is finished, making sure you receive the most out of your investment.
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
                src="https://ext.same-assets.com/1843023774/2088422016.jpeg"
                alt="eCommerce Website Design Branson Missouri"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/1843023774/3077635365.jpeg"
                alt="eCommerce Website Design Branson Missouri"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                Custom eCommerce Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every business is unique, and so should be your online store. We design and develop custom eCommerce solutions that reflect your brand identity and meet your specific business requirements, ensuring a seamless shopping experience for your customers.
              </p>
              <div className="mt-8">
                <Link
                  href="/our-work"
                  className="px-6 py-3 bg-[#657769] text-white rounded-md hover:bg-[#556759] transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
