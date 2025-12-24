import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Web Application Development in Moradabad | Custom Web Apps",

  description: "Custom web application development in Moradabad. React/Node.js apps for hospitals, inventory, booking systems, CRMs. Scalable, secure, mobile-friendly solutions. Free consultation!",

  keywords: "web application development, custom app, web app, software development, CRM development, inventory management app, booking system app, healthcare app development",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/web-designing-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Web Application Development in Moradabad | Custom Web Apps",

    description:
      "Custom web application development in Moradabad. React/Node.js apps for hospitals, inventory, booking systems, CRMs. Scalable, secure, mobile-friendly solutions. Free consultation!",

    url: "https://www.zentrixinfotech.com/cities/moradabad/web-designing-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Web Application Development in Moradabad | Custom Web Apps",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Web Application Development in Moradabad | Custom Web Apps",

    description:
      "Custom web application development in Moradabad. React/Node.js apps for hospitals, inventory, booking systems, CRMs. Scalable, secure, mobile-friendly solutions. Free consultation!",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
  },

  //FAVICON
  icons: {
    icon: "/favicon.ico",
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