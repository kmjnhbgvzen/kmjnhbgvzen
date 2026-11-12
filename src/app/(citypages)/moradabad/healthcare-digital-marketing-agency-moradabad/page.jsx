import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Healthcare Digital Marketing Agency Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted healthcare digital marketing agency in Moradabad. Avoid common mistakes and win more patients with ethical SEO, ads, websites and social media. Free review.",
  keywords:
    "healthcare digital marketing agency Moradabad, healthcare digital marketing company Moradabad, digital marketing for clinics Moradabad, digital marketing for hospitals Moradabad, medical digital marketing services, how to choose a healthcare marketing agency, healthcare marketing mistakes, patient inquiries online, local SEO for clinics, healthcare social media marketing, healthcare website design, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-digital-marketing-agency-moradabad",
  },


  openGraph: {
    title: "Healthcare Digital Marketing Agency Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted healthcare digital marketing agency in Moradabad. Avoid common mistakes and win more patients with ethical SEO, ads, websites and social media. Free review.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-digital-marketing-agency-moradabad",
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
    title: "Healthcare Digital Marketing Agency Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted healthcare digital marketing agency in Moradabad. Avoid common mistakes and win more patients with ethical SEO, ads, websites and social media. Free review.",
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