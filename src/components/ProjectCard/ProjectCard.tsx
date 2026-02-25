import { GithubLogo, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoLink?: string; 
  demoLink?: string; 
}

export default function ProjectCard({ title, description, tags, repoLink, demoLink }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <p className={styles.description}>{description}</p>
      
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <GithubLogo size={20} />
            Repositório
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <ArrowSquareOut size={20} />
            Ver Projeto/Relatório
          </a>
        )}
      </div>
    </div>
  );
}