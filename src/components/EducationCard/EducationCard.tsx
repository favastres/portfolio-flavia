import styles from './EducationCard.module.css';

interface EducationProps {
  institution: string;
  course: string;
  period: string;
  status: 'concluido' | 'andamento';
}

export default function EducationCard({ institution, course, period, status }: EducationProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{course}</h3>
          <span className={styles.institution}>{institution}</span>
        </div>
        
        <span className={`${styles.status} ${status === 'concluido' ? styles.done : styles.progress}`}>
          {status === 'concluido' ? 'Concluído' : 'Estudando Agora'}
        </span>
      </div>
      
      <span className={styles.period}>{period}</span>
    </div>
  );
}