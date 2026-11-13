import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Hospital Marketing Services in Moradabad | Zentrix Infotech",
  description:
    "Hospital marketing services in Moradabad by Zentrix Infotech: website, local SEO, department promotion, ads, content and reputation to bring more patients.",
  keywords:
    "hospital marketing services Moradabad, hospital marketing company Moradabad, hospital digital marketing Moradabad, hospital website and SEO Moradabad, department promotion hospital Moradabad, health camp promotion Moradabad, hospital reputation management, hospital Google Ads Moradabad, hospital social media Moradabad, hospital patient enquiry services, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hospital-marketing-services-moradabad",
  },

  openGraph: {
    title:
      "Hospital Marketing Services in Moradabad | Zentrix Infotech",
    description:
      "Hospital marketing services in Moradabad by Zentrix Infotech: website, local SEO, department promotion, ads, content and reputation to bring more patients.",
    url: "https://www.zentrixinfotech.com/moradabad/hospital-marketing-services-moradabad",
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
    title:
      "Hospital Marketing Services in Moradabad | Zentrix Infotech",
    description:
      "Hospital marketing services in Moradabad by Zentrix Infotech: website, local SEO, department promotion, ads, content and reputation to bring more patients.",
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