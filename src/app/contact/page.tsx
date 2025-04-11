"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: "",
    contactMethod: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real scenario, you would send this data to your server
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[#f5f5f3]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-medium text-[#444b46] mb-3">
              Let's Work Together
            </h1>
            <p className="text-lg uppercase text-[#657769]">
              DESIGNED TO ENGAGE, CREATED IN HOUSE
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Image */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3290845516/3059233686.jpeg"
                alt="Website Design Northwest Arkansas"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 shadow-sm">
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                    Fill out our form, we will be right with you!
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="eMail"
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Services and Contact Method */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="services"
                          value={formData.services}
                          onChange={handleChange}
                          placeholder="Services you are interested in"
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                        />
                      </div>
                      <div>
                        <select
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                        >
                          <option value="">How should we reach out?</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What can we do for you? Tell us a little about your project and goals..."
                        rows={5}
                        className="w-full px-3 py-2 border-b border-gray-300 focus:border-[#657769] focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#657769] text-white font-medium rounded-md hover:bg-[#556759] transition-colors"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-3xl font-medium text-[#444b46] mb-6">
                    Thanks for submitting!
                  </h2>
                  <p className="text-lg text-gray-600">
                    We've received your message and will be in touch with you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
