import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Agency in Ayodhya | SEO, Ads & Branding Experts",
  description:
    "Searching for the Best Digital Marketing Agency in Ayodhya? Get expert SEO, Google Ads, social media and website marketing that turns online searches into real customers.",
  keywords:
    "best digital marketing agency in Ayodhya, top digital marketing company Ayodhya, digital marketing agency near me Ayodhya, best SEO agency Ayodhya, best social media marketing company Ayodhya, top rated digital marketing firm Ayodhya, digital marketing experts Ayodhya, reliable digital marketing agency Uttar Pradesh, hotel marketing agency Ayodhya, best website design company Ayodhya, best Google Ads agency Ayodhya, affordable digital marketing agency Ayodhya, trusted SEO company near Ram Mandir",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-agency-in-ayodhya",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Ayodhya | SEO, Ads & Branding Experts",
    description:
      "Searching for the Best Digital Marketing Agency in Ayodhya? Get expert SEO, Google Ads, social media and website marketing that turns online searches into real customers.",
    url: "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-agency-in-ayodhya",
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
    title: "Best Digital Marketing Agency in Ayodhya | SEO, Ads & Branding Experts",
    description:
      "Searching for the Best Digital Marketing Agency in Ayodhya? Get expert SEO, Google Ads, social media and website marketing that turns online searches into real customers.",
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