import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hospital Marketing Agency in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a hospital marketing agency in Moradabad. Department-wise SEO, ads, website, branding and patient engagement. Book a free consultation today.",
  keywords:
    "hospital marketing agency in moradabad, hospital marketing services moradabad, hospital branding agency moradabad, digital marketing for hospitals moradabad, hospital digital marketing solutions moradabad, SEO services for hospitals in moradabad, best digital marketing agency for hospitals in moradabad, top digital marketing company for hospitals moradabad, how to improve hospital SEO moradabad, how to choose digital marketing agency for hospitals moradabad, healthcare marketing company in moradabad, hospital marketing agency near me, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hospital-marketing-agency-in-moradabad",
  },

  openGraph: {
    title: "Hospital Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a hospital marketing agency in Moradabad. Department-wise SEO, ads, website, branding and patient engagement. Book a free consultation today.",
    url: "https://www.zentrixinfotech.com/moradabad/hospital-marketing-agency-in-moradabad",
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
    title: "Hospital Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a hospital marketing agency in Moradabad. Department-wise SEO, ads, website, branding and patient engagement. Book a free consultation today.",
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