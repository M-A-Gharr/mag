import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/AboutSection";

const About = () => (
    <>
        <Helmet>
            <title>About | Mohamed Amine Gharrab</title>
            <meta
                name="description"
                content="Découvrez Mohamed Amine Gharrab, développeur frontend passionné basé aux Émirats arabes unis, spécialisé dans la création d'interfaces web modernes et performantes."
            />
            <meta property="og:title" content="À propos de Mohamed Amine Gharrab" />
            <meta property="og:description" content="Frontend developer passionné basé aux Émirats, expert en React, Tailwind CSS et développement web moderne." />
            <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://maminegh.com/about" />
        </Helmet>
        <AboutSection />
    </>
);

export default About;