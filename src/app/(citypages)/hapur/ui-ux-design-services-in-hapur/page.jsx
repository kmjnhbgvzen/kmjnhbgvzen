import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Hapur | Website & App Design Company",
  description:
    "Looking for UI/UX design services in Hapur? Zentrix Infotech creates user-friendly website & app designs that boost engagement and conversions.",
  keywords:
    "UI UX design services in Hapur, UI UX design company Hapur, website design services Hapur, app design company Hapur, user interface design agency, user experience design company, best UI UX designers near me, mobile app UI design Hapur, website UI design company, product design agency UP, wireframe and prototype design, e-commerce UI design services, custom UI UX design company, UX research agency, UI UX design agency Delhi NCR",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/ui-ux-design-services-hapur",
  },
  openGraph: {
    title: "UI/UX Design Services in Hapur | Website & App Design Company",
    description:
      "Looking for UI/UX design services in Hapur? Zentrix Infotech creates user-friendly website & app designs that boost engagement and conversions.",
    url: "https://www.zentrixinfotech.com/hapur/ui-ux-design-services-hapur",
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
    title: "UI/UX Design Services in Hapur | Website & App Design Company",
    description:
      "Looking for UI/UX design services in Hapur? Zentrix Infotech creates user-friendly website & app designs that boost engagement and conversions.",
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