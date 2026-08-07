import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency Ayodhya",
  description:
    "Looking for a Digital Marketing Agency in Ayodhya to grow your business? Get complete details on SEO, social media, website and branding services here.",
  keywords:
    "digital marketing agency ayodhya, best digital marketing agency in ayodhya, digital marketing company ayodhya, seo agency ayodhya, social media marketing ayodhya, website design company ayodhya, online marketing services ayodhya, digital marketing near ram mandir, ayodhya business growth agency, local digital marketing experts ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing Agency Ayodhya",
    description:
      "Looking for a Digital Marketing Agency in Ayodhya to grow your business? Get complete details on SEO, social media, website and branding services here.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya",
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
    title: "Digital Marketing Agency Ayodhya",
    description:
      "Looking for a Digital Marketing Agency in Ayodhya to grow your business? Get complete details on SEO, social media, website and branding services here.",
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