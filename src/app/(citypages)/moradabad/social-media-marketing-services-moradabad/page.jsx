import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Services in Moradabad | Zentrix",
  description:
    "Complete social media marketing services in Moradabad: strategy, content, page management and paid ads by Zentrix Infotech. Get leads, bookings and sales.",
  keywords:
    "social media marketing services Moradabad, social media marketing services in Moradabad, social media services Moradabad, social media management services Moradabad, social media advertising services Moradabad, Instagram marketing services Moradabad, Facebook marketing services Moradabad, social media content creation Moradabad, social media marketing company Moradabad, social media marketing agency Moradabad, social media promotion services Moradabad, affordable social media marketing Moradabad, digital marketing services Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/social-media-marketing-services-moradabad",
  },

  openGraph: {
    title: "Social Media Marketing Services in Moradabad | Zentrix",
    description:
      "Complete social media marketing services in Moradabad: strategy, content, page management and paid ads by Zentrix Infotech. Get leads, bookings and sales.",
    url: "https://www.zentrixinfotech.com/moradabad/social-media-marketing-services-moradabad",
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
    title: "Social Media Marketing Services in Moradabad | Zentrix",
    description:
      "Complete social media marketing services in Moradabad: strategy, content, page management and paid ads by Zentrix Infotech. Get leads, bookings and sales.",
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
