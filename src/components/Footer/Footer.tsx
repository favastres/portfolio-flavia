import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                Desenvolvido com ❤️ por <span className={styles.highlight}>Flavia.</span>
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
                &copy; {currentYear} Todos os direitos reservados.
            </p>
        </footer>
    );
}