import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title: "Ecommerce Website Design Company in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an ecommerce website design company in Moradabad creating modern, mobile friendly online stores that build trust and boost sales. Call now.",
  keywords:
    "ecommerce website design company in moradabad, ecommerce website design moradabad, ecommerce web design company moradabad, online store design moradabad, ecommerce website designers in moradabad, custom ecommerce website design, best ecommerce website design company, affordable ecommerce website design, ecommerce ui ux design moradabad, mobile friendly ecommerce design, b2b ecommerce website design, handicraft ecommerce website design, ecommerce website redesign moradabad, product page design, shopping cart design, conversion focused ecommerce design, Zentrix Infotech",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-website-design-company-in-moradabad",
  },



  openGraph: {
    title: "Ecommerce Website Design Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an ecommerce website design company in Moradabad creating modern, mobile friendly online stores that build trust and boost sales. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-website-design-company-in-moradabad",
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
    title: "Ecommerce Website Design Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an ecommerce website design company in Moradabad creating modern, mobile friendly online stores that build trust and boost sales. Call now.",
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