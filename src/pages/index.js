import Bachelors from "@/components/Bachelors";
import Become from "@/components/Become";
import Calender from "@/components/Calender";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Weare from "@/components/Weare";

export default function Home() {
  return (
   <>
   <Navbar />
   <Become />
   <Bachelors />
   <Impact />
   <News />
   <Calender /> 
   <Weare />
   <Footer />
   </>
  )
}