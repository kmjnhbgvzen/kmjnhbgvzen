
import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Coaching Institutes in Muzaffarnagar | Best SEO & Ads Guide",
  description:
    "Muzaffarnagar ke coaching institutes ke liye best digital marketing strategy — local SEO, Google Ads, social media aur website se admissions kaise badhayein, jaanein poori guide.",
  keywords:
    "digital marketing for coaching institutes in Muzaffarnagar, coaching institute marketing Muzaffarnagar, SEO for coaching classes, coaching institute website design, Google Ads for coaching institute, social media marketing for coaching center, local SEO Muzaffarnagar, best digital marketing company Muzaffarnagar, education marketing agency UP, coaching center lead generation",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/digital-marketing-for-coaching-institutes-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing for Coaching Institutes in Muzaffarnagar | Best SEO & Ads Guide",
    description:
      "Muzaffarnagar ke coaching institutes ke liye best digital marketing strategy — local SEO, Google Ads, social media aur website se admissions kaise badhayein, jaanein poori guide.",
    url: "https://www.zentrixinfotech.com/digital-marketing-for-coaching-institutes-in-muzaffarnagar",
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
    title: "Digital Marketing for Coaching Institutes in Muzaffarnagar | Best SEO & Ads Guide",
    description:
      "Muzaffarnagar ke coaching institutes ke liye best digital marketing strategy — local SEO, Google Ads, social media aur website se admissions kaise badhayein, jaanein poori guide.",
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
