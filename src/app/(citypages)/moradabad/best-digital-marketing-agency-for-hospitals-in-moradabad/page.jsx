import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Digital Marketing Agency for Hospitals in Moradabad",
  description:
    "Zentrix Infotech is a leading digital marketing agency for hospitals in Moradabad. Department-wise SEO, ads, website, social media and reputation management to bring more patients. Free review.",
  keywords:
    "best digital marketing agency for hospitals in Moradabad, digital marketing for hospitals Moradabad, hospital digital marketing company, hospital SEO Moradabad, hospital social media marketing, hospital website development Moradabad, hospital reputation management, nursing home marketing Moradabad, multi-specialty hospital marketing, health package promotion, hospital Google Ads, patient inquiries for hospitals, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-agency-for-hospitals-in-moradabad",
  },


  openGraph: {
    title: "Best Digital Marketing Agency for Hospitals in Moradabad",
    description:
      "Zentrix Infotech is a leading digital marketing agency for hospitals in Moradabad. Department-wise SEO, ads, website, social media and reputation management to bring more patients. Free review.",
    url: "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-agency-for-hospitals-in-moradabad",
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
    title: "Best Digital Marketing Agency for Hospitals in Moradabad",
    description:
      "Zentrix Infotech is a leading digital marketing agency for hospitals in Moradabad. Department-wise SEO, ads, website, social media and reputation management to bring more patients. Free review.",
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