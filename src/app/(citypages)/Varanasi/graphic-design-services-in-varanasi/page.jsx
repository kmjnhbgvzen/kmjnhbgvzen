import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Varanasi | Logos, Branding & Print Design",
  description:
    "Get professional graphic design services in Varanasi — logos, branding, packaging, and print design that help your business stand out and build trust.",
  keywords:
    "graphic design services in Varanasi, logo design agency Varanasi, branding company Varanasi, packaging design Varanasi, print design services Varanasi, creative design agency Varanasi, brand identity design Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/graphic-design-services-in-varanasi",
  },
  openGraph: {
    title: "Graphic Design Services in Varanasi | Logos, Branding & Print Design",
    description:
      "Get professional graphic design services in Varanasi — logos, branding, packaging, and print design that help your business stand out and build trust.",
    url: "https://www.zentrixinfotech.com/varanasi/graphic-design-services-in-varanasi",
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
    title: "Graphic Design Services in Varanasi | Logos, Branding & Print Design",
    description:
      "Get professional graphic design services in Varanasi — logos, branding, packaging, and print design that help your business stand out and build trust.",
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