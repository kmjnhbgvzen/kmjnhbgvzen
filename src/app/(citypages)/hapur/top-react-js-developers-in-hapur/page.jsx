import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Top React JS Developers in Hapur | Custom React Web App Experts",
  description:
    "Hire top React JS developers in Hapur for fast, scalable web apps, custom dashboards & interactive UI development that gives your business a real edge.",
  keywords:
    "top React JS developers in Hapur, React JS developer Hapur, React web app development Hapur, React developer near me, custom React application development, front-end developer Hapur, React JS company Hapur, single page application development, React dashboard development, hire React developer India, JavaScript developer Hapur, scalable web app development Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/top-react-js-developers-hapur",
  },
  openGraph: {
    title: "Top React JS Developers in Hapur | Custom React Web App Experts",
    description:
      "Hire top React JS developers in Hapur for fast, scalable web apps, custom dashboards & interactive UI development that gives your business a real edge.",
    url: "https://www.zentrixinfotech.com/hapur/top-react-js-developers-hapur",
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
    title: "Top React JS Developers in Hapur | Custom React Web App Experts",
    description:
      "Hire top React JS developers in Hapur for fast, scalable web apps, custom dashboards & interactive UI development that gives your business a real edge.",
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