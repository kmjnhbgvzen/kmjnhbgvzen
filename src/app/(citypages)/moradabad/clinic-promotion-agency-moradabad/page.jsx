import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Clinic Promotion Agency | Patient Growth | Zentrix Infotech",
  description:
    "Zentrix Infotech is a clinic promotion agency that helps doctors and clinics get more patients with local SEO, websites, social media, ads and reputation building. Call for a free review.",
  keywords:
    "clinic promotion agency, clinic promotion services, clinic marketing agency, how to promote a clinic, doctor promotion services, medical clinic marketing, clinic branding services, clinic social media marketing, clinic SEO services, clinic website development, patient lead generation for clinics, new clinic launch marketing, healthcare marketing agency, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/clinic-promotion-agency-moradabad",
  },


  openGraph: {
    title: "Clinic Promotion Agency | Patient Growth | Zentrix Infotech",
    description:
      "Zentrix Infotech is a clinic promotion agency that helps doctors and clinics get more patients with local SEO, websites, social media, ads and reputation building. Call for a free review.",
    url: "https://www.zentrixinfotech.com/moradabad/clinic-promotion-agency-moradabad",
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
    title: "Clinic Promotion Agency | Patient Growth | Zentrix Infotech",
    description:
      "Zentrix Infotech is a clinic promotion agency that helps doctors and clinics get more patients with local SEO, websites, social media, ads and reputation building. Call for a free review.",
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