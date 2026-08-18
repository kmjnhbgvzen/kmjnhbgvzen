import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Content Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted content marketing agency in Ghaziabad, helping businesses strengthen online visibility and generate quality leads through strategic content, along with custom CRM, billing, and inventory management software. Free backend and frontend opportunities available.",
  keywords:
    "content marketing agency in Ghaziabad, content marketing services Ghaziabad, Zentrix Infotech content solutions, blog writing services Ghaziabad, SEO content writing company, custom CRM software development, custom billing software development, inventory management software customization, free backend and frontend development, lead generation content strategy, local content marketing agency, affordable content marketing services, sustainable business growth strategy",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/content-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Content Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted content marketing agency in Ghaziabad, helping businesses strengthen online visibility and generate quality leads through strategic content, along with custom CRM, billing, and inventory management software. Free backend and frontend opportunities available.",
    url: "https://www.zentrixinfotech.com/ghaziabad/content-marketing-agency-in-ghaziabad",
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
    title: "Content Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted content marketing agency in Ghaziabad, helping businesses strengthen online visibility and generate quality leads through strategic content, along with custom CRM, billing, and inventory management software. Free backend and frontend opportunities available.",
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