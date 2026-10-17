"use client";

import { useState } from "react";
import { User, Mail, Phone, Briefcase, MessageSquare, Send } from "lucide-react";

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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 pt-8 sm:pt-12 lg:pt-36 pb-12 sm:pb-20 overflow-x-hidden">

            {/* ================= HERO SECTION ================= */}

            <div className="text-left md:text-center mb-3 sm:mb-4 mt-0 px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight tracking-tight text-left md:text-center mt-0">
                    Contact Us
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-left md:text-center px-0 md:px-4">
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
                            <div className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.14),0_0_0_1px_rgba(219,234,254,0.7)] overflow-hidden">

                                {/* Top Blue Accent Bar */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#1D4ED8]" />

                                <div className="p-6 sm:p-8 lg:p-9">

                                    <div className="mb-6 sm:mb-7">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] mb-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                            <span>GET IN TOUCH</span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
                                            Send us a Message
                                        </h3>

                                        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                                            Fill out the form below and we'll get back
                                            to you as soon as possible.
                                        </p>
                                    </div>

                                    <form
                                        action="https://formsubmit.co/zentrixit@gmail.com"
                                        method="POST"
                                        onSubmit={handleSubmit}
                                        className="space-y-4 sm:space-y-5"
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

                                        <div>
                                            <label
                                                className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                                                htmlFor="name"
                                            >
                                                Your Name *
                                            </label>

                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                                                    <User className="w-4 h-4" />
                                                </div>

                                                <input
                                                    className={`w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border ${
                                                        errors.name
                                                            ? "border-red-400 bg-red-50/30 text-[#0F172A] focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                                            : "border-[#DBEAFE] bg-[#F8FAFC] hover:bg-white focus:bg-white text-[#0F172A] hover:border-blue-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#EFF6FF]"
                                                    } text-sm placeholder:text-slate-400 outline-none transition-all duration-200`}
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
                                            </div>

                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1.5 font-medium">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* ================= EMAIL + MOBILE ================= */}

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                                            {/* EMAIL */}

                                            <div>
                                                <label
                                                    className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                                                    htmlFor="email"
                                                >
                                                    Your Email *
                                                </label>

                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                                                        <Mail className="w-4 h-4" />
                                                    </div>

                                                    <input
                                                        className={`w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border ${
                                                            errors.email
                                                                ? "border-red-400 bg-red-50/30 text-[#0F172A] focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                                                : "border-[#DBEAFE] bg-[#F8FAFC] hover:bg-white focus:bg-white text-[#0F172A] hover:border-blue-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#EFF6FF]"
                                                        } text-sm placeholder:text-slate-400 outline-none transition-all duration-200`}
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
                                                </div>

                                                {errors.email && (
                                                    <p className="text-red-500 text-xs mt-1.5 font-medium">
                                                        {errors.email}
                                                    </p>
                                                )}

                                            </div>

                                            {/* MOBILE */}

                                            <div>
                                                <label
                                                    className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                                                    htmlFor="mobile"
                                                >
                                                    Mobile Number *
                                                </label>

                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                                                        <Phone className="w-4 h-4" />
                                                    </div>

                                                    <input
                                                        className={`w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border ${
                                                            errors.mobile
                                                                ? "border-red-400 bg-red-50/30 text-[#0F172A] focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                                                : "border-[#DBEAFE] bg-[#F8FAFC] hover:bg-white focus:bg-white text-[#0F172A] hover:border-blue-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#EFF6FF]"
                                                        } text-sm placeholder:text-slate-400 outline-none transition-all duration-200`}
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
                                                </div>

                                                {errors.mobile && (
                                                    <p className="text-red-500 text-xs mt-1.5 font-medium">
                                                        {errors.mobile}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                        {/* ================= SERVICE ================= */}

                                        <div>
                                            <label
                                                className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                                                htmlFor="service"
                                            >
                                                Service Interest *
                                            </label>

                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                                                    <Briefcase className="w-4 h-4" />
                                                </div>

                                                <select
                                                    className={`w-full pl-10 pr-10 py-3 sm:py-3.5 rounded-xl border ${
                                                        errors.service
                                                            ? "border-red-400 bg-red-50/30 text-[#0F172A] focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                                            : "border-[#DBEAFE] bg-[#F8FAFC] hover:bg-white focus:bg-white text-[#0F172A] hover:border-blue-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#EFF6FF]"
                                                    } text-sm outline-none transition-all duration-200 appearance-none cursor-pointer`}
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
                                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%232563EB' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.75' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                        backgroundPosition:
                                                            "right 14px center",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundSize: "16px",
                                                    }}
                                                    required
                                                >

                                                    <option value="" className="text-slate-400">
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
                                            </div>

                                            {errors.service && (
                                                <p className="text-red-500 text-xs mt-1.5 font-medium">
                                                    {errors.service}
                                                </p>
                                            )}

                                        </div>

                                        {/* ================= MESSAGE ================= */}

                                        <div>
                                            <label
                                                className="block text-xs sm:text-sm font-semibold text-[#0F172A] mb-1.5"
                                                htmlFor="message"
                                            >
                                                Your Message *
                                            </label>

                                            <div className="relative group">
                                                <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-[#2563EB]">
                                                    <MessageSquare className="w-4 h-4" />
                                                </div>

                                                <textarea
                                                    className={`w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border ${
                                                        errors.message
                                                            ? "border-red-400 bg-red-50/30 text-[#0F172A] focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                                            : "border-[#DBEAFE] bg-[#F8FAFC] hover:bg-white focus:bg-white text-[#0F172A] hover:border-blue-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#EFF6FF]"
                                                    } text-sm placeholder:text-slate-400 outline-none transition-all duration-200 min-h-[120px] sm:min-h-[130px] resize-y leading-relaxed`}
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
                                            </div>

                                            {errors.message && (
                                                <p className="text-red-500 text-xs mt-1.5 font-medium">
                                                    {errors.message}
                                                </p>
                                            )}

                                        </div>

                                        {/* ================= SUBMIT ================= */}

                                        <div className="pt-2">

                                            <button
                                                type="submit"
                                                className="w-full py-3.5 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#EFF6FF] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 group"
                                            >
                                                <span>Send Message</span>
                                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </button>

                                            <div className="flex items-center justify-center gap-2 pt-3 text-xs text-[#475569]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                                <span>We respond promptly within 24 hours</span>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* ================= LEFT: CONTACT INFORMATION ================= */}

                        <div className="space-y-2">

                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">

                                <h2 className="text-2xl sm:text-3xl font-serif font-medium bg-gradient-to-r from-[#1E293B] to-[#3B82F6] bg-clip-text text-transparent mb-3 sm:mb-4">
                                    LET'S CONNECT
                                </h2>

                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
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
                                                +91 72488 00839, +91 63970 36898
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