import Header from '@/components/Header';
import Section from '@/components/Section';
import styles from '@/styles/Home.module.css';

export default function Home() {
        return (
            <div className={styles.container}>
                    <Header />

                    <Section
                        id="home"
                        title="Bine ai venit la Micropigmentare Pro!"
                        content="Transformăm frumusețea într-o artă cu servicii premium de micropigmentare, laminare gene și make-up."
                        backgroundColor="#ff7e5f"
                        image="/images/home.jpg"
                    />

                    <Section
                        id="about"
                        title="Despre Noi"
                        content="Micropigmentare Pro este un salon dedicat frumuseții, cu ani de experiență în domeniu."
                        backgroundColor="#feb47b"
                        image="/images/about.jpg"
                    />

                    <Section
                        id="services"
                        title="Servicii"
                        content="Oferim micropigmentare sprâncene, eyeliner, buze, laminare gene, make-up profesional și cursuri acreditate."
                        backgroundColor="#6a11cb"
                        image="/images/services.jpg"
                    />

                    <Section
                        id="portfolio"
                        title="Portofoliu"
                        content="Vezi transformările uimitoare realizate de echipa noastră."
                        backgroundColor="#2575fc"
                        image="/images/portfolio.jpg"
                    />

                    <Section
                        id="courses"
                        title="Cursuri"
                        content="Învață arta micropigmentării de la profesioniști!"
                        backgroundColor="#1e9600"
                        image="/images/courses.jpg"
                    />

                    <Section
                        id="contact"
                        title="Contact"
                        content="Ne poți găsi la Belle Studio. Contactează-ne pentru programări!"
                        backgroundColor="#e52d27"
                        image="/images/contact.jpg"
                    />
            </div>
        );
}
