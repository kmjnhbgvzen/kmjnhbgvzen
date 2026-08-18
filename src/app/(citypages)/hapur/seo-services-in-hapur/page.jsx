import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "SEO Services in Hapur | Best SEO Company in Hapur",
  description:
    "Get professional SEO services in Hapur with keyword research, technical SEO, local SEO, content optimization and customized digital solutions to improve online visibility.",
  keywords:
    "SEO services in Hapur, SEO company in Hapur, SEO agency in Hapur, best SEO company in Hapur, local SEO services in Hapur, technical SEO services in Hapur, on-page SEO services in Hapur, website SEO services in Hapur, SEO consultant in Hapur, Google ranking services in Hapur, keyword research services in Hapur, customize my CRM software, customize my billing software, customize my inventory management software, customize my school management software, customize my hospital management software, software modification services, add new features to existing software, upgrade old software to new requirements, integrate new module in existing software, free quote for software customization, free requirement analysis software customization, software customization services in Moradabad, custom software modification company India, business software customization services, tailor made software customization for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/seo-services-in-hapur",
  },
  openGraph: {
    title: "SEO Services in Hapur | Best SEO Company in Hapur",
    description:
      "Get professional SEO services in Hapur with keyword research, technical SEO, local SEO, content optimization and customized digital solutions to improve online visibility.",
    url: "https://www.zentrixinfotech.com/hapur/seo-services-in-hapur",
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
    title: "SEO Services in Hapur | Best SEO Company in Hapur",
    description:
      "Get professional SEO services in Hapur with keyword research, technical SEO, local SEO, content optimization and customized digital solutions to improve online visibility.",
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