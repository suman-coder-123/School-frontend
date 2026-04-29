import About from "../components/About";
import AdmissionForm from "../components/AdmissionForm";
import Curriculum from "../components/Curriculum";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  
  return (
    <div  className="pt-20">


        <div id="home">
      < Hero /> 
      </div> 

      <About />
      <div id="academics">
      <Curriculum />
      </div>
      <Infrastructure />
      <Gallery />   
      <Testimonials />
     
        <AdmissionForm />
  
      <Footer />
    </div>
  );
}