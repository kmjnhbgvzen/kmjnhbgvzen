import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Varanasi | Get Quality Leads",
  description:
    "Expert lead generation services in Varanasi using SEO, ads, and funnels to bring qualified leads. Grow your business with measurable ROI. Enquire now.",
  keywords:
    "lead generation services in Varanasi, B2B lead generation Varanasi, lead generation company Varanasi, digital marketing leads Varanasi, local business leads Varanasi, Google Ads lead generation Varanasi, real estate lead generation Varanasi, lead generation agency UP, qualified leads for small business Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/lead-generation-services-in-varanasi",
  },
  openGraph: {
    title: "Lead Generation Services in Varanasi | Get Quality Leads",
    description:
      "Expert lead generation services in Varanasi using SEO, ads, and funnels to bring qualified leads. Grow your business with measurable ROI. Enquire now.",
    url: "https://www.zentrixinfotech.com/varanasi/lead-generation-services-in-varanasi",
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
    title: "Lead Generation Services in Varanasi | Get Quality Leads",
    description:
      "Expert lead generation services in Varanasi using SEO, ads, and funnels to bring qualified leads. Grow your business with measurable ROI. Enquire now.",
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