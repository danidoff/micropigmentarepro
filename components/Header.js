import styles from '@/styles/Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#home">Acasă</a></li>
                    <li><a href="#about">Despre Noi</a></li>
                    <li><a href="#services">Servicii</a></li>
                    <li><a href="#portfolio">Portofoliu</a></li>
                    <li><a href="#courses">Cursuri</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
