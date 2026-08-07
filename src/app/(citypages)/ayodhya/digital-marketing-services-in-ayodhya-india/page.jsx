import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Services in Ayodhya, India | Zentrix Infotech",
  description:
    "Best Digital Marketing Services in Ayodhya, India — SEO, Google Ads, social media & web design that generate real leads for hotels, businesses & startups. Get a free quote today.",
  keywords:
    "digital marketing services in Ayodhya India, digital marketing company Ayodhya India, best digital marketing agency in Ayodhya, SEO company Ayodhya India, social media marketing agency Ayodhya, PPC and Google Ads Ayodhya, website development company Ayodhya, online marketing agency Ayodhya India, local SEO services Ayodhya, digital marketing for hotels Ayodhya, digital marketing for temples and tourism, digital marketing consultant Ayodhya India, affordable digital marketing Ayodhya, top digital marketing company UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-services-in-ayodhya-india",
  },
  openGraph: {
    title: "Digital Marketing Services in Ayodhya, India | Zentrix Infotech",
    description:
      "Best Digital Marketing Services in Ayodhya, India — SEO, Google Ads, social media & web design that generate real leads for hotels, businesses & startups. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-services-in-ayodhya-india",
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
    title: "Digital Marketing Services in Ayodhya, India | Zentrix Infotech",
    description:
      "Best Digital Marketing Services in Ayodhya, India — SEO, Google Ads, social media & web design that generate real leads for hotels, businesses & startups. Get a free quote today.",
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