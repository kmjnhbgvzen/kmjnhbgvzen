import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Muzaffarnagar | Blogs, SEO & Brand Content",
  description:
    "Hire a content marketing agency in Muzaffarnagar for blogs, website copy, video & social content that builds trust, traffic & long-term leads.",
  keywords:
    "content marketing agency in Muzaffarnagar, content marketing services Muzaffarnagar, blog writing services Muzaffarnagar, content writing company Muzaffarnagar, video content marketing Muzaffarnagar, brand content agency Muzaffarnagar, best content marketing company Muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/muzaffarnagar/content-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Content Marketing Agency in Muzaffarnagar | Blogs, SEO & Brand Content",
    description:
      "Hire a content marketing agency in Muzaffarnagar for blogs, website copy, video & social content that builds trust, traffic & long-term leads.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/content-marketing-agency-in-muzaffarnagar",
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
    title: "Content Marketing Agency in Muzaffarnagar | Blogs, SEO & Brand Content",
    description:
      "Hire a content marketing agency in Muzaffarnagar for blogs, website copy, video & social content that builds trust, traffic & long-term leads.",
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