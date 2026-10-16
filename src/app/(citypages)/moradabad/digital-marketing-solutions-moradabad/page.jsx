import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Solutions in Moradabad | Zentrix Infotech",
  description:
    "Complete digital marketing solutions in Moradabad from Zentrix Infotech: SEO, social media, PPC, web design and branding built to bring leads and sales.",
  keywords:
    "digital marketing solutions Moradabad, digital marketing solutions company Moradabad, complete digital marketing services Moradabad, integrated digital marketing Moradabad, online marketing solutions Moradabad, SEO and social media marketing Moradabad, lead generation solutions Moradabad, digital marketing for small business Moradabad, digital marketing company in Moradabad, best digital marketing agency Moradabad, web and digital marketing solutions Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-solutions-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Solutions in Moradabad | Zentrix Infotech",
    description:
      "Complete digital marketing solutions in Moradabad from Zentrix Infotech: SEO, social media, PPC, web design and branding built to bring leads and sales.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-solutions-moradabad",
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
    title: "Digital Marketing Solutions in Moradabad | Zentrix Infotech",
    description:
      "Complete digital marketing solutions in Moradabad from Zentrix Infotech: SEO, social media, PPC, web design and branding built to bring leads and sales.",
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