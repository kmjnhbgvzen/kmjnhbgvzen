import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Redesign Services USA | Zentrix Infotech",
  description:
    "Zentrix Infotech offers professional website redesign services for USA businesses, modernizing outdated sites with faster performance, better design, and stronger SEO.",
  keywords:
    "website redesign services USA, website redesign company USA, hire website redesign agency USA, revamp old website USA, modernize business website USA, website redesign for small business USA, affordable website redesign services, ecommerce website redesign USA, WordPress website redesign company, best website redesign agency for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/website-redesign-services-usa",
  },
  openGraph: {
    title: "Website Redesign Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional website redesign services for USA businesses, modernizing outdated sites with faster performance, better design, and stronger SEO.",
    url: "https://www.zentrixinfotech.com/usa/website-redesign-services-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional website redesign services for USA businesses, modernizing outdated sites with faster performance, better design, and stronger SEO.",
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