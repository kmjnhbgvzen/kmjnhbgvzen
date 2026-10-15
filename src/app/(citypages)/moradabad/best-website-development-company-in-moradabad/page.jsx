import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Website Development Company in Moradabad | Zentrix",
  description:
    "Looking for the best website development company in Moradabad? See what to check, and why 270+ clients trust Zentrix Infotech for websites that deliver.",
  keywords:
    "best website development company in Moradabad, best web development company Moradabad, top website designers in Moradabad, best website designing company Moradabad, trusted website development company Moradabad, best ecommerce website developer Moradabad, professional web development company Moradabad, best web design agency Moradabad, top rated website developers Moradabad, best website company near me Moradabad, reliable website development services Moradabad, best website developer for small business Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-website-development-company-in-moradabad",
  },


  openGraph: {
    title: "Best Website Development Company in Moradabad | Zentrix",
    description:
      "Looking for the best website development company in Moradabad? See what to check, and why 270+ clients trust Zentrix Infotech for websites that deliver.",
    url: "https://www.zentrixinfotech.com/moradabad/best-website-development-company-in-moradabad",
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
    title: "Best Website Development Company in Moradabad | Zentrix",
    description:
      "Looking for the best website development company in Moradabad? See what to check, and why 270+ clients trust Zentrix Infotech for websites that deliver.",
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