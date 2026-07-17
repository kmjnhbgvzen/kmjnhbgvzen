import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Muzaffarnagar | Websites & App Design",
  description:
    "Professional UI/UX Design Services in Muzaffarnagar for websites and apps. User-focused, conversion-driven design that improves engagement and sales.",
  keywords:
    "ui ux design services in muzaffarnagar, ui ux design company muzaffarnagar, website design agency muzaffarnagar, app design services muzaffarnagar, user experience design company near me, product design agency muzaffarnagar, wireframe and prototype design services, best ui ux designers muzaffarnagar, digital marketing agency muzaffarnagar, ecommerce website design muzaffarnagar, interface design services india, startup product design agency",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ui-ux-design-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "UI/UX Design Services in Muzaffarnagar | Websites & App Design",
    description:
      "Professional UI/UX Design Services in Muzaffarnagar for websites and apps. User-focused, conversion-driven design that improves engagement and sales.",
    url: "https://www.zentrixinfotech.com/ui-ux-design-services-in-muzaffarnagar",
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
    title: "UI/UX Design Services in Muzaffarnagar | Websites & App Design",
    description:
      "Professional UI/UX Design Services in Muzaffarnagar for websites and apps. User-focused, conversion-driven design that improves engagement and sales.",
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