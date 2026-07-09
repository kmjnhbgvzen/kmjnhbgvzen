import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Prayagraj | SEO, Social Media & Web Growth Experts",
  description:
    "Looking for the best digital marketing agency in Prayagraj? Get result-driven SEO, social media marketing, PPC, and website design services to grow your local business online.",
  keywords:
    "digital marketing agency in Prayagraj, digital marketing company Prayagraj, SEO services Prayagraj, social media marketing Prayagraj, website designing company Prayagraj, best digital marketing agency near me, PPC services Prayagraj, online marketing company Allahabad, local SEO Prayagraj, ecommerce marketing Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/digital-marketing-agency-in-prayagraj",
  },
  openGraph: {
    title: "Digital Marketing Agency in Prayagraj | SEO, Social Media & Web Growth Experts",
    description:
      "Looking for the best digital marketing agency in Prayagraj? Get result-driven SEO, social media marketing, PPC, and website design services to grow your local business online.",
    url: "https://www.zentrixinfotech.com/prayagraj/digital-marketing-agency-in-prayagraj",
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
    title: "Digital Marketing Agency in Prayagraj | SEO, Social Media & Web Growth Experts",
    description:
      "Looking for the best digital marketing agency in Prayagraj? Get result-driven SEO, social media marketing, PPC, and website design services to grow your local business online.",
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