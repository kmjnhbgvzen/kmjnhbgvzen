import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Interior Designers in Dubai | Portfolio Sites",
  description:
    "Stunning web development for interior designers in Dubai. Portfolio-driven, visually rich, SEO-ready websites that turn visitors into design clients.",
  keywords:
    "web development for interior designers in Dubai, interior design website development Dubai, interior designer portfolio website UAE, interior design web design company Dubai, hire web developer for interior designer Dubai, luxury interior design website Dubai, interior design SEO services Dubai, architecture and interior website developer Dubai, best website company for interior designers Dubai, interior design studio website UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-interior-designers-in-dubai",
  },

  openGraph: {
    title: "Web Development for Interior Designers in Dubai | Portfolio Sites",
    description:
      "Stunning web development for interior designers in Dubai. Portfolio-driven, visually rich, SEO-ready websites that turn visitors into design clients.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-interior-designers-in-dubai",
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
    title: "Web Development for Interior Designers in Dubai | Portfolio Sites",
    description:
      "Stunning web development for interior designers in Dubai. Portfolio-driven, visually rich, SEO-ready websites that turn visitors into design clients.",
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