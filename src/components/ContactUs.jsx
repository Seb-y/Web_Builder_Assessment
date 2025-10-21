import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Call or Visit
          </h2>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 outline-none transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg"
              >
                SEND
              </button>

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  className="underline hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d-116.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiAxMTbCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>

            {/* WhatsApp Button */}
            <div>
              <button className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
                <MessageCircle size={20} />
                Message us on WhatsApp
              </button>
            </div>

            {/* Business Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Marci Metzger - THE RIDGE REALTY GROUP
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin
                    size={20}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone
                    size={20}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <a
                    href="tel:2069196886"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    (206) 919-6886
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Clock
                    size={20}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Office Hours
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Open daily: 8:00 am - 7:00 pm
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    Appointments outside office hours available upon request.
                    Just call!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
