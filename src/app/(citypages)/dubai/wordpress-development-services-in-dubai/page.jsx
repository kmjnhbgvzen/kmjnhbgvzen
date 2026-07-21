import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WordPress Development Services in Dubai | Custom WordPress Website Design Company",
  description:
    "Professional WordPress development services in Dubai. Get custom, SEO-friendly, secure, and mobile-responsive WordPress websites built to grow your business online.",
  keywords:
    "wordpress development services in dubai, wordpress website development dubai, wordpress design company dubai, custom wordpress development uae, wordpress ecommerce development dubai, woocommerce development dubai, wordpress website design company, affordable wordpress development dubai, best wordpress developers dubai, wordpress seo services dubai, wordpress maintenance services dubai, wordpress theme customization dubai, business wordpress website dubai, wordpress plugin development dubai, dubai wordpress agency",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/wordpress-development-services-in-dubai",
  },

  openGraph: {
    title: "WordPress Development Services in Dubai | Custom WordPress Website Design Company",
    description:
      "Professional WordPress development services in Dubai. Get custom, SEO-friendly, secure, and mobile-responsive WordPress websites built to grow your business online.",
    url: "https://www.zentrixinfotech.com/dubai/wordpress-development-services-in-dubai",
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
    title: "WordPress Development Services in Dubai | Custom WordPress Website Design Company",
    description:
      "Professional WordPress development services in Dubai. Get custom, SEO-friendly, secure, and mobile-responsive WordPress websites built to grow your business online.",
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