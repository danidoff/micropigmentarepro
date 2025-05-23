"use client";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import SectionTitle from "@/components/SectionTitle";
import { useEffect, useState } from "react";


    
    
export default function Section({ id, title, byTitle, content, listItems, backgroundColor, backgroundImage, image }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        setIsMobile(mediaQuery.matches);

        const handleChange = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    
    return (
        <section id={id} className={`${styles.section} ${id === "home" && !isMobile ? styles.fullScreenImageSection : ""}`}
                 style={{ backgroundImage: id === "home" && !isMobile ? `url(${image})` : "none" }}>


            <SectionTitle title={title} id={id} byTitle={byTitle}/> {/* SectionTitle might still use framer-motion, will address separately */}
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    {content && <p className={id === "home" ? styles.homeText : ""}>{content}</p>}

                    {/* Render list items if available */}
                    {listItems && listItems.map((list, index) => (
                        <div key={index} className={styles.listContainer}>
                            <h2 className={styles.listTitle}>{list.title}</h2>
                            <ul className={styles.list}>
                                {list.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Render image on the right */}
                {id !== "home" && image && (
                    <div className={styles.imageContainer}>
                        <Image src={image} alt={title} width={600} height={400} priority/>
                    </div>
                )}
                {id === "home" && isMobile && image && (
                    <div className={styles.imageContainer}>
                        <Image src={image} alt={title} width={600} height={400} priority/>
                    </div>
                )}
            </div>
        </section>
    );
}
