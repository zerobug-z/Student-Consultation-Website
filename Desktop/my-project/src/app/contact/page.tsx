import { div } from "framer-motion/client";
import { ContactForm } from "../components/sections/form";
import Navbar from "../components/sections/navbar";


export default function Home(){
    return(
     <div>
        <Navbar/>
        <ContactForm/>
     </div>
    )
}