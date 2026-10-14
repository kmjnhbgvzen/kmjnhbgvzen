import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "SEO Services Moradabad for Small Business | Zentrix Infotech",
  description:
    "Affordable SEO services in Moradabad for small business. Zentrix Infotech helps local shops, clinics and startups rank on Google and get more inquiries. Free consultation.",
  keywords:
    "SEO services Moradabad for small business, small business SEO Moradabad, SEO company for small business Moradabad, affordable SEO services Moradabad, local SEO Moradabad, SEO packages for small business Moradabad, Google Business Profile optimization Moradabad, SEO for local shops Moradabad, SEO services near me Moradabad, digital marketing for small business Moradabad, website SEO Moradabad, SEO expert Moradabad, Zentrix Infotech SEO, small business website optimization Moradabad, best SEO services in Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad-for-small-business",
  },


  openGraph: {
    title: "SEO Services Moradabad for Small Business | Zentrix Infotech",
    description:
      "Affordable SEO services in Moradabad for small business. Zentrix Infotech helps local shops, clinics and startups rank on Google and get more inquiries. Free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad-for-small-business",
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
    title: "SEO Services Moradabad for Small Business | Zentrix Infotech",
    description:
      "Affordable SEO services in Moradabad for small business. Zentrix Infotech helps local shops, clinics and startups rank on Google and get more inquiries. Free consultation.",
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