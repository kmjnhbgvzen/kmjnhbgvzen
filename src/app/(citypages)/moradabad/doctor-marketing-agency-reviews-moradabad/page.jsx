import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Agency Reviews in Moradabad | Zentrix Infotech",
  description:
    "Read what clients say about Zentrix Infotech and learn how to check doctor marketing agency reviews in Moradabad before you hire. 4.7/5 rating, 250+ projects.",
  keywords:
    "doctor marketing agency reviews Moradabad, doctor marketing reviews Moradabad, Zentrix Infotech reviews, healthcare marketing agency reviews Moradabad, clinic marketing agency reviews, best doctor marketing agency Moradabad, doctor marketing company Moradabad, hospital marketing reviews Moradabad, digital marketing agency reviews Moradabad, client testimonials Zentrix",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-reviews-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Agency Reviews in Moradabad | Zentrix Infotech",
    description:
      "Read what clients say about Zentrix Infotech and learn how to check doctor marketing agency reviews in Moradabad before you hire. 4.7/5 rating, 250+ projects.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-reviews-moradabad",
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
    title: "Doctor Marketing Agency Reviews in Moradabad | Zentrix Infotech",
    description:
      "Read what clients say about Zentrix Infotech and learn how to check doctor marketing agency reviews in Moradabad before you hire. 4.7/5 rating, 250+ projects.",
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