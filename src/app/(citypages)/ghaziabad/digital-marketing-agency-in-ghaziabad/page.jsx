import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a leading digital marketing agency in Ghaziabad, empowering businesses with SEO, PPC, social media, and custom CRM and billing software solutions for measurable growth. Free backend and frontend opportunities available — book a free consultation today.",
  keywords:
    "digital marketing agency in Ghaziabad, digital marketing company Ghaziabad, Zentrix Infotech digital marketing services, CRM software customization for business, custom billing software development, custom CRM software development, free backend and frontend development, SEO services Ghaziabad, PPC advertising Ghaziabad, social media marketing Ghaziabad, website development company Ghaziabad, local SEO services near me, affordable digital marketing agency, lead generation for small business, sustainable business growth strategy, data-driven digital marketing campaigns",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a leading digital marketing agency in Ghaziabad, empowering businesses with SEO, PPC, social media, and custom CRM and billing software solutions for measurable growth. Free backend and frontend opportunities available — book a free consultation today.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
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
    title: "Digital Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a leading digital marketing agency in Ghaziabad, empowering businesses with SEO, PPC, social media, and custom CRM and billing software solutions for measurable growth. Free backend and frontend opportunities available — book a free consultation today.",
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