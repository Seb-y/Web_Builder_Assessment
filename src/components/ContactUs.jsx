import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          error = "Name must be less than 50 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.trim().length > 500) {
          error = "Message must be less than 500 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = () => {
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      // Handle form submission
      console.log("Form submitted:", formData);
      alert("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim() &&
    !errors.name &&
    !errors.email &&
    !errors.message;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white mb-4">
            Call or Visit
          </h2>
          <div className="w-24 h-1 bg-emerald-800 dark:bg-white mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div
            className="bg-gradient-to-br from-neutral-50 via-slate-300 to-neutral-50
  dark:from-gray-800 dark:via-gray-600 dark:to-[#020202]/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-white mb-6">
              Send Message
            </h3>
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    touched.name && errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-600 focus:ring-emerald-400"
                  } bg-white dark:bg-stone-100 text-gray-900 dark:text-gray-600 focus:ring-2 outline-none transition-all`}
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    touched.email && errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-600 focus:ring-emerald-400"
                  } bg-white dark:bg-stone-100 text-gray-900 dark:text-gray-600 focus:ring-2 outline-none transition-all`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    touched.message && errors.message
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-600 focus:ring-emerald-400"
                  } bg-white dark:bg-stone-100 text-gray-900 dark:text-gray-600 focus:ring-2 outline-none transition-all resize-none`}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-xs text-gray-500 dark:text-white mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 shadow-lg ${
                  isFormValid
                    ? "bg-gradient-to-l from-[#4BC0C8] to-[#00bf8f] text-white hover:brightness-110"
                    : "bg-gray-300 dark:bg-gray-300 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                SEND
              </button>

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-gray-500 dark:text-white text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  className="underline hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline hover:text-emerald-700 dark:hover:text-emerald-300"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272692037134!2d-115.95525319999999!3d36.18424939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1761141027921!5m2!1sen!2sph"
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
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-white">
                Marci Metzger - THE RIDGE REALTY GROUP
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <MapPin
                    size={20}
                    className="text-emerald-700 dark:text-emerald-300 align-center"
                  />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-white mt-1">
                    3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <Phone
                    size={20}
                    className="text-emerald-700 dark:text-emerald-300 align-center"
                  />
                </div>
                <div>
                  <a
                    href="tel:2069196886"
                    className="text-gray-700 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    (206) 919-6886
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <Clock
                    size={20}
                    className="text-emerald-700 dark:text-emerald-300"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-emerald-900 dark:text-white">
                    Office Hours
                  </h4>
                  <p className="text-gray-700 dark:text-white">
                    Open daily: 8:00 am - 7:00 pm
                  </p>
                  <p className="text-sm text-gray-600 dark:text-white italic">
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
