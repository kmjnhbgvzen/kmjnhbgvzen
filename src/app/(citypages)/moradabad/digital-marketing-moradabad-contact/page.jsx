import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Contact Digital Marketing Company in Moradabad | Zentrix",
  description:
    "Contact Zentrix Infotech, a digital marketing company in Moradabad. Call, WhatsApp or email us for SEO, social media, PPC and web solutions. Get a free consultation.",
  keywords:
    "digital marketing Moradabad contact, contact digital marketing company Moradabad, digital marketing company Moradabad phone number, digital marketing agency Moradabad address, digital marketing company Moradabad contact number, free digital marketing consultation Moradabad, hire digital marketing company Moradabad, get a quote digital marketing Moradabad, digital marketing company in Moradabad, SEO and social media marketing Moradabad, Zentrix Infotech contact",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-contact",
  },

  openGraph: {
    title: "Contact Digital Marketing Company in Moradabad | Zentrix",
    description:
      "Contact Zentrix Infotech, a digital marketing company in Moradabad. Call, WhatsApp or email us for SEO, social media, PPC and web solutions. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-contact",
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
    title: "Contact Digital Marketing Company in Moradabad | Zentrix",
    description:
      "Contact Zentrix Infotech, a digital marketing company in Moradabad. Call, WhatsApp or email us for SEO, social media, PPC and web solutions. Get a free consultation.",
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