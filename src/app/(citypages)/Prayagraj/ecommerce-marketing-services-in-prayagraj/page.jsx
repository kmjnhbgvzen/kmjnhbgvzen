import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "E-commerce Marketing Services in Prayagraj | Zentrix Infotech",
  description:
    "Grow your online store with expert e-commerce marketing services in Prayagraj. Zentrix Infotech offers SEO, PPC, social media & website solutions to boost sales and traffic.",
  keywords:
    "e-commerce marketing services in Prayagraj, e-commerce marketing agency Prayagraj, online store marketing Prayagraj, e-commerce SEO Prayagraj, e-commerce website development Prayagraj, online shopping website Prayagraj, digital marketing for e-commerce Prayagraj, e-commerce PPC services Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/e-commerce-marketing-services-in-prayagraj",
  },
  openGraph: {
    title: "E-commerce Marketing Services in Prayagraj | Zentrix Infotech",
    description:
      "Grow your online store with expert e-commerce marketing services in Prayagraj. Zentrix Infotech offers SEO, PPC, social media & website solutions to boost sales and traffic.",
    url: "https://www.zentrixinfotech.com/prayagraj/e-commerce-marketing-services-in-prayagraj",
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
    title: "E-commerce Marketing Services in Prayagraj | Zentrix Infotech",
    description:
      "Grow your online store with expert e-commerce marketing services in Prayagraj. Zentrix Infotech offers SEO, PPC, social media & website solutions to boost sales and traffic.",
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