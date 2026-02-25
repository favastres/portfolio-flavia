import { MagnifyingGlass, Strategy, Code, Infinity } from '@phosphor-icons/react/dist/ssr';
import styles from './QAProcess.module.css';

export default function QAProcess() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Metodologia como QA</h2>

            <div className={styles.stepsWrapper}>

                {/* Etapa 1: Discovery */}
                <div className={styles.step}>
                    <div className={styles.iconBox}>
                        <MagnifyingGlass weight="bold" />
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>1. Discovery & Shift-Left</h3>
                        <p className={styles.stepDesc}>
                            Participo da definição de requisitos. Análise estática e refinamento de User Stories para prevenir bugs antes do código existir.
                        </p>
                    </div>
                </div>

                {/* Etapa 2: Planning */}
                <div className={styles.step}>
                    <div className={styles.iconBox}>
                        <Strategy weight="bold" />
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>2. Estratégia & IA</h3>
                        <p className={styles.stepDesc}>
                            Criação de planos de teste e massa de dados. Uso de IA Generativa para explorar cenários de borda e otimizar a cobertura.
                        </p>
                    </div>
                </div>

                {/* Etapa 3: Automation */}
                <div className={styles.step}>
                    <div className={styles.iconBox}>
                        <Code weight="bold" />
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>3. Automação</h3>
                        <p className={styles.stepDesc}>
                            Desenvolvimento de scripts robustos (Web/API/Mobile). Foco em testes atômicos, independentes e de fácil manutenção.
                        </p>
                    </div>
                </div>

                {/* Etapa 4: CI/CD */}
                <div className={styles.step}>
                    <div className={styles.iconBox}>
                        <Infinity weight="bold" />
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>4. Pipeline & Monitoramento</h3>
                        <p className={styles.stepDesc}>
                            Integração contínua (GitHub Actions). Os testes rodam a cada PR. Quality Gates garantem que nada quebra em produção.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}