import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Digital Marketing Agency for Small Business in Ayodhya - Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted digital marketing agency for small business in Ayodhya, offering affordable SEO, PPC, and social media services. Get a free consultation today.",
  keywords:
    "digital marketing agency for small business in Ayodhya, small business marketing agency Ayodhya, affordable digital marketing Ayodhya, small business SEO Ayodhya, local business marketing company Ayodhya, small business digital marketing services Ayodhya, Zentrix Infotech Ayodhya, budget digital marketing Ayodhya, small business advertising Ayodhya, small shop marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-for-small-business-ayodhya",
  },
  openGraph: {
    title:
      "Digital Marketing Agency for Small Business in Ayodhya - Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted digital marketing agency for small business in Ayodhya, offering affordable SEO, PPC, and social media services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-for-small-business-ayodhya",
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
      "Digital Marketing Agency for Small Business in Ayodhya - Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted digital marketing agency for small business in Ayodhya, offering affordable SEO, PPC, and social media services. Get a free consultation today.",
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