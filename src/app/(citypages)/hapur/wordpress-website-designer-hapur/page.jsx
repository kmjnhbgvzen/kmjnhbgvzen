import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "WordPress Website Designer in Hapur | Custom Design & UI/UX Experts",
  description:
    "Hire a skilled WordPress website designer in Hapur for stunning, mobile-friendly designs, strong branding & user-friendly layouts that turn visitors into customers.",
  keywords:
    "WordPress website designer Hapur, WordPress design services Hapur, custom website design Hapur, UI UX designer Hapur, professional website design company Hapur, responsive web design Hapur, business website designer near me, WordPress UI design, creative website design Hapur, affordable website designer Hapur, landing page design Hapur, brand website design Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/wordpress-website-designer-hapur",
  },
  openGraph: {
    title: "WordPress Website Designer in Hapur | Custom Design & UI/UX Experts",
    description:
      "Hire a skilled WordPress website designer in Hapur for stunning, mobile-friendly designs, strong branding & user-friendly layouts that turn visitors into customers.",
    url: "https://www.zentrixinfotech.com/hapur/wordpress-website-designer-hapur",
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
    title: "WordPress Website Designer in Hapur | Custom Design & UI/UX Experts",
    description:
      "Hire a skilled WordPress website designer in Hapur for stunning, mobile-friendly designs, strong branding & user-friendly layouts that turn visitors into customers.",
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