import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Design and Development Company Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad website design and development company. Get custom, fast, mobile-friendly, SEO-ready websites that turn visitors into customers.",
  keywords:
    "Moradabad website design and development company, website design and development company in Moradabad, website designing and development Moradabad, web design and development services Moradabad, website designing company Moradabad, website development company in Moradabad, custom website design Moradabad, responsive website design Moradabad, UI UX design company Moradabad, ecommerce website design and development Moradabad, best website design company in Moradabad, professional website design Moradabad, SEO friendly website design Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-website-design-and-development-company",
  },

  openGraph: {
    title: "Website Design and Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad website design and development company. Get custom, fast, mobile-friendly, SEO-ready websites that turn visitors into customers.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-design-and-development-company",
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
    title: "Website Design and Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad website design and development company. Get custom, fast, mobile-friendly, SEO-ready websites that turn visitors into customers.",
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