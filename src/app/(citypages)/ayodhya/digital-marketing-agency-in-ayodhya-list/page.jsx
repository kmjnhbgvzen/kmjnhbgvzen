import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya List 2026 – Verified Options",
  description:
    "Explore a clear, informational list of digital marketing agencies serving Ayodhya in 2026, what services each type offers, and how to verify claims before you hire.",
  keywords:
    "digital marketing agency in ayodhya list, digital marketing agencies ayodhya, top digital marketing companies ayodhya, seo company ayodhya list, best digital marketing agency near ayodhya, digital marketing services ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-list",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya List 2026 – Verified Options",
    description:
      "Explore a clear, informational list of digital marketing agencies serving Ayodhya in 2026, what services each type offers, and how to verify claims before you hire.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-list",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Ayodhya List 2026 – Verified Options",
    description:
      "Explore a clear, informational list of digital marketing agencies serving Ayodhya in 2026, what services each type offers, and how to verify claims before you hire.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </>
  );
}