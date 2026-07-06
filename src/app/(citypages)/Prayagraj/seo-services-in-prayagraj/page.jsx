import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Prayagraj | Zentrix Infotech",
  description:
    "Looking for result-driven SEO services in Prayagraj? Zentrix Infotech helps local businesses rank higher, get more traffic & generate genuine leads. Get a free SEO audit today.",
  keywords:
    "SEO services in Prayagraj, SEO company in Prayagraj, best SEO agency Prayagraj, local SEO Prayagraj, digital marketing Prayagraj, SEO expert Prayagraj, affordable SEO services Prayagraj, website ranking services Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/seo-services-in-prayagraj",
  },
  openGraph: {
    title: "SEO Services in Prayagraj | Zentrix Infotech",
    description:
      "Looking for result-driven SEO services in Prayagraj? Zentrix Infotech helps local businesses rank higher, get more traffic & generate genuine leads. Get a free SEO audit today.",
    url: "https://www.zentrixinfotech.com/prayagraj/seo-services-in-prayagraj",
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
    title: "SEO Services in Prayagraj | Zentrix Infotech",
    description:
      "Looking for result-driven SEO services in Prayagraj? Zentrix Infotech helps local businesses rank higher, get more traffic & generate genuine leads. Get a free SEO audit today.",
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