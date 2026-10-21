import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title: "Cheap Ecommerce Website Developer Moradabad | Zentrix Infotech",
  description:
    "Looking for a cheap ecommerce website developer in Moradabad? Zentrix Infotech builds affordable, secure, SEO ready online stores with no hidden costs. Call now.",
  keywords:
    "cheap ecommerce website developer moradabad, affordable ecommerce website developer moradabad, low cost ecommerce website development, budget ecommerce website moradabad, cheap online store development, ecommerce website developer near me, ecommerce developer in moradabad, affordable ecommerce website design, ecommerce website for small business moradabad, low budget online store, ecommerce website cost moradabad, best ecommerce developer moradabad, freelance vs agency ecommerce developer, startup ecommerce website, ecommerce website with payment gateway, Zentrix Infotech",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/cheap-ecommerce-website-developer-in-moradabad",
  },



  openGraph: {
    title: "Cheap Ecommerce Website Developer Moradabad | Zentrix Infotech",
    description:
      "Looking for a cheap ecommerce website developer in Moradabad? Zentrix Infotech builds affordable, secure, SEO ready online stores with no hidden costs. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/cheap-ecommerce-website-developer-moradabad",
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
    title: "Cheap Ecommerce Website Developer Moradabad | Zentrix Infotech",
    description:
      "Looking for a cheap ecommerce website developer in Moradabad? Zentrix Infotech builds affordable, secure, SEO ready online stores with no hidden costs. Call now.",
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