import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title:
    "Software Development Company Salary in Moradabad | Zentrix Infotech",
  description:
    "Know software developer salary in Moradabad by experience and skill. Learn pay factors, growth tips and career openings at Zentrix Infotech, a Moradabad IT company.",
  keywords:
    "moradabad software development company salary, software developer salary in moradabad, software engineer salary moradabad, IT jobs in moradabad salary, fresher software developer salary moradabad, web developer salary moradabad, software development jobs in moradabad, software company jobs moradabad, react developer salary moradabad, mobile app developer salary moradabad, IT company salary in moradabad, software developer jobs moradabad, careers at software company moradabad, software development company in moradabad, Zentrix Infotech careers",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-salary",
  },


  openGraph: {
    title:
      "Software Development Company Salary in Moradabad | Zentrix Infotech",
    description:
      "Know software developer salary in Moradabad by experience and skill. Learn pay factors, growth tips and career openings at Zentrix Infotech, a Moradabad IT company.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-salary",
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
    title:
      "Software Development Company Salary in Moradabad | Zentrix Infotech",
    description:
      "Know software developer salary in Moradabad by experience and skill. Learn pay factors, growth tips and career openings at Zentrix Infotech, a Moradabad IT company.",
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