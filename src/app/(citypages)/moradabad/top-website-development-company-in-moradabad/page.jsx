import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Website Development Company in Moradabad | Zentrix",
  description:
    "Looking for a top website development company in Moradabad? Zentrix Infotech builds fast, secure, SEO-ready websites with 250+ projects delivered. Get a quote.",
  keywords:
    "top website development company in Moradabad, top website development company Moradabad, best website development company in Moradabad, leading web development company Moradabad, trusted website developers Moradabad, professional website development company Moradabad, website development company in Moradabad, website designing company Moradabad, ecommerce website development Moradabad, custom website development Moradabad, responsive website design Moradabad, web development services Moradabad, website development company near me Moradabad, SEO friendly website development Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-website-development-company-in-moradabad",
  },

  openGraph: {
    title: "Top Website Development Company in Moradabad | Zentrix",
    description:
      "Looking for a top website development company in Moradabad? Zentrix Infotech builds fast, secure, SEO-ready websites with 250+ projects delivered. Get a quote.",
    url: "https://www.zentrixinfotech.com/moradabad/top-website-development-company-in-moradabad",
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
    title: "Top Website Development Company in Moradabad | Zentrix",
    description:
      "Looking for a top website development company in Moradabad? Zentrix Infotech builds fast, secure, SEO-ready websites with 250+ projects delivered. Get a quote.",
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