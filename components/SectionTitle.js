"use client";

import styles from '@/styles/SectionTitle.module.css';
import {motion} from "framer-motion";

export default function SectionTitle({title, id}) {
    return (
        <motion.div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            {id === 'home' ? <h2>by Cristina Lăcău</h2> : ""}
        </motion.div>
    );
}