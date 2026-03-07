"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { certificates } from "@/data/certificates";

import {
  BadgeCheck,
  User,
  Hash,
  Calendar,
  GraduationCap,
  FileText,
  Building2,
  Download,
  CheckCircle
} from "lucide-react";

// ── Inner component that uses useSearchParams ──────────────────────────────
function VerifyContent() {

  const params = useSearchParams();
  const cinParam = params.get("cin");

  const [certificate, setCertificate] = useState(null);
  const [checked, setChecked] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (cinParam) {
      const cin = decodeURIComponent(cinParam);
      const cert = certificates.find(
        c => c.cin.trim().toLowerCase() === cin.trim().toLowerCase()
      );
      if (cert) {
        setCertificate(cert);
      }
      setChecked(true);
    }
  }, [cinParam]);

  const handleDownload = async () => {
    if (!certificate?.image) return;
    setDownloading(true);
    try {
      const response = await fetch(certificate.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const ext = certificate.image.split(".").pop().split("?")[0] || "png";
      link.download = `Certificate_${certificate.cin}.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      window.open(certificate.image, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  const fields = certificate ? [
    { icon: Hash,          label: "CIN",              value: certificate.cin },
    { icon: User,          label: "Name",             value: certificate.name },
    { icon: FileText,      label: "Internship Track", value: certificate.track },
    { icon: Building2,     label: "College",          value: certificate.college },
    { icon: GraduationCap, label: "LoR",              value: certificate.lor },
    { icon: Calendar,      label: "Start Date",       value: certificate.start },
    { icon: Calendar,      label: "End Date",         value: certificate.end },
    { icon: Calendar,      label: "Issue Date",       value: certificate.issue },
  ] : [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-3 sm:px-6 py-15 relative overflow-hidden mt-10">

      {/* Page Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[55px] sm:text-[110px] lg:text-[170px] font-black text-gray-300 opacity-[0.12] tracking-widest whitespace-nowrap">
          ZENTRIX
        </span>
      </div>

      {certificate ? (

        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden relative z-10 border border-gray-100">

          {/* Top header bar */}
          <div className="px-5 py-3 flex items-center gap-2">
            <BadgeCheck className="text-blue-500 w-6 h-6 flex-shrink-0" />
            <span className="text-black font-semibold text-sm tracking-wide">
              Certificate Successfully Verified — Zentrix Infotech
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-8">

              {/* Left: Certificate Image + Download */}
              <div className="flex flex-col gap-3">
                <div className="rounded-xl overflow-hidden border border-black-200 shadow-sm bg-black-50">
                  <Image
                    src={certificate.image}
                    alt="Certificate"
                    width={650}
                    height={450}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] active:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-4 py-2.5 rounded-xl shadow transition-colors duration-150 text-sm w-full"
                >
                  <Download className="w-4 h-4" />
                  {downloading ? "Downloading…" : "Download Certificate"}
                </button>
              </div>

              {/* Right: Details with tick watermark */}
              <div className="flex flex-col justify-center relative">

                {/* Big tick watermark behind details */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <CheckCircle
                    className="text-green-500"
                    style={{ width: "75%", height: "75%", opacity: 0.06 }}
                    strokeWidth={1}
                  />
                </div>

                <h2 className="text-4xl font-serif text-gray-800 mb-1 relative z-10">
                  Certificate Details
                </h2>
                <p className="text-xs text-gray-400 mb-4 pb-4 border-b border-gray-100 relative z-10">
                  The following information was found for this certificate ID.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3 relative z-10">
                  {fields.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-2 min-w-0">
                      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-green-50 flex items-center justify-center mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm text-gray-800 font-medium break-words">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      ) : checked ? (

        <div className="text-center relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
            Invalid Certificate ❌
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            The certificate ID could not be verified.
          </p>
        </div>

      ) : (

        <p className="text-gray-500 relative z-10 text-sm">
          Checking certificate…
        </p>

      )}

    </div>
  );
}

// ── Page export wrapped in Suspense ───────────────────────────────────────
export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-sm">Checking certificate…</p>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}