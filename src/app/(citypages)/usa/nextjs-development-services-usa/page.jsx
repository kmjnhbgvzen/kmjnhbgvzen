import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Next.js Development Services USA | Fast, SEO-Ready Web Apps",
  description:
    "Expert Next.js development services in USA. Fast, scalable, SEO-optimized web applications built with React and Next.js. Get a free consultation and quote today.",
  keywords:
    "Next.js development services USA, Next.js development company, hire Next.js developers USA, React Next.js web development, custom Next.js application development, Next.js website development agency, Next.js SEO development, Next.js ecommerce development, server side rendering development USA, best Next.js developers",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/nextjs-development-services-usa",
  },
  openGraph: {
    title: "Next.js Development Services USA | Fast, SEO-Ready Web Apps",
    description:
      "Expert Next.js development services in USA. Fast, scalable, SEO-optimized web applications built with React and Next.js. Get a free consultation and quote today.",
    url: "https://www.zentrixinfotech.com/usa/nextjs-development-services-usa",
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
    title: "Next.js Development Services USA | Fast, SEO-Ready Web Apps",
    description:
      "Expert Next.js development services in USA. Fast, scalable, SEO-optimized web applications built with React and Next.js. Get a free consultation and quote today.",
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