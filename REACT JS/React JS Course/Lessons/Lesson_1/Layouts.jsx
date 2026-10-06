import Footer from "./Footer";
import Header from "./Header";
import WhyChooseUs from "./WhyChooseUs";

function LayoutAll (){
  return (
    <div>
      <Header/>
      <main> <WhyChooseUs/></main>
      <Footer/>
    </div>
  )
}

export default LayoutAll;