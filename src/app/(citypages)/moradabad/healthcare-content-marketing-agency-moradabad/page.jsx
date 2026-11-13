import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Healthcare Content Marketing Agency in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a healthcare content marketing agency in Moradabad. Doctor-reviewed blogs, treatment pages and patient education that build trust and enquiries.",
  keywords:
    "healthcare content marketing agency Moradabad, medical content writing Moradabad, healthcare content marketing services, content marketing for hospitals Moradabad, content marketing for doctors Moradabad, medical blog writing services, patient education content, treatment page writing, healthcare SEO content, clinic content marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-content-marketing-agency-moradabad",
  },

  openGraph: {
    title:
      "Healthcare Content Marketing Agency in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a healthcare content marketing agency in Moradabad. Doctor-reviewed blogs, treatment pages and patient education that build trust and enquiries.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-content-marketing-agency-moradabad",
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
    title:
      "Healthcare Content Marketing Agency in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a healthcare content marketing agency in Moradabad. Doctor-reviewed blogs, treatment pages and patient education that build trust and enquiries.",
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