import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Ayodhya | Blogs, Videos & SEO Content That Converts",
  description:
    "Partner with a content marketing agency in Ayodhya to create SEO-friendly blogs, videos, and guides that build trust, attract tourists, and drive bookings and sales.",
  keywords:
    "content marketing agency in Ayodhya, content writing services Ayodhya, blog writing company Ayodhya, SEO content writing, video content marketing Ayodhya, travel content Ayodhya, content strategy for hotels, digital content agency near me, website content writing Ayodhya, content marketing company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
  },
  openGraph: {
    title: "Content Marketing Agency in Ayodhya | Blogs, Videos & SEO Content That Converts",
    description:
      "Partner with a content marketing agency in Ayodhya to create SEO-friendly blogs, videos, and guides that build trust, attract tourists, and drive bookings and sales.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
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
    title: "Content Marketing Agency in Ayodhya | Blogs, Videos & SEO Content That Converts",
    description:
      "Partner with a content marketing agency in Ayodhya to create SEO-friendly blogs, videos, and guides that build trust, attract tourists, and drive bookings and sales.",
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