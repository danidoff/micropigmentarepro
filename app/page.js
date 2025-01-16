import Header from '@/components/Header';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import sectionsData from '@/data/sections.json';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            {/* Loop through JSON data to render sections dynamically */}
            {sectionsData.map((section) => (
                <div>
                    
                    <Section key={section.id} {...section} />
                </div>
                
            ))}
        </div>
    );
}

// export default function Home() {
//         return (
//             <div className={styles.container}>
//                     <Header />
//
//                     <Section
//                         id="home"
//                         title="Micropigmentare Pro by Belle Studio!"
//                         content="Transformăm frumusețea naturală într-o artă. Cu experiență și pasiune, oferim servicii profesionale de micropigmentare, laminare, make-up, extensii de gene și cursuri acreditate. Descoperă frumusețea la cel mai înalt nivel!"
//                         backgroundColor="#ff7e5f"
//                         image="/images/home.jpg"
//                     />
//
//                     <Section
//                         id="about"
//                         title="Despre Noi"
//                         listItems={[
//                             {
//                                 title: "Cine suntem?",
//                                 items: ["Micropigmentare Pro este un concept creat de Belle Studio by Cristina Lacau, care îmbină experiența, creativitatea și tehnologia modernă pentru a oferi servicii de înfrumusețare premium. Fie că ești în căutarea sprâncenelor perfecte, unui look de machiaj profesionist sau dorești să înveți secretele acestei meserii, suntem aici pentru tine."]
//                             },
//                             {
//                                 title: "Misiunea noastră:",
//                                 items: ["Să oferim clienților noștri servicii de cea mai înaltă calitate, punând accent pe detalii, profesionalism și confort."]
//                             }
//                         ]}
//                         backgroundColor="#feb47b"
//                         image="/images/about.jpg"
//                     />
//
//                 <Section
//                     id="services"
//                     title="Servicii"
//                     listItems={[
//                         {
//                             title: "Micropigmentare",
//                             items: [
//                                 "Sprâncene (tehnici pudrate, fir cu fir, combinate).",
//                                 "Eyeliner semipermanent.",
//                                 "Buze cu efect natural (blush lips)."
//                             ]
//                         },
//                         {
//                             title: "Gene și Laminare",
//                             items: [
//                                 "Extensii de gene fir cu fir, 2D, 3D.",
//                                 "Laminare sprâncene și gene."
//                             ]
//                         },
//                         {
//                             title: "Make-up profesional",
//                             items: [
//                                 "Machiaj de zi, de seară, pentru evenimente."
//                             ]
//                         },
//                         {
//                             title: "Cursuri acreditate",
//                             items: [
//                                 "Micropigmentare sprâncene, eyeliner, buze.",
//                                 "Laminare sprâncene și gene."
//                             ]
//                         }
//                     ]}
//                     backgroundColor="#6a11cb"
//                     image="/images/services.jpg"
//                 />
//
//                     <Section
//                         id="portfolio"
//                         title="Portofoliu"
//                         content="Vezi magia transformărilor noastre! În portofoliul nostru vei găsi imagini înainte și după ale clienților care au avut încredere în serviciile noastre. Fiecare detaliu este realizat cu profesionalism, respectând unicitatea fiecărei persoane."
//                         backgroundColor="#2575fc"
//                         image="/images/portfolio.jpg"
//                     />
//
//                     <Section
//                         id="courses"
//                         title="Cursuri"
//                         content="Te invităm să participi la cursurile noastre acreditate, unde vei descoperi secretele unui rezultat impecabil. Oferim suport teoretic și practic, echipamente de ultimă generație și diplomă recunoscută internațional."
//                         listItems={[
//                             {
//                                 items: [
//                                     "Tehnici moderne de micropigmentare.",
//                                     "Proceduri sigure și igienice.",
//                                     "Construirea unui portofoliu profesional."
//                                 ],
//                                 title: "Ce vei învăța?"
//                             },
//                             {
//                                 title: "Beneficii",
//                                 items: [
//                                     "Ghidare personalizată.",
//                                     "Suport post-curs.",
//                                     "Acces la comunitatea noastră de specialiști."
//                                 ]
//                             }
//                         ]}
//                         backgroundColor="#1e9600"
//                         image="/images/courses.jpg"
//                     />
//
//                     <Section
//                         id="contact"
//                         title="Contact"
//                         listItems={[
//                             {
//                                 title:"Suntem aici pentru tine!",
//                                 items: [
//                                     "Telefon: 0747 662 436",
//                                     "Locație: Strada Mărăști, nr.4 , Sibiu, Romania",
//                                     "Program: Luni - Vineri: 09:00 - 20:00"
//                                 ]
//                             }
//                         ]}
//                         notes="Programează-te acum și lasă frumusețea ta să strălucească!"
//                         backgroundColor="#e52d27"
//                         image="/images/contact.jpg"
//                     />
//             </div>
//         );
// }
