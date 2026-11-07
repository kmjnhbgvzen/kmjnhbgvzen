import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Doctors in Moradabad | Zentrix Infotech",
  description:
    "Digital marketing for doctors in Moradabad: SEO, Google profile, website, social media and ads to grow your practice ethically. Book a free consultation with Zentrix.",
  keywords:
    "digital marketing for doctors in moradabad, doctor marketing agency moradabad, moradabad digital marketing agency for doctors, SEO company for doctors in moradabad, doctor branding services in moradabad, doctor marketing company moradabad, how to market doctor services in moradabad, doctor marketing strategy moradabad, best doctor marketing firm in moradabad, doctor marketing agency cost moradabad, digital marketing for medical clinics in moradabad, doctor marketing agency near me moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-doctors-in-moradabad",
  },

  openGraph: {
    title: "Digital Marketing for Doctors in Moradabad | Zentrix Infotech",
    description:
      "Digital marketing for doctors in Moradabad: SEO, Google profile, website, social media and ads to grow your practice ethically. Book a free consultation with Zentrix.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-doctors-in-moradabad",
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
    title: "Digital Marketing for Doctors in Moradabad | Zentrix Infotech",
    description:
      "Digital marketing for doctors in Moradabad: SEO, Google profile, website, social media and ads to grow your practice ethically. Book a free consultation with Zentrix.",
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