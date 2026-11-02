import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "IT Consulting Services in Moradabad | Zentrix Infotech",
  description:
    "Need IT consulting services in Moradabad? Zentrix Infotech offers technology strategy, software, cloud and security advice. 250+ projects. Book a free call.",
  keywords:
    "IT consulting services in Moradabad, IT consulting company Moradabad, IT consultant Moradabad, technology consulting Moradabad, IT solutions company Moradabad, IT strategy consulting, software consulting Moradabad, cloud consulting Moradabad, digital transformation consulting Moradabad, IT consulting for small business, IT consulting for startups, business IT solutions Moradabad, IT advisory services, IT infrastructure consulting, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/it-consulting-services-in-moradabad",
  },


  openGraph: {
    title: "IT Consulting Services in Moradabad | Zentrix Infotech",
    description:
      "Need IT consulting services in Moradabad? Zentrix Infotech offers technology strategy, software, cloud and security advice. 250+ projects. Book a free call.",
    url: "https://www.zentrixinfotech.com/moradabad/it-consulting-services-in-moradabad",
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
    title: "IT Consulting Services in Moradabad | Zentrix Infotech",
    description:
      "Need IT consulting services in Moradabad? Zentrix Infotech offers technology strategy, software, cloud and security advice. 250+ projects. Book a free call.",
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