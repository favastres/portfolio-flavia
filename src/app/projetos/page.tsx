// src/app/projetos/page.tsx
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function ProjectsPage() {
    return (
        <main className="grid-container">

            {/* Cabeçalho da página com botão de voltar */}
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                }}>
                    <ArrowLeft size={16} />
                    Voltar para Home
                </Link>
                <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Meus Projetos de QA</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Casos de teste, automações e relatórios de bugs.
                </p>
            </div>

            {/* Lista de Projetos (Copiada da Home) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                <ProjectCard
                    title="Automação E-commerce (Cypress)"
                    description="Suite de testes E2E cobrindo fluxos críticos: Login, Busca, Carrinho e Checkout."
                    tags={['Cypress', 'JavaScript', 'CI/CD']}
                    repoLink="#"
                />

                <ProjectCard
                    title="API Testing Framework"
                    description="Validação automatizada de endpoints RESTful com Postman e Newman."
                    tags={['Postman', 'API REST', 'JSON Schema']}
                    repoLink="#"
                />

                <ProjectCard
                    title="Performance Test - Black Friday"
                    description="Teste de carga com K6 para validar 10k usuários simultâneos."
                    tags={['K6', 'Grafana', 'Load Testing']}
                    repoLink="#"
                />

            </div>
        </main>
    );
}