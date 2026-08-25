"use client";

import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const [filledFields, setFilledFields] = useState({});

    // =========================
    // VALIDATION FUNCTIONS
    // =========================

    const validateName = (name) => {
        if (!name.trim()) {
            return "Name is required.";
        }

        // Only capital letters and spaces
        const nameRegex = /^[A-Z ]+$/;

        if (!nameRegex.test(name)) {
            return "Only CAPITAL letters and spaces are allowed.";
        }

        return "";
    };

    const validateEmail = (email) => {
        if (!email.trim()) {
            return "Email is required.";
        }

        const emailRegex =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailRegex.test(email)) {
            return "Please enter a valid email address.";
        }

        return "";
    };

    const validateMobile = (mobile) => {
        if (!mobile.trim()) {
            return "Mobile number is required.";
        }

        if (!/^\d+$/.test(mobile)) {
            return "Only numbers are allowed.";
        }

        if (!/^[6789]/.test(mobile)) {
            return "Mobile number must start with 6, 7, 8 or 9.";
        }

        if (mobile.length !== 10) {
            return "Mobile number must be exactly 10 digits.";
        }

        return "";
    };

    const validateService = (service) => {
        if (!service) {
            return "Please select a service.";
        }

        return "";
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return "Message is required.";
        }

        return "";
    };

    // =========================
    // HANDLE INPUT CHANGE
    // =========================

    const handleFieldChange = (field, value) => {
        let newValue = value;

        // NAME
        if (field === "name") {
            // Convert to uppercase
            newValue = value.toUpperCase();

            // Allow only A-Z and spaces
            newValue = newValue.replace(/[^A-Z ]/g, "");
        }

        // MOBILE
        if (field === "mobile") {
            // Only numbers
            newValue = value.replace(/\D/g, "");

            // Maximum 10 digits
            newValue = newValue.slice(0, 10);
        }

        setFormData((prev) => ({
            ...prev,
            [field]: newValue,
        }));

        setFilledFields((prev) => ({
            ...prev,
            [field]: newValue && newValue.trim() !== "",
        }));

        // Live validation
        let error = "";

        if (field === "name") {
            error = validateName(newValue);
        }

        if (field === "email") {
            error = validateEmail(newValue);
        }

        if (field === "mobile") {
            error = validateMobile(newValue);
        }

        if (field === "service") {
            error = validateService(newValue);
        }

        if (field === "message") {
            error = validateMessage(newValue);
        }

        setErrors((prev) => ({
            ...prev,
            [field]: error,
        }));
    };

    // =========================
    // FORM SUBMIT
    // =========================

    const handleSubmit = (e) => {
        const newErrors = {};

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const mobileError = validateMobile(formData.mobile);
        const serviceError = validateService(formData.service);
        const messageError = validateMessage(formData.message);

        if (nameError) {
            newErrors.name = nameError;
        }

        if (emailError) {
            newErrors.email = emailError;
        }

        if (mobileError) {
            newErrors.mobile = mobileError;
        }

        if (serviceError) {
            newErrors.service = serviceError;
        }

        if (messageError) {
            newErrors.message = messageError;
        }

        setErrors(newErrors);

        // Stop form submission if there are errors
        if (Object.keys(newErrors).length > 0) {
            e.preventDefault();
            return;
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 mt-10 py-20 overflow-x-hidden">

            {/* ================= HERO SECTION ================= */}

            <div className="text-center mb-2 mt-0">
                <h1 className="text-4xl md:text-5xl font-serif text-center mb-4 md:mt-10">
                    Contact Us
                </h1>

                <p className="text-1xl text-slate-600 max-w-8xl mx-auto px-4">
                    We're here to help bring your ideas to life. Reach out to us
                    and let's discuss how we can transform your vision into a
                    powerful digital solution.
                </p>
            </div>

            {/* ================= MAIN CONTENT ================= */}

            <section className="py-4 sm:py-12 md:py-1 px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-20 md:py-10 items-start">

                        {/* ================= RIGHT: CONTACT FORM ================= */}

                        <div className="lg:sticky lg:top-8">
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">

                                <div className="mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-serif bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-2 sm:mb-3">
                                        Send us a Message
                                    </h3>

                                    <p className="text-sm sm:text-base text-gray-600">
                                        Fill out the form below and we'll get back
                                        to you as soon as possible.
                                    </p>
                                </div>

                                <form
                                    action="https://formsubmit.co/zentrixit@gmail.com"
                                    method="POST"
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >

                                    {/* FormSubmit Configuration */}

                                    <input
                                        type="hidden"
                                        name="_next"
                                        value="https://zentrixinfotech.com/thankyou"
                                    />

                                    <input
                                        type="hidden"
                                        name="_subject"
                                        value="New Contact Form Submission"
                                    />

                                    <input
                                        type="hidden"
                                        name="_captcha"
                                        value="false"
                                    />

                                    <input
                                        type="hidden"
                                        name="_template"
                                        value="table"
                                    />

                                    {/* ================= NAME ================= */}

                                    <div className="relative">

                                        <input
                                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                errors.name
                                                    ? "border-red-500 bg-red-50"
                                                    : "border-gray-200 bg-gray-50/50"
                                            } text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer`}
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            autoComplete="name"
                                            required
                                        />

                                        <label
                                            className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                            htmlFor="name"
                                        >
                                            Your Name *
                                        </label>

                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* ================= EMAIL + MOBILE ================= */}

                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5">

                                        {/* EMAIL */}

                                        <div className="relative">

                                            <input
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.email
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 bg-gray-50/50"
                                                } text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer`}
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    handleFieldChange(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                autoComplete="email"
                                                required
                                            />

                                            <label
                                                className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                                htmlFor="email"
                                            >
                                                Your Email *
                                            </label>

                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1 ml-1">
                                                    {errors.email}
                                                </p>
                                            )}

                                        </div>

                                        {/* MOBILE */}

                                        <div className="relative">

                                            <input
                                                className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                    errors.mobile
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 bg-gray-50/50"
                                                } text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md placeholder-transparent peer`}
                                                id="mobile"
                                                name="mobile"
                                                type="tel"
                                                placeholder="Mobile Number"
                                                value={formData.mobile}
                                                onChange={(e) =>
                                                    handleFieldChange(
                                                        "mobile",
                                                        e.target.value
                                                    )
                                                }
                                                inputMode="numeric"
                                                maxLength={10}
                                                required
                                            />

                                            <label
                                                className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                                htmlFor="mobile"
                                            >
                                                Mobile Number *
                                            </label>

                                            {errors.mobile && (
                                                <p className="text-red-500 text-xs mt-1 ml-1">
                                                    {errors.mobile}
                                                </p>
                                            )}

                                        </div>

                                    </div>

                                    {/* ================= SERVICE ================= */}

                                    <div className="relative">

                                        <select
                                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                errors.service
                                                    ? "border-red-500 bg-red-50"
                                                    : "border-gray-200 bg-gray-50/50"
                                            } text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md appearance-none cursor-pointer`}
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    "service",
                                                    e.target.value
                                                )
                                            }
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                backgroundPosition:
                                                    "right 12px center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "18px",
                                            }}
                                            required
                                        >

                                            <option value="">
                                                Select a Service
                                            </option>

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

                                        </select>

                                        <label
                                            className={`absolute left-3 -top-2.5 px-2 bg-white text-xs font-medium pointer-events-none transition-all duration-200 ${
                                                filledFields.service
                                                    ? "text-[#3B82F6]"
                                                    : "text-gray-500"
                                            }`}
                                            htmlFor="service"
                                        >
                                            Service Interest *
                                        </label>

                                        {errors.service && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.service}
                                            </p>
                                        )}

                                    </div>

                                    {/* ================= MESSAGE ================= */}

                                    <div className="relative">

                                        <textarea
                                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                                                errors.message
                                                    ? "border-red-500 bg-red-50"
                                                    : "border-gray-200 bg-gray-50/50"
                                            } text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:shadow-md min-h-28 resize-y placeholder-transparent peer`}
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <label
                                            className="absolute left-3 -top-2.5 px-2 bg-white text-[#3B82F6] text-xs font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#3B82F6]"
                                            htmlFor="message"
                                        >
                                            Your Message *
                                        </label>

                                        {errors.message && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.message}
                                            </p>
                                        )}

                                    </div>

                                    {/* ================= SUBMIT ================= */}

                                    <div className="pt-5">

                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-[#2563EB] hover:to-[#1D4ED8] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                            Send Message
                                        </button>

                                    </div>

                                </form>
                            </div>
                        </div>

                        {/* ================= LEFT: CONTACT INFORMATION ================= */}

                        <div className="space-y-2">

                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">

                                <h2 className="text-3xl sm:text-3xl font-Serif font-medium bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-3 sm:mb-4">
                                    LET'S CONNECT
                                </h2>

                                <p className="text-gray-600 text-sm sm:text-base">
                                    We endeavor to answer all inquiries within
                                    24 hours on business days. Choose your
                                    preferred way to reach us.
                                </p>

                            </div>

                            {/* ================= CONTACT CARDS ================= */}

                            <div className="space-y-2">

                                {/* ADDRESS */}

                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">

                                            <svg
                                                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>

                                        </div>

                                        <div className="flex-1 min-w-0">

                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">
                                                Our Offices
                                            </h3>

                                            <div className="space-y-2">

                                                <p className="text-sm text-gray-600 wrap-break-word">
                                                    1:- 12/11, Buddhi Vihar
                                                    Phase 2, Moradabad, Uttar
                                                    Pradesh 244001
                                                </p>

                                                <p className="text-sm text-gray-600 wrap-break-word">
                                                    2:- A-20 Sunshine Apartment,
                                                    Ghaziabad, UP - 201013
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* EMAIL */}

                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">

                                            <svg
                                                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>

                                        </div>

                                        <div className="flex-1 min-w-0">

                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">
                                                Email Us
                                            </h3>

                                            <p className="text-sm text-gray-600 font-medium break-all">
                                                info@zentrixinfotech.com
                                            </p>

                                            <p className="text-xs text-gray-500 mt-1">
                                                We'll respond within 24 hours
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* PHONE */}

                                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gradient-to-br from-[#1E293B] to-[#3B82F6] rounded-xl flex items-center justify-center">

                                            <svg
                                                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>

                                        </div>

                                        <div className="flex-1 min-w-0">

                                            <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2">
                                                Call Us
                                            </h3>

                                            <p className="text-sm text-gray-600 font-medium">
                                                +91 72488 00839, +91 6397036898
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}