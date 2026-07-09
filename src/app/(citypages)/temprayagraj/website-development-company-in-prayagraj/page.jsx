import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Prayagraj | Zentrix Infotech",
  description:
    "Looking for a reliable website development company in Prayagraj? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses of all sizes. Get a free consultation today.",
  keywords:
    "website development company in Prayagraj, web design company Prayagraj, website designer Prayagraj, custom website development Prayagraj, e-commerce website development Prayagraj, affordable website design Prayagraj, best web developers Prayagraj, responsive website development Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/website-development-company-in-prayagraj",
  },
  openGraph: {
    title: "Website Development Company in Prayagraj | Zentrix Infotech",
    description:
      "Looking for a reliable website development company in Prayagraj? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses of all sizes. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/prayagraj/website-development-company-in-prayagraj",
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
    title: "Website Development Company in Prayagraj | Zentrix Infotech",
    description:
      "Looking for a reliable website development company in Prayagraj? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses of all sizes. Get a free consultation today.",
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