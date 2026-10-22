import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Mobile-Friendly Ecommerce Website Development | Zentrix",
  description:
    "Get a fast, mobile-first ecommerce website built by Zentrix Infotech. Responsive design, easy checkout, UPI payments and SEO-ready stores that convert.",
  keywords:
    "mobile-friendly ecommerce website development, mobile responsive ecommerce website, mobile-first ecommerce development, ecommerce website development company, responsive online store development, mobile commerce website design, custom ecommerce website development, ecommerce website for mobile users, fast loading ecommerce website, mobile optimized online store, ecommerce website developer India, ecommerce website development services, UPI payment ecommerce website, progressive web app ecommerce, mobile checkout optimization",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-friendly-ecommerce-website-development",
  },

  openGraph: {
    title:
      "Mobile-Friendly Ecommerce Website Development | Zentrix",
    description:
      "Get a fast, mobile-first ecommerce website built by Zentrix Infotech. Responsive design, easy checkout, UPI payments and SEO-ready stores that convert.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-friendly-ecommerce-website-development",
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
    title:
      "Mobile-Friendly Ecommerce Website Development | Zentrix",
    description:
      "Get a fast, mobile-first ecommerce website built by Zentrix Infotech. Responsive design, easy checkout, UPI payments and SEO-ready stores that convert.",
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