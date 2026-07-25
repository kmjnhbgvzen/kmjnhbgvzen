import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Coaching Institutes in Varanasi | More Admissions",
  description:
    "Grow your Varanasi coaching institute with expert digital marketing — SEO, Google Maps, social media & ads that bring more student enquiries and admissions.",
  keywords:
    "digital marketing for coaching institutes in varanasi, coaching institute marketing agency varanasi, coaching center SEO varanasi, education marketing varanasi, coaching institute website design, google my business for coaching institutes, coaching institute ads varanasi, increase admissions varanasi, best digital marketing company for coaching institutes, local SEO for education, coaching institute social media marketing, NEET JEE coaching marketing varanasi, coaching institute lead generation, coaching institute online reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-coaching-institutes-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Coaching Institutes in Varanasi | More Admissions",
    description:
      "Grow your Varanasi coaching institute with expert digital marketing — SEO, Google Maps, social media & ads that bring more student enquiries and admissions.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-coaching-institutes-in-varanasi",
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
    title: "Digital Marketing for Coaching Institutes in Varanasi | More Admissions",
    description:
      "Grow your Varanasi coaching institute with expert digital marketing — SEO, Google Maps, social media & ads that bring more student enquiries and admissions.",
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