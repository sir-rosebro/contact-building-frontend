// app/page.js
import FooterV1 from "@/src/components/footer/FooterV1";
import WhyChooseUs from "@/src/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
        <WhyChooseUs />      
        <FooterV1/>
    </div>
  );
}