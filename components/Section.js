"use client";

import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import SectionTitle from "@/components/SectionTitle";

export default function Section({ id, title, content, listItems, backgroundColor, image }) {
    // const { scrollY } = useScroll();
    // const y = useTransform(scrollY, [0, 500], [0, -200]);

    const { scrollYProgress } = useScroll();
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const y = useTransform(smoothScroll, [0, 1], ["0%", "2%"]); // Efect de paralax ușor
    
    return (
        <section id={id} className={styles.section}>


            <SectionTitle title={title} />
            <motion.div style={{y}} className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    {content && <p>{content}</p>}

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
                {image && (
                    <div className={styles.imageContainer}>
                        <Image src={image} alt={title} width={600} height={400} priority/>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
