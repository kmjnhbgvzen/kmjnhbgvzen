import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Full Stack Developer Salary in Hapur | 2026 Pay Guide & Career Path",
  description:
    "Curious about full stack developer salary in Hapur? Explore realistic pay ranges by experience, skills, and city comparisons for 2026.",
  keywords:
    "full stack developer salary in Hapur, full stack developer salary India, full stack developer pay scale, MERN stack developer salary, full stack fresher salary, full stack developer salary UP, software developer salary Hapur, hire full stack developer Hapur, full stack developer career growth, JavaScript developer salary India, remote full stack developer salary, full stack developer salary 2026",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/full-stack-developer-salary-hapur",
  },
  openGraph: {
    title: "Full Stack Developer Salary in Hapur | 2026 Pay Guide & Career Path",
    description:
      "Curious about full stack developer salary in Hapur? Explore realistic pay ranges by experience, skills, and city comparisons for 2026.",
    url: "https://www.zentrixinfotech.com/hapur/full-stack-developer-salary-hapur",
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
    title: "Full Stack Developer Salary in Hapur | 2026 Pay Guide & Career Path",
    description:
      "Curious about full stack developer salary in Hapur? Explore realistic pay ranges by experience, skills, and city comparisons for 2026.",
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