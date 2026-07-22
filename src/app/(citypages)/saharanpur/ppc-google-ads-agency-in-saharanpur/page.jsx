import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Saharanpur | Google Ads Management",
  description:
    "Get PPC and Google Ads management in Saharanpur to generate calls, enquiries, and store visits with search, shopping, display, and retargeting campaigns.",
  keywords:
    "PPC agency in Saharanpur, Google Ads agency Saharanpur, PPC management Saharanpur, Google Ads management company Saharanpur, pay per click services Saharanpur, search engine marketing Saharanpur, lead generation ads Saharanpur, Google Ads expert Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/ppc-google-ads-agency-in-saharanpur",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Saharanpur | Google Ads Management",
    description:
      "Get PPC and Google Ads management in Saharanpur to generate calls, enquiries, and store visits with search, shopping, display, and retargeting campaigns.",
    url: "https://www.zentrixinfotech.com/saharanpur/ppc-google-ads-agency-in-saharanpur",
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
    title: "PPC & Google Ads Agency in Saharanpur | Google Ads Management",
    description:
      "Get PPC and Google Ads management in Saharanpur to generate calls, enquiries, and store visits with search, shopping, display, and retargeting campaigns.",
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