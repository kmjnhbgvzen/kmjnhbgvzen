import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "AWS Services in Ghaziabad | Amazon Web Services Experts",
  description:
    "Get expert AWS services in Ghaziabad — EC2, S3, RDS, Lambda, migration, and cost optimization from certified AWS professionals. Scale your business securely on Amazon Web Services. Free consultation available.",
  keywords:
    "aws services in ghaziabad, aws consulting company ghaziabad, amazon web services company ghaziabad, aws migration services ghaziabad, hire aws developer ghaziabad, aws certified expert near me, aws cloud services company, best aws partner ghaziabad, aws cost optimization services, aws ec2 s3 services ghaziabad, aws devops services india, aws solutions architect ghaziabad, aws managed services provider",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/aws-services-in-ghaziabad",
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