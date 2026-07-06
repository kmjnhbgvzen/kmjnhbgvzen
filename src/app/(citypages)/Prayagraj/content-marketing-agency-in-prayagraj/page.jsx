import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Prayagraj | Zentrix Infotech",
  description:
    "Build trust and authority online with a professional content marketing agency in Prayagraj. Zentrix Infotech creates blogs, videos & website content that engage and convert.",
  keywords:
    "content marketing agency in Prayagraj, content marketing services Prayagraj, blog writing services Prayagraj, content writing company Prayagraj, digital content agency Prayagraj, video content marketing Prayagraj, SEO content writing Prayagraj, content strategy company Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/content-marketing-agency-in-prayagraj",
  },
  openGraph: {
    title: "Content Marketing Agency in Prayagraj | Zentrix Infotech",
    description:
      "Build trust and authority online with a professional content marketing agency in Prayagraj. Zentrix Infotech creates blogs, videos & website content that engage and convert.",
    url: "https://www.zentrixinfotech.com/prayagraj/content-marketing-agency-in-prayagraj",
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
    title: "Content Marketing Agency in Prayagraj | Zentrix Infotech",
    description:
      "Build trust and authority online with a professional content marketing agency in Prayagraj. Zentrix Infotech creates blogs, videos & website content that engage and convert.",
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