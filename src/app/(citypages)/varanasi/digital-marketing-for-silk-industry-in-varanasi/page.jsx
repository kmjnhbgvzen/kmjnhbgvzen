import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Silk Industry in Varanasi | More Saree Sales",
  description:
    "Grow your Varanasi silk and saree business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and store buyers.",
  keywords:
    "digital marketing for silk industry in varanasi, banarasi saree marketing agency, silk business SEO varanasi, banarasi silk digital marketing, silk weaver ecommerce varanasi, google my business for saree shops, banarasi saree ads, increase saree sales varanasi, best digital marketing company for silk industry, local SEO for saree shops, silk industry social media marketing, banarasi saree online store marketing, silk export marketing varanasi, saree brand reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-silk-industry-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Silk Industry in Varanasi | More Saree Sales",
    description:
      "Grow your Varanasi silk and saree business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and store buyers.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-silk-industry-in-varanasi",
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
    title: "Digital Marketing for Silk Industry in Varanasi | More Saree Sales",
    description:
      "Grow your Varanasi silk and saree business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and store buyers.",
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