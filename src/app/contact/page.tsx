import { ContactForm } from "../components/sections/form";
import Navbar from "../components/sections/navbar";
import Footer from "../components/sections/footer";

export default function ContactPage(){
    return(
     <div>
        <Navbar/>
        <ContactForm/>
        <Footer/>
     </div>
    )
}