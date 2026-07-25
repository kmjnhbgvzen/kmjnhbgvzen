import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hotels in Ayodhya - Zentrix Infotech",
  description:
    "Grow your hotel bookings with expert digital marketing for hotels in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website optimization. Get a free consultation today.",
  keywords:
    "digital marketing for hotels in Ayodhya, hotel marketing agency Ayodhya, hotel SEO services Ayodhya, hotel digital marketing company Ayodhya, hotel website development Ayodhya, hotel PPC advertising Ayodhya, hotel social media marketing Ayodhya, Zentrix Infotech Ayodhya, hospitality marketing agency Ayodhya, hotel booking marketing Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-hotels-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Grow your hotel bookings with expert digital marketing for hotels in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website optimization. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-hotels-in-ayodhya",
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
    title: "Digital Marketing for Hotels in Ayodhya - Zentrix Infotech",
    description:
      "Grow your hotel bookings with expert digital marketing for hotels in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website optimization. Get a free consultation today.",
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