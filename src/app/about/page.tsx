import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-medium text-[#444b46] mb-6">Hello.</h1>
              <p className="text-xl">We're Elevate Digital Designs</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-[#444b46] mb-6">
                We build websites from scratch, fix broken ones, and have the design creativity and forward-thinking approach needed to help our clients achieve long-term success.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12">
            <Image
              src="https://ext.same-assets.com/2520953355/3961957600.jpeg"
              alt="Website Design Northwest Arkansas"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-medium text-[#444b46] mb-8">Our Purpose</h2>
            <p className="text-lg mb-6">
              We believe that creativity matters. So we lead with ideas, then design. It's what sets us apart.
            </p>
            <p className="text-lg mb-6">
              Clients come to us for our creativity. They stay with us because we can unravel the mysteries of their technical needs without the jargon.
            </p>
            <p className="text-lg mb-6">
              The websites we build make our client's lives easier - and in many ways, that's where they get a real return on their investment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="mb-12">
            <Image
              src="https://ext.same-assets.com/2520953355/119726085.jpeg"
              alt="Website Design Northwest Arkansas"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-medium text-[#444b46] mb-8">Our Clients</h2>
            <p className="text-lg mb-6">
              Our clients are diverse and far-spread, ranging from small startups to industry leaders, but no matter where they are in their journey, we help accomplish existing goals and set new ones for future growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* One Goal Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12">
            <Image
              src="https://ext.same-assets.com/2520953355/1323211530.jpeg"
              alt="Website Design Northwest Arkansas"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-medium text-[#444b46] mb-8">One Goal</h2>
            <p className="text-lg mb-6">
              Our goal is to add value without adding a bunch of unnecessary "process" onto your plate. We know that you and your team have a lot going on already, so we've fine-tuned our approach to ensure that working with us is as efficient, fun, and painless as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
