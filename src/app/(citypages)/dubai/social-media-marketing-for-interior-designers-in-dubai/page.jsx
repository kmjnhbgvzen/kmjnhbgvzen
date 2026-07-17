import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Interior Designers in Dubai | Get More Clients",
  description:
    "Grow your interior design business in Dubai with proven social media marketing strategies. Instagram, Pinterest & TikTok tips to attract high-end clients and boost bookings.",
  keywords:
    "social media marketing for interior designers in Dubai, interior design marketing Dubai, social media marketing Dubai, Instagram marketing for interior designers, interior designer digital marketing UAE, social media agency for interior designers, interior design lead generation Dubai, Pinterest marketing interior design, best social media marketing company Dubai, interior design branding Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-interior-designers-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Interior Designers in Dubai | Get More Clients",
    description:
      "Grow your interior design business in Dubai with proven social media marketing strategies. Instagram, Pinterest & TikTok tips to attract high-end clients and boost bookings.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-interior-designers-in-dubai",
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
    title: "Social Media Marketing for Interior Designers in Dubai | Get More Clients",
    description:
      "Grow your interior design business in Dubai with proven social media marketing strategies. Instagram, Pinterest & TikTok tips to attract high-end clients and boost bookings.",
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