import React from "react";
import Header from "./Component/Header/Header";
import HeaderBody from "./Component/HeaderBody/HeaderBody";
import ShortIntro from "./Component/ShortIntro/ShortIntro";
import WhyUs from "./Component/WhyUs/WhyUs";
import HomeServices from "./Component/HomeServices/HomeServices";
import HomeAbout from "./Component/HomeAbout/HomeAbout";
import Tools from "./Component/Tools/Tools";
import OurClient from "./Component/OurClient/OurClient";
import ContactForm from "./Component/ContactForm/ContactForm";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <HeaderBody></HeaderBody>
      <ShortIntro></ShortIntro>
      <WhyUs></WhyUs>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <Tools></Tools>
      <OurClient></OurClient>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
