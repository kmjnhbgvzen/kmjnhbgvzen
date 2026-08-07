import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Digital Marketing Agency in Ayodhya Services Offered - Zentrix Infotech",
  description:
    "Explore the full range of digital marketing agency in Ayodhya services offered by Zentrix Infotech, including SEO, PPC, social media, and website development. Learn more today.",
  keywords:
    "digital marketing agency in Ayodhya services offered, digital marketing services list Ayodhya, what does a digital marketing agency do, Zentrix Infotech services, digital marketing service types Ayodhya, SEO services Ayodhya, PPC services Ayodhya, social media services Ayodhya, digital marketing packages Ayodhya, digital marketing offerings Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
  },
  openGraph: {
    title:
      "Digital Marketing Agency in Ayodhya Services Offered - Zentrix Infotech",
    description:
      "Explore the full range of digital marketing agency in Ayodhya services offered by Zentrix Infotech, including SEO, PPC, social media, and website development. Learn more today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
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
      "Digital Marketing Agency in Ayodhya Services Offered - Zentrix Infotech",
    description:
      "Explore the full range of digital marketing agency in Ayodhya services offered by Zentrix Infotech, including SEO, PPC, social media, and website development. Learn more today.",
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