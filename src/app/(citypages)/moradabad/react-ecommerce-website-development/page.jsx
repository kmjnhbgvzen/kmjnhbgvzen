import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";





export const metadata = {
  title: "React Ecommerce Website Development | Zentrix Infotech India",
  description:
    "Zentrix Infotech builds fast, scalable React ecommerce websites with modern frontends, secure checkout and SEO ready pages. Book a free consultation today.",
  keywords:
    "react ecommerce website development, react js ecommerce development company, react ecommerce development services, custom react ecommerce website, next js ecommerce website development, headless ecommerce development, react js online store development, react shopping cart development, react ecommerce website design, progressive web app ecommerce, react ecommerce with payment gateway, react ecommerce for startups, react vs wordpress ecommerce, react ecommerce website cost, hire react ecommerce developers, Zentrix Infotech",





  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/react-ecommerce-website-development",
  },





  openGraph: {
    title: "React Ecommerce Website Development | Zentrix Infotech India",
    description:
      "Zentrix Infotech builds fast, scalable React ecommerce websites with modern frontends, secure checkout and SEO ready pages. Book a free consultation today.",
    url: "https://www.zentrixinfotech.com/moradabad/react-ecommerce-website-development",
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
    title: "React Ecommerce Website Development | Zentrix Infotech India",
    description:
      "Zentrix Infotech builds fast, scalable React ecommerce websites with modern frontends, secure checkout and SEO ready pages. Book a free consultation today.",
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