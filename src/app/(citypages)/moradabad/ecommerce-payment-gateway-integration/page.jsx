import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Payment Gateway Integration Services | Zentrix",
  description:
    "Secure ecommerce payment gateway integration by Zentrix Infotech. Connect UPI, cards, wallets and COD to your store with fast, PCI-compliant setup.",
  keywords:
    "ecommerce payment gateway integration, payment gateway integration services, payment gateway integration for website, payment gateway integration company, UPI payment gateway integration, Razorpay integration, PayU integration, CCAvenue integration, Cashfree integration, Stripe integration India, secure online payment integration, custom payment gateway integration, payment gateway for ecommerce website, multi-gateway payment integration, ecommerce checkout payment solutions",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-payment-gateway-integration",
  },

  openGraph: {
    title:
      "Ecommerce Payment Gateway Integration Services | Zentrix",
    description:
      "Secure ecommerce payment gateway integration by Zentrix Infotech. Connect UPI, cards, wallets and COD to your store with fast, PCI-compliant setup.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-payment-gateway-integration",
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
      "Ecommerce Payment Gateway Integration Services | Zentrix",
    description:
      "Secure ecommerce payment gateway integration by Zentrix Infotech. Connect UPI, cards, wallets and COD to your store with fast, PCI-compliant setup.",
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