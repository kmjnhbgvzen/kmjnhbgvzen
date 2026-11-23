import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development Company in Lucknow | Zentrix Infotech",
  description:
    "Looking for a web development company in Lucknow? Zentrix Infotech builds fast, responsive, SEO-friendly business websites. Get a free consultation today.",
  keywords:
    "Web Development Company in Lucknow, Website Development Company in Lucknow, Web Development Services in Lucknow, Custom Website Development in Lucknow, Business Website Development in Lucknow, Ecommerce Website Development in Lucknow, Responsive Website Development Company in Lucknow, Website Designing Company in Lucknow, Professional Website Developers in Lucknow, Affordable Website Development in Lucknow, Best Web Development Company in Lucknow, Website Redesign in Lucknow, Web Application Development in Lucknow, custom website solutions, business website design, responsive web design, SEO-friendly website development, conversion-focused website design, website maintenance services, custom web applications, scalable web solutions, website performance optimization, user experience design, how much does a website cost in Lucknow, how long does website development take, website for startups in Lucknow, hospital website development in Lucknow, school website development in Lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/web-development-company-in-lucknow",
  },

  openGraph: {
    title: "Web Development Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a web development company in Lucknow? Zentrix Infotech builds fast, responsive, SEO-friendly business websites. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/lucknow/web-development-company-in-lucknow",
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
    title: "Web Development Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a web development company in Lucknow? Zentrix Infotech builds fast, responsive, SEO-friendly business websites. Get a free consultation today.",
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