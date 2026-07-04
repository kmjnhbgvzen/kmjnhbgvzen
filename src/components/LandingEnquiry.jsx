'use client';

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const TechServicesForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef(null);
  const scriptLoadedRef = useRef(false);
  const renderAttemptedRef = useRef(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const RECAPTCHA_SITE_KEY = "6LdfEigsAAAAAHguTeUVCbTNyAUs4k3oN1N4qS67";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || scriptLoadedRef.current) return;

    const renderRecaptcha = () => {
      const container = document.getElementById('recaptcha-container');
      if (!container) {
        console.error('Container not found');
        return;
      }

      if (!window.grecaptcha || !window.grecaptcha.render) {
        console.log('grecaptcha not ready yet');
        return;
      }

      try {
        console.log('Rendering reCAPTCHA...');
        container.innerHTML = '';

        recaptchaRef.current = window.grecaptcha.render('recaptcha-container', {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: 'light',
          size: 'normal',
          callback: (token) => {
            console.log('reCAPTCHA success!');
          },
          'error-callback': () => {
            console.error('reCAPTCHA error - check console');
            setError('reCAPTCHA failed. Please check that your domain is authorized in Google reCAPTCHA admin.');
            renderAttemptedRef.current = false;
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
            renderAttemptedRef.current = false;
          }
        });

        console.log('reCAPTCHA rendered with widget ID:', recaptchaRef.current);
        setRecaptchaLoaded(true);
        renderAttemptedRef.current = true;
      } catch (error) {
        console.error('reCAPTCHA render error:', error);
        setError('Failed to initialize reCAPTCHA: ' + error.message);
        renderAttemptedRef.current = false;
      }
    };

    // Try to render immediately if grecaptcha is already available
    if (window.grecaptcha && window.grecaptcha.render) {
      console.log('grecaptcha already available');
      setTimeout(renderRecaptcha, 100);
      return;
    }

    window.recaptchaCallback = () => {
      console.log('reCAPTCHA script loaded via callback');
      setTimeout(renderRecaptcha, 100);
    };

    const existingScript = document.getElementById('recaptcha-script');
    if (existingScript) {
      console.log('reCAPTCHA script already in DOM');
      if (window.grecaptcha && window.grecaptcha.render) {
        renderRecaptcha();
      } else {
        const checkInterval = setInterval(() => {
          if (window.grecaptcha && window.grecaptcha.render) {
            clearInterval(checkInterval);
            renderRecaptcha();
          }
        }, 100);
        setTimeout(() => clearInterval(checkInterval), 10000);
      }
    } else {
      console.log('Loading reCAPTCHA script...');
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Failed to load reCAPTCHA script');
        setError('Failed to load reCAPTCHA. Please check your internet connection.');
      };
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      if (recaptchaRef.current !== null && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(recaptchaRef.current);
        } catch (e) {
          console.error('Cleanup error:', e);
        }
      }
    };
  }, [isClient]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate phone number
    if (!formData.phone.trim()) {
      setError('Phone number is required.');
      setIsSubmitting(false);
      return;
    }

    // Verify reCAPTCHA
    let recaptchaResponse = '';
    try {
      if (!window.grecaptcha) {
        setError("reCAPTCHA not loaded. Please refresh the page.");
        setIsSubmitting(false);
        return;
      }

      if (recaptchaRef.current === null) {
        setError("reCAPTCHA not initialized. Please refresh the page.");
        setIsSubmitting(false);
        return;
      }

      recaptchaResponse = window.grecaptcha.getResponse(recaptchaRef.current);
      console.log('reCAPTCHA response received:', recaptchaResponse ? 'Yes' : 'No');
      
      if (!recaptchaResponse) {
        setError("Please complete the reCAPTCHA verification by checking the box.");
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error('reCAPTCHA verification error:', err);
      setError("reCAPTCHA verification failed: " + err.message);
      setIsSubmitting(false);
      return;
    }

    // Create form data
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    submitData.append("g-recaptcha-response", recaptchaResponse);
    submitData.append("_next", "https://www.zentrixinfotech.com/thankyou");
    submitData.append("_subject", "New Tech Services Inquiry from " + formData.name);
    submitData.append("_captcha", "false");
    submitData.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/zentrixit@gmail.com", {
        method: "POST",
        mode: "no-cors",
        body: submitData,
      });

      console.log('Form submitted successfully');
      
      // Show success message
      setSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaRef.current);
        } catch (e) {
          console.error('Reset error:', e);
        }
      }
      
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "https://www.zentrixinfotech.com/thankyou";
      }, 2000);

    } catch (error) {
      console.error("Form submission error:", error);
      setError("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
      
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaRef.current);
        } catch (e) {
          console.error('Reset error:', e);
        }
      }
    }
  };

  if (!isClient) {
    return (
      <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-rose-100 p-4 w-full max-w-sm mx-auto">
        <h3 className="text-lg font-Serif font-medium text-center text-gray-800 mb-3">
          Let&apos;s Grow Your Business Together
        </h3>
        <div className="space-y-3">
          <div className="h-64 flex items-center justify-center">
            <div className="text-gray-500 text-sm">Loading form...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-rose-100 p-4 w-full max-w-sm mx-auto">
      <h3 className="text-lg font-Serif font-medium text-center text-gray-800 mb-3">
        Let&apos;s Grow Your Business Together
      </h3>
      
      {success && (
        <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-green-700 text-xs">
          <div className="flex items-start">
            <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="break-words">✓ Form submitted successfully!</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs">
          <div className="flex items-start">
            <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="break-words">{error}</span>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Name 
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 py-2 border text-black border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Email 
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2 py-2 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
            />
          </div>
          <div className="relative">
            <label className="block text-xs text-gray-600 mb-1">
              Services 
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-2 py-2 pr-7 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 bg-white appearance-none"
            >
              <option value="">Select a Service</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Software Development">Software Development</option>
              <option value="UI & UX Designing">UI & UX Designing</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Custom">Custom (Specify in Message)</option>
            </select>
            <ChevronDown className="absolute right-2 top-7 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Message 
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-2 py-2 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
          />
        </div>

        {/* reCAPTCHA Container */}
        <div className="flex justify-center my-3 min-h-[78px]">
          <div id="recaptcha-container"></div>
        </div>

        {!recaptchaLoaded && (
          <div className="text-center text-xs text-gray-500 py-2">
            <div className="inline-flex items-center">
              <svg className="animate-spin h-4 w-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading reCAPTCHA...
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || !recaptchaLoaded || success}
          className="w-full py-2.5 bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] text-white font-semibold rounded text-sm hover:opacity-90 transition-opacity shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {success ? "✓ Submitted!" : isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </div>
    </div>
  );
};

export default TechServicesForm;