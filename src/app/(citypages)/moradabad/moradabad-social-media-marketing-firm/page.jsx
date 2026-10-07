import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Firm in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad social media marketing firm with strategists, designers and ad experts. Grow your leads, bookings and sales with a clear plan.",
  keywords:
    "Moradabad social media marketing firm, social media marketing firm in Moradabad, social media marketing company Moradabad, social media marketing agency Moradabad, best social media marketing firm Moradabad, social media management firm Moradabad, social media advertising firm Moradabad, social media marketing experts Moradabad, trusted social media marketing firm, social media marketing team Moradabad, digital marketing firm Moradabad, hire social media marketing firm Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-social-media-marketing-firm",
  },

  openGraph: {
    title: "Social Media Marketing Firm in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad social media marketing firm with strategists, designers and ad experts. Grow your leads, bookings and sales with a clear plan.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-social-media-marketing-firm",
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
    title: "Social Media Marketing Firm in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad social media marketing firm with strategists, designers and ad experts. Grow your leads, bookings and sales with a clear plan.",
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
