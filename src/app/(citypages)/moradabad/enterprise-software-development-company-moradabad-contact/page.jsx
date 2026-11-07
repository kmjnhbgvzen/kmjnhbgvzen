import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Contact Enterprise Software Company Moradabad | Zentrix",
  description:
    "Contact Zentrix Infotech, an enterprise software development company in Moradabad. Call +91 72488 00839 or email for a free consultation and written estimate.",
  keywords:
    "enterprise software development company moradabad contact, contact enterprise software company moradabad, enterprise software company moradabad phone number, enterprise software company moradabad address, zentrix infotech contact, zentrix infotech moradabad address, software company moradabad contact number, book software consultation moradabad, enterprise software enquiry moradabad, enterprise software development moradabad, get a quote enterprise software moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad-contact",
  },

  openGraph: {
    title: "Contact Enterprise Software Company Moradabad | Zentrix",
    description:
      "Contact Zentrix Infotech, an enterprise software development company in Moradabad. Call +91 72488 00839 or email for a free consultation and written estimate.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad-contact",
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
    title: "Contact Enterprise Software Company Moradabad | Zentrix",
    description:
      "Contact Zentrix Infotech, an enterprise software development company in Moradabad. Call +91 72488 00839 or email for a free consultation and written estimate.",
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