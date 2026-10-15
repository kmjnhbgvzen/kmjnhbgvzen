import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Website Development Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted website development company in Moradabad. Get fast, custom, SEO-ready websites and online stores. Call +91 72488 00839.",
  keywords:
    "website development company in Moradabad, web development company Moradabad, website designing company in Moradabad, best website development company in Moradabad, website developers in Moradabad, custom website development Moradabad, ecommerce website development Moradabad, affordable website development Moradabad, business website development Moradabad, responsive website design Moradabad, SEO friendly website development Moradabad, web design agency Moradabad, website development services Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/website-development-company-in-moradabad",
  },


  openGraph: {
    title: "Website Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted website development company in Moradabad. Get fast, custom, SEO-ready websites and online stores. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/website-development-company-in-moradabad",
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
    title: "Website Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted website development company in Moradabad. Get fast, custom, SEO-ready websites and online stores. Call +91 72488 00839.",
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