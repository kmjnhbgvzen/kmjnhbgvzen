import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Company in Moradabad: Price & Cost Guide",
  description:
    "Wondering what a digital marketing company in Moradabad charges? Learn pricing models, cost factors and how Zentrix Infotech keeps rates clear and fair.",
  keywords:
    "digital marketing company Moradabad price, digital marketing cost Moradabad, digital marketing company Moradabad cost, digital marketing agency charges Moradabad, digital marketing packages Moradabad, SEO cost Moradabad, social media marketing cost Moradabad, Google Ads management cost Moradabad, affordable digital marketing Moradabad, digital marketing pricing India, digital marketing company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad-cost",
  },

  openGraph: {
    title: "Digital Marketing Company in Moradabad: Price & Cost Guide",
    description:
      "Wondering what a digital marketing company in Moradabad charges? Learn pricing models, cost factors and how Zentrix Infotech keeps rates clear and fair.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad-cost",
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
    title: "Digital Marketing Company in Moradabad: Price & Cost Guide",
    description:
      "Wondering what a digital marketing company in Moradabad charges? Learn pricing models, cost factors and how Zentrix Infotech keeps rates clear and fair.",
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