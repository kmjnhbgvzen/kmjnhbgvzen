import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Improve SEO in Moradabad | Zentrix Infotech",
  description:
    "Learn how to improve SEO in Moradabad with 12 practical steps for local rankings, Google Business Profile, content and speed. Get a free audit from Zentrix.",
  keywords:
    "how to improve SEO Moradabad, improve website ranking Moradabad, SEO tips Moradabad, how to rank on Google in Moradabad, local SEO tips Moradabad, improve Google ranking Moradabad, SEO for small business Moradabad, SEO checklist Moradabad, SEO services Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-improve-seo-in-moradabad",
  },

  openGraph: {
    title: "How to Improve SEO in Moradabad | Zentrix Infotech",
    description:
      "Learn how to improve SEO in Moradabad with 12 practical steps for local rankings, Google Business Profile, content and speed. Get a free audit from Zentrix.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-improve-seo-in-moradabad",
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
    title: "How to Improve SEO in Moradabad | Zentrix Infotech",
    description:
      "Learn how to improve SEO in Moradabad with 12 practical steps for local rankings, Google Business Profile, content and speed. Get a free audit from Zentrix.",
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