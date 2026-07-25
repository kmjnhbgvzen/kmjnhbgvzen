import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Bareilly | Grow Views, Leads & Sales",
  description:
    "Grow your brand in Bareilly with expert YouTube marketing — video SEO, channel growth, ads and content strategy that turns viewers into real customers.",
  keywords:
    "YouTube marketing agency in Bareilly, YouTube marketing services Bareilly, YouTube SEO agency, video marketing company Bareilly, YouTube channel growth services, YouTube ads agency India, best digital marketing agency Bareilly, YouTube video promotion services, YouTube monetization help, video content marketing agency, YouTube advertising Bareilly",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/youtube-marketing-agency-in-bareilly",
  },

  openGraph: {
    title: "YouTube Marketing Agency in Bareilly | Grow Views, Leads & Sales",
    description:
      "Grow your brand in Bareilly with expert YouTube marketing — video SEO, channel growth, ads and content strategy that turns viewers into real customers.",
    url: "https://www.zentrixinfotech.com/bareilly/youtube-marketing-agency-in-bareilly",
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
    title: "YouTube Marketing Agency in Bareilly | Grow Views, Leads & Sales",
    description:
      "Grow your brand in Bareilly with expert YouTube marketing — video SEO, channel growth, ads and content strategy that turns viewers into real customers.",
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