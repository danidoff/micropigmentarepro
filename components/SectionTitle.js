"use client";

import styles from '@/styles/SectionTitle.module.css';

export default function SectionTitle({title, byTitle, id}) {    
    return (id === 'home' ?
            <div className={styles.homeTitleContainer}>
                <p className={styles.homeTitle}>{title}</p>
                <p className={styles.homeSubtitle} style={{marginLeft: 160}}>{byTitle}</p>
            </div> :
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
            </div>
    );
}