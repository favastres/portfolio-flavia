import Link from 'next/link';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.dock}>

                {/* 1. Nome (Esquerda) */}
                <Link href="/" className={styles.logo}>
                    Flavia Vastres
                </Link>

                {/* 2. Links de Navegação (Centro) */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        início
                    </Link>

                    {/* MUDANÇA AQUI: De Projetos para Experiência */}
                    <Link href="/experiencia" className={styles.navLink}>
                        experiência
                    </Link>

                    {/* NOVO LINK AQUI */}
                    <Link href="/educacao" className={styles.navLink}>
                        formação
                    </Link>
                </nav>

                {/* 3. Ícones Sociais (Direita) */}
                <div className={styles.socials}>
                    <a
                        href="https://github.com/favastres"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.icon}
                        aria-label="GitHub"
                    >
                        <GithubLogo size={20} />
                    </a>

                    <a
                        href="https://linkedin.com/in/flaviavastres"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.icon}
                        aria-label="LinkedIn"
                    >
                        <LinkedinLogo size={20} />
                    </a>

                    <a
                        href="mailto:flavastres@outlook.com"
                        className={styles.icon}
                        aria-label="Email"
                    >
                        <EnvelopeSimple size={20} />
                    </a>
                </div>

            </div>
        </div>
    );
}