import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Content Marketing Agency in Uttar Pradesh | Zentrix Infotech",
  description:
    "Looking for a Content Marketing Agency in Uttar Pradesh? Discover Zentrix Infotech's blog writing, SEO content, social media and brand storytelling services in full detail.",
  keywords:
    "content marketing agency in uttar pradesh, content marketing company up, best content marketing agency uttar pradesh, blog writing services up, seo content writing agency uttar pradesh, digital content marketing up, content marketing services lucknow, content marketing agency noida, content marketing agency ghaziabad, content strategy agency up",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/uttar-pradesh/content-marketing-agency-uttar-pradesh",
  },
  openGraph: {
    title: "Content Marketing Agency in Uttar Pradesh | Zentrix Infotech",
    description:
      "Looking for a Content Marketing Agency in Uttar Pradesh? Discover Zentrix Infotech's blog writing, SEO content, social media and brand storytelling services in full detail.",
    url: "https://www.zentrixinfotech.com/uttar-pradesh/content-marketing-agency-uttar-pradesh",
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
    title: "Content Marketing Agency in Uttar Pradesh | Zentrix Infotech",
    description:
      "Looking for a Content Marketing Agency in Uttar Pradesh? Discover Zentrix Infotech's blog writing, SEO content, social media and brand storytelling services in full detail.",
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