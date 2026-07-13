import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Saharanpur | Boost Sales & ROI",
  description:
    "Grow sales with expert email marketing services in Saharanpur. Automated campaigns, newsletters & lead nurturing that convert. Free consultation today!",
  keywords:
    "email marketing company in Saharanpur, bulk email marketing services Saharanpur, email marketing agency near me, automated email marketing Saharanpur, newsletter marketing services Saharanpur, email marketing for small business Saharanpur, best email marketing company Saharanpur UP, affordable email marketing services Saharanpur, email marketing for ecommerce Saharanpur, B2B email marketing services Saharanpur, email marketing for wood handicraft exporters Saharanpur, cold email marketing agency Saharanpur, email campaign management services Saharanpur, lead nurturing email services Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/email-marketing-services-saharanpur",
  },
  openGraph: {
    title: "Email Marketing Services in Saharanpur | Boost Sales & ROI",
    description:
      "Grow sales with expert email marketing services in Saharanpur. Automated campaigns, newsletters & lead nurturing that convert. Free consultation today!",
    url: "https://www.zentrixinfotech.com/saharanpur/email-marketing-services-saharanpur",
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
    title: "Email Marketing Services in Saharanpur | Boost Sales & ROI",
    description:
      "Grow sales with expert email marketing services in Saharanpur. Automated campaigns, newsletters & lead nurturing that convert. Free consultation today!",
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