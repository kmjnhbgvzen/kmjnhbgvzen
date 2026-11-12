import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Healthcare SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech offers healthcare SEO services in Moradabad for hospitals, clinics and doctors. Rank higher on Google, get more calls and appointments with ethical, local SEO.",
  keywords:
    "healthcare SEO services Moradabad, medical SEO Moradabad, hospital SEO Moradabad, clinic SEO Moradabad, doctor SEO services Moradabad, local SEO for doctors, Google Business Profile optimisation Moradabad, healthcare digital marketing Moradabad, SEO company for hospitals, patient lead generation Moradabad, medical website SEO, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-seo-services-moradabad",
  },


  openGraph: {
    title: "Healthcare SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech offers healthcare SEO services in Moradabad for hospitals, clinics and doctors. Rank higher on Google, get more calls and appointments with ethical, local SEO.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-seo-services-moradabad",
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
    title: "Healthcare SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech offers healthcare SEO services in Moradabad for hospitals, clinics and doctors. Rank higher on Google, get more calls and appointments with ethical, local SEO.",
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