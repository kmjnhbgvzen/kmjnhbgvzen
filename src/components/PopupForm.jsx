'use client';

import React, { useState, useEffect, useRef } from "react";
import { X, Sparkles, ChevronDown } from "lucide-react";

const PopupQueryForm = () => {
  const SUBMISSION_STORAGE_KEY = "zentrix-contact-form-submitted-at";
  const reopenTimerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const RECAPTCHA_SITE_KEY = "6LdfEigsAAAAAHguTeUVCbTNyAUs4k3oN1N4qS67";

  // List of major Indian cities
  const cities = [
    "Delhi",
    "Gurgaon",
    "Noida",
    "Ghaziabad",
    "Faridabad",
    "Moradabad",
    "Amroha",
    "Chandusi",
    "Rampur",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Chandigarh",
    "Haldwani",
    "Rudrapur",
    "Kashipur",
    "Rishikesh",
    "Nainital",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Dehradun",
    "Agra",
    "Meerut",
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Other",
  ];

  useEffect(() => {
    setIsClient(true);

    const handleOpenPopup = () => {
      if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
      setIsOpen(true);
    };
    window.addEventListener("open-contact-popup", handleOpenPopup);

    const hasRecentSubmission = () => {
      const submittedAt = Number(localStorage.getItem(SUBMISSION_STORAGE_KEY));
      return submittedAt && Date.now() - submittedAt < 24 * 60 * 60 * 1000;
    };

    const timer = hasRecentSubmission()
      ? null
      : setTimeout(() => setIsOpen(true), 6000);

    // Define the callback function globally
    window.recaptchaCallback = () => {
      console.log("reCAPTCHA loaded");
      setRecaptchaLoaded(true);

      setTimeout(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          try {
            const container = document.getElementById(
              "popup-recaptcha-container"
            );

            if (container && !recaptchaRef.current) {
              container.innerHTML = "";

              recaptchaRef.current = window.grecaptcha.render(
                "popup-recaptcha-container",
                {
                  sitekey: RECAPTCHA_SITE_KEY,
                  theme: "light",
                  size: "normal",
                }
              );

              console.log("reCAPTCHA rendered successfully");
            }
          } catch (error) {
            console.error("reCAPTCHA render error:", error);
          }
        }
      }, 100);
    };

    // Load reCAPTCHA script with callback
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.grecaptcha && window.grecaptcha.render) {
      window.recaptchaCallback();
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
      window.removeEventListener("open-contact-popup", handleOpenPopup);

      if (recaptchaRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaRef.current);
        } catch (e) {
          console.error("Cleanup error:", e);
        }
      }
    };
  }, []);

  // Re-render reCAPTCHA when popup opens
  useEffect(() => {
    if (
      isOpen &&
      recaptchaLoaded &&
      window.grecaptcha &&
      window.grecaptcha.render
    ) {
      setTimeout(() => {
        const container = document.getElementById(
          "popup-recaptcha-container"
        );

        if (container && recaptchaRef.current === null) {
          try {
            container.innerHTML = "";

            recaptchaRef.current = window.grecaptcha.render(
              "popup-recaptcha-container",
              {
                sitekey: RECAPTCHA_SITE_KEY,
                theme: "light",
                size: "normal",
              }
            );

            console.log("reCAPTCHA rendered on popup open");
          } catch (error) {
            console.error(
              "reCAPTCHA render error on open:",
              error
            );
          }
        }
      }, 200);
    }
  }, [isOpen, recaptchaLoaded]);

  // =========================
  // FORM CHANGE + VALIDATION
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME VALIDATION
    if (name === "name") {
      // Only CAPITAL letters A-Z and spaces allowed
      if (!/^[A-Z\s]*$/.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          name: "Only capital letters (A-Z) are allowed.",
        }));
        return;
      }

      setFieldErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }

    // EMAIL VALIDATION
    if (name === "email") {
      const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (value && !emailRegex.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else {
        setFieldErrors((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }

    // PHONE VALIDATION
    if (name === "phone") {
      // Only numbers allowed
      if (!/^\d*$/.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          phone: "Only numbers are allowed.",
        }));
        return;
      }

      // Maximum 10 digits
      if (value.length > 10) {
        return;
      }

      // First digit must be 6, 7, 8 or 9
      if (value.length > 0 && !/^[6-9]/.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          phone:
            "Mobile number must start with 6, 7, 8 or 9.",
        }));
        return;
      }

      // 10 digits complete
      if (value.length === 10) {
        setFieldErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      } else if (value.length > 0) {
        setFieldErrors((prev) => ({
          ...prev,
          phone: "Enter a 10-digit mobile number.",
        }));
      } else {
        setFieldErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleClose = () => {
    setIsOpen(false);

    const submittedAt = Number(localStorage.getItem(SUBMISSION_STORAGE_KEY));
    const hasRecentSubmission =
      submittedAt && Date.now() - submittedAt < 24 * 60 * 60 * 1000;

    if (!hasRecentSubmission) {
      reopenTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 7000);
    }
  };

  // =========================
  // SUBMIT VALIDATION
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const errors = {
      name: "",
      email: "",
      phone: "",
    };

    // NAME
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (!/^[A-Z\s]+$/.test(formData.name)) {
      errors.name =
        "Only capital letters (A-Z) are allowed.";
    }

    // EMAIL
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      errors.email = "Please enter a valid email address.";
    }

    // PHONE
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      errors.phone =
        "Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.";
    }

    setFieldErrors(errors);

    // Stop submission if validation fails
    if (errors.name || errors.email || errors.phone) {
      return;
    }

    setIsSubmitting(true);

    // =========================
    // VERIFY reCAPTCHA
    // =========================
    let recaptchaResponse = "";

    try {
      if (!window.grecaptcha) {
        setError(
          "reCAPTCHA not loaded. Please refresh the page."
        );
        setIsSubmitting(false);
        return;
      }

      recaptchaResponse = window.grecaptcha.getResponse(
        recaptchaRef.current
      );

      if (!recaptchaResponse) {
        setError(
          "Please complete the reCAPTCHA verification."
        );
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error("reCAPTCHA error:", err);

      setError(
        "reCAPTCHA verification failed. Please try again."
      );

      setIsSubmitting(false);
      return;
    }

    // =========================
    // CREATE FORM DATA
    // =========================
    const submitData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    submitData.append(
      "g-recaptcha-response",
      recaptchaResponse
    );

    submitData.append(
      "_next",
      "https://www.zentrixinfotech.com/thankyou"
    );

    submitData.append(
      "_subject",
      "New Query from Popup Form - " + formData.name
    );

    submitData.append("_captcha", "false");
    submitData.append("_template", "table");

    try {
      await fetch(
        "https://formsubmit.co/zentrixit@gmail.com",
        {
          method: "POST",
          mode: "no-cors",
          body: submitData,
        }
      );

      localStorage.setItem(SUBMISSION_STORAGE_KEY, String(Date.now()));
      if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);

      setTimeout(() => {
        window.location.href =
          "https://www.zentrixinfotech.com/thankyou";
      }, 1000);
    } catch (error) {
      console.error(
        "Form submission error:",
        error
      );

      setError(
        "There was an error submitting the form. Please try again."
      );

      setIsSubmitting(false);

      if (
        window.grecaptcha &&
        recaptchaRef.current !== null
      ) {
        window.grecaptcha.reset(
          recaptchaRef.current
        );
      }
    }
  };

  if (!isClient || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative p-5">

          {/* Header */}
          <div className="text-center mb-4">

            {/* Logo */}
            <div className="inline-flex items-center justify-center w-50 h-12 mb-2">
              <img
                src="/zentrix_logo_.png"
                alt="Logo"
                className="w-50 h-20 object-cover"
              />
            </div>

            <h2 className="text-xl font-medium font-serif text-black mb-1">
              🚀 Ready to Grow?
            </h2>

            <p className="text-gray-600 text-xs">
              Get a FREE consultation! Our experts are waiting.
            </p>
          </div>

          {/* General Error */}
          {error && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mr-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414 1 1 0 001.414-1.414L11.414 10l-1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>

                {error}
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-3">

            {/* Name & Email */}
            <div className="grid grid-cols-2 gap-2">

              {/* NAME */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm ${
                    fieldErrors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {fieldErrors.name && (
                  <p className="text-red-500 text-[10px] mt-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm ${
                    fieldErrors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {fieldErrors.email && (
                  <p className="text-red-500 text-[10px] mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone & City */}
            <div className="grid grid-cols-2 gap-2">

              {/* PHONE */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Phone{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  className={`w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm ${
                    fieldErrors.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {fieldErrors.phone && (
                  <p className="text-red-500 text-[10px] mt-1">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>

              {/* CITY */}
              <div className="relative">
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  City
                </label>

                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm appearance-none"
                >
                  <option value="">Select City</option>

                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <ChevronDown className="absolute right-2 top-7 w-3 h-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Service */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-700 mb-0.5">
                Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm appearance-none"
              >
                <option value="">Select Service</option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Mobile Development">
                  Mobile Development
                </option>
                <option value="Web Development">
                  Web Development
                </option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="UI & UX Designing">
                  UI & UX Designing
                </option>
                <option value="Cloud Solutions">
                  Cloud Solutions
                </option>
                <option value="Custom">
                  Other Services
                </option>
              </select>

              <ChevronDown className="absolute right-2 top-7 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-0.5">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* reCAPTCHA */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 0",
                minHeight: "90px",
              }}
            >
              <div
                id="popup-recaptcha-container"
                style={{
                  transform: "scale(0.88)",
                  transformOrigin: "center center",
                  width: "304px",
                  height: "78px",
                }}
              ></div>
            </div>

            {!recaptchaLoaded && (
              <div className="text-center text-xs text-gray-500 py-2">
                Loading reCAPTCHA...
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-2.5 bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] text-white font-semibold rounded-lg text-xs transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>

                  Submitting...
                </span>
              ) : (
                "🎯 Get FREE Consultation"
              )}
            </button>

            <p className="text-xs text-center text-gray-500">
              🔒 Your information is safe with us!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }

          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PopupQueryForm;