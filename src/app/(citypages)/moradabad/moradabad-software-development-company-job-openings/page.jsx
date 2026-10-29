import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title:
    "Software Company Job Openings in Moradabad | Zentrix Careers",
  description:
    "Looking for software jobs in Moradabad? Join Zentrix Infotech for developer, designer and marketing roles. Learn, grow and build your career. Apply today.",
  keywords:
    "moradabad software development company job openings, software jobs in moradabad, it jobs in moradabad, web developer jobs moradabad, software developer vacancy moradabad, fresher jobs moradabad it, careers at zentrix infotech, job openings software company moradabad, react developer jobs moradabad, ui ux designer jobs moradabad, digital marketing jobs moradabad, internship software company moradabad",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-job-openings",
  },



  openGraph: {
    title:
      "Software Company Job Openings in Moradabad | Zentrix Careers",
    description:
      "Looking for software jobs in Moradabad? Join Zentrix Infotech for developer, designer and marketing roles. Learn, grow and build your career. Apply today.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-job-openings",
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
      "Software Company Job Openings in Moradabad | Zentrix Careers",
    description:
      "Looking for software jobs in Moradabad? Join Zentrix Infotech for developer, designer and marketing roles. Learn, grow and build your career. Apply today.",
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