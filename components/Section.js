"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from '@/styles/Home.module.css';

export default function Section({ id, title, content, backgroundColor, image }) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -200]);

    return (
        <section id={id} className={styles.section}>
            <motion.div style={{ y }} className={styles.content}>
                <h1>{title}</h1>
                <p>{content}</p>
                {image && (
                    <div className={styles.imageContainer}>
                        <Image src={image} alt={title} width={600} height={400} priority />
                    </div>
                )}
            </motion.div>
        </section>
    );
}
