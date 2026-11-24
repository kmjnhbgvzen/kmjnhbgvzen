import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Web Design Company in Lucknow | Zentrix Infotech",
  description:
    "Top web design company in Lucknow? Zentrix Infotech designs fast, mobile-friendly, SEO-ready websites that bring enquiries. 250+ projects. Free quote.",
  keywords:
    "top web design company in Lucknow, web design company in Lucknow, website designing company Lucknow, best web designer in Lucknow, website design services Lucknow, responsive website design Lucknow, UI UX design company Lucknow, ecommerce website design Lucknow, affordable web design Lucknow, custom website design Lucknow, website redesign services Lucknow, SEO friendly website design Lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/top-web-design-company-lucknow",
  },

  openGraph: {
    title: "Top Web Design Company in Lucknow | Zentrix Infotech",
    description:
      "Top web design company in Lucknow? Zentrix Infotech designs fast, mobile-friendly, SEO-ready websites that bring enquiries. 250+ projects. Free quote.",
    url: "https://www.zentrixinfotech.com/lucknow/top-web-design-company-lucknow",
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
    title: "Top Web Design Company in Lucknow | Zentrix Infotech",
    description:
      "Top web design company in Lucknow? Zentrix Infotech designs fast, mobile-friendly, SEO-ready websites that bring enquiries. 250+ projects. Free quote.",
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