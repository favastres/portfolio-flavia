import {
    Robot,
    Browsers,
    PlayCircle,
    DeviceMobile,
    Lightning,
    ListChecks,
    Sparkle
} from '@phosphor-icons/react/dist/ssr';
import styles from './TechStack.module.css';

export default function TechStack() {
    return (
        <div className={styles.stackCard}>
            <h3 className={styles.cardTitle}>Hard Skills</h3>

            <div className={styles.iconGrid}>

                {/* Item 1 */}
                <div className={styles.techItem}>
                    <Robot size={32} color="#8257e5" />
                    <span>Robot Framework</span>
                </div>

                {/* Item 2 */}
                <div className={styles.techItem}>
                    <Browsers size={32} color="#8257e5" />
                    <span>Cypress</span>
                </div>

                {/* Item 3 */}
                <div className={styles.techItem}>
                    <PlayCircle size={32} color="#8257e5" />
                    <span>Playwright</span>
                </div>

                {/* Item 4 */}
                <div className={styles.techItem}>
                    <DeviceMobile size={32} color="#8257e5" />
                    <span>Appium</span>
                </div>

                {/* Item 5 */}
                <div className={styles.techItem}>
                    <Lightning size={32} color="#8257e5" />
                    <span>JMeter / K6</span>
                </div>

                {/* Item 6 */}
                <div className={styles.techItem}>
                    <ListChecks size={32} color="#8257e5" />
                    <span>Jira</span>
                </div>

                {/* Item 7 - IA (Agora normal, sem span) */}
                <div className={styles.techItem}>
                    <Sparkle size={32} color="#00B37E" />
                    <span>Entusiasta IA</span>
                </div>

            </div>
        </div>
    );
}