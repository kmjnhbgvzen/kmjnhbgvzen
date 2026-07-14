import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Meerut | Get More Leads & Sales with Expert Ad Management",
  description:
    "Looking for a trusted Facebook Ads agency in Meerut? We create high-converting Facebook & Instagram ad campaigns that generate real leads, sales & ROI. Get a free consultation today.",
  keywords:
    "Facebook Ads agency in Meerut, Facebook ads company Meerut, Facebook marketing agency Meerut, Instagram ads agency Meerut, Facebook ads management services, PPC agency Meerut, social media ads agency Uttar Pradesh, Meta ads agency Meerut, lead generation ads Meerut, Facebook ads for small business, paid social media marketing Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/facebook-ads-agency-in-meerut",
  },
  openGraph: {
    title: "Facebook Ads Agency in Meerut | Get More Leads & Sales with Expert Ad Management",
    description:
      "Looking for a trusted Facebook Ads agency in Meerut? We create high-converting Facebook & Instagram ad campaigns that generate real leads, sales & ROI. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/facebook-ads-agency-in-meerut",
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
    title: "Facebook Ads Agency in Meerut | Get More Leads & Sales with Expert Ad Management",
    description:
      "Looking for a trusted Facebook Ads agency in Meerut? We create high-converting Facebook & Instagram ad campaigns that generate real leads, sales & ROI. Get a free consultation today.",
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