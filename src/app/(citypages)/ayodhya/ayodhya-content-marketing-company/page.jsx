import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Ayodhya Content Marketing Company - Zentrix Infotech",
  description:
    "Zentrix Infotech is a leading content marketing company in Ayodhya, creating SEO content, blogs, and website copy that ranks and converts. Get a free consultation today.",
  keywords:
    "Ayodhya content marketing company, content marketing company Ayodhya, Zentrix Infotech Ayodhya, content marketing agency Ayodhya, content writing company Ayodhya, SEO content company Ayodhya, blog writing company Ayodhya, best content company Ayodhya, content marketing services Ayodhya, content agency Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/content-marketing-company-ayodhya",
  },
  openGraph: {
    title: "Ayodhya Content Marketing Company - Zentrix Infotech",
    description:
      "Zentrix Infotech is a leading content marketing company in Ayodhya, creating SEO content, blogs, and website copy that ranks and converts. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/content-marketing-company-ayodhya",
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
    title: "Ayodhya Content Marketing Company - Zentrix Infotech",
    description:
      "Zentrix Infotech is a leading content marketing company in Ayodhya, creating SEO content, blogs, and website copy that ranks and converts. Get a free consultation today.",
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