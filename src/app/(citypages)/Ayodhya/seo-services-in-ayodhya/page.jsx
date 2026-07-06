import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Ayodhya | Rank Higher on Google & Get More Local Customers",
  description:
    "Grow your business with professional SEO services in Ayodhya. Get higher Google rankings, more local visibility, and consistent leads with proven on-page, off-page, and local SEO strategies.",
  keywords:
    "SEO services in Ayodhya, SEO company Ayodhya, local SEO Ayodhya, best SEO agency near me, Google ranking services Ayodhya, on-page SEO Ayodhya, off-page SEO services, website SEO optimization Ayodhya, SEO for small business Ayodhya, ecommerce SEO Ayodhya",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/seo-services-in-ayodhya",
  },
  openGraph: {
    title: "SEO Services in Ayodhya | Rank Higher on Google & Get More Local Customers",
    description:
      "Grow your business with professional SEO services in Ayodhya. Get higher Google rankings, more local visibility, and consistent leads with proven on-page, off-page, and local SEO strategies.",
    url: "https://www.zentrixinfotech.com/ayodhya/seo-services-in-ayodhya",
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
    title: "SEO Services in Ayodhya | Rank Higher on Google & Get More Local Customers",
    description:
      "Grow your business with professional SEO services in Ayodhya. Get higher Google rankings, more local visibility, and consistent leads with proven on-page, off-page, and local SEO strategies.",
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