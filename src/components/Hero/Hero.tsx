import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroCard}>

            {/* Foto de Perfil */}
            <div className={styles.avatarWrapper}>
                <Image
                    src="/perfil_flavia.png"
                    alt="Foto de Flavia"
                    width={120}
                    height={120}
                    className={styles.avatar}
                    priority
                />
            </div>

            {/* Textos de Apresentação */}
            <h1 className={styles.title}>Olá, eu sou a Flavia</h1>

            <span className={styles.role}>QA Engineer | Entusiasta de IA</span>

            <p className={styles.description}>
                Especialista em garantir a qualidade de software. Transformo requisitos complexos
                em cenários de teste robustos e automação eficiente. Foco em Robot Framework, Cypress e testes de API.
            </p>
        </div>
    );
}