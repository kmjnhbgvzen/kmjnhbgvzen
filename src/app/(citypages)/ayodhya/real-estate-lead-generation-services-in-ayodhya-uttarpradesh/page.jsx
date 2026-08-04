import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Real Estate Lead Generation Services in Ayodhya, UP",
  description:
    "Explore the top real estate lead generation services in Ayodhya, Uttar Pradesh, and find the right service mix to attract genuine property buyers.",
  keywords:
    "real estate lead generation services in Ayodhya Uttar Pradesh, real estate lead generation services Ayodhya, property lead services Ayodhya UP, real estate SEO services Ayodhya, real estate PPC services Ayodhya, real estate social media services Ayodhya, real estate marketing services Uttar Pradesh, property marketing services Ayodhya, real estate digital services Ayodhya, real estate lead services near me, best real estate services Ayodhya UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/real-estate-lead-generation-services-in-ayodhya",
  },
  openGraph: {
    title: "Real Estate Lead Generation Services in Ayodhya, UP",
    description:
      "Explore the top real estate lead generation services in Ayodhya, Uttar Pradesh, and find the right service mix to attract genuine property buyers.",
    url: "https://www.zentrixinfotech.com/ayodhya/real-estate-lead-generation-services-in-ayodhya",
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
    title: "Real Estate Lead Generation Services in Ayodhya, UP",
    description:
      "Explore the top real estate lead generation services in Ayodhya, Uttar Pradesh, and find the right service mix to attract genuine property buyers.",
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