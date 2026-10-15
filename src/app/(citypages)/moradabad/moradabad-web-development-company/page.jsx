import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad Web Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted Moradabad web development company building fast, secure, SEO-ready websites and web apps. Get a free quote today.",
  keywords:
    "Moradabad web development company, web development company in Moradabad, web development services Moradabad, web development agency Moradabad, custom web development Moradabad, website development company Moradabad, web application development Moradabad, ecommerce web development Moradabad, responsive web design Moradabad, business website development Moradabad, best web development company in Moradabad, professional web developers Moradabad, web development company near me Moradabad, Next.js React development Moradabad, SEO friendly web development Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-web-development-company",
  },

  openGraph: {
    title: "Moradabad Web Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted Moradabad web development company building fast, secure, SEO-ready websites and web apps. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-web-development-company",
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
    title: "Moradabad Web Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted Moradabad web development company building fast, secure, SEO-ready websites and web apps. Get a free quote today.",
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