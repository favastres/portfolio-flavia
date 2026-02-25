import styles from './ExperienceCard.module.css';

interface ExperienceProps {
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export default function ExperienceCard({ role, company, period, description, skills }: ExperienceProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.role}>{role}</h3>
                    <span className={styles.company}>{company}</span>
                </div>
                <span className={styles.period}>{period}</span>
            </div>

            <p className={styles.description}>{description}</p>

            {/* Lista de Tecnologias usadas nessa vaga */}
            <div className={styles.techStack}>
                {skills.map((skill) => (
                    <span key={skill} className={styles.techBadge}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}