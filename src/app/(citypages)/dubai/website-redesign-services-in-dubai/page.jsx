import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Redesign Services in Dubai | Modern Website Revamp",
  description:
    "Professional website redesign services in Dubai. Modernize your outdated site with faster performance, better UX & SEO-friendly design that converts.",
  keywords:
    "website redesign services in Dubai, website revamp company Dubai, redesign old website Dubai, website makeover services UAE, UI UX redesign Dubai, website modernization services Dubai, website upgrade company Dubai, SEO friendly website redesign Dubai, hire website redesign agency Dubai, best website redesign company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/website-redesign-services-in-dubai",
  },

  openGraph: {
    title: "Website Redesign Services in Dubai | Modern Website Revamp",
    description:
      "Professional website redesign services in Dubai. Modernize your outdated site with faster performance, better UX & SEO-friendly design that converts.",
    url: "https://www.zentrixinfotech.com/dubai/website-redesign-services-in-dubai",
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
    title: "Website Redesign Services in Dubai | Modern Website Revamp",
    description:
      "Professional website redesign services in Dubai. Modernize your outdated site with faster performance, better UX & SEO-friendly design that converts.",
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