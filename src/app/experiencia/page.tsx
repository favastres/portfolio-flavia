import { DownloadSimple } from '@phosphor-icons/react/dist/ssr'; 
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

export default function ExperiencePage() {
    return (
        <main className="grid-container">

            {/* Cabeçalho com Título e Botão de Download */}
            <section style={{
                marginBottom: '3rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}>

                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                        Experiência Profissional
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Minha trajetória garantindo a qualidade de produtos digitais.
                    </p>
                </div>

                {/* O BOTÃO DE DOWNLOAD AQUI */}
                <a
                    href="/Flavia-Vastres.pdf" 
                    download="Flavia-Vastres.pdf"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: 'var(--accent-color)', // Roxo
                        color: '#fff',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'opacity 0.2s',
                        boxShadow: '0 4px 14px rgba(130, 87, 229, 0.4)' 
                    }}

                >
                    <DownloadSimple size={24} weight="bold" />
                    Baixar Currículo (PDF)
                </a>

            </section>

            {/* Lista de Experiências */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Vaga Atual */}
                <ExperienceCard
                    role="Senior Quality Assurance Tester"
                    company="Certsys"
                    period="2026 - Presente"
                    description="Nesta atuação, assumo a responsabilidade de ponta a ponta pela estratégia de qualidade das aplicações, atuando como um facilitador entre o desenvolvimento e o negócio. Meu foco é garantir que a qualidade não seja apenas uma etapa final, mas um pilar presente desde o desenho da solução até a entrega em produção."
                    skills={['Shift-Left Testing', 'Banco de Dados', 'Teste manual', 'Teste exploratório', 'Melhoria contínua', 'UAT']}
                />

                {/* Vaga Anterior */}
                <ExperienceCard
                    role="Senior Quality Assurance Tester"
                    company="Qintess"
                    period="2023 - 2026"
                    description="Atuei diretamente na linha de frente da garantia de qualidade, sendo responsável pela estruturação técnica dos ciclos de teste e pela manutenção da transparência entre as áreas de desenvolvimento e produto. Minha atuação garantiu que cada funcionalidade entregue fosse rigorosamente validada e documentada."
                    skills={['Ferramenta GID (CAIXA)', 'Cenários de Teste', 'Monitoramento de Bugs', 'Roteiros de Teste', 'Teste Funcional']}
                />

                {/* Vaga Mais Antiga */}
                <ExperienceCard
                    role="Quality Assurance Architect"
                    company="NTT Data Europe & Latam"
                    period="2022 - 2023"
                    description="Desempenhei um papel estratégico na vertical de Qualidade de Software, unindo a expertise técnica em automação com a coordenação consultiva do time. Minha contribuição focou em transformar requisitos de negócio em soluções automatizadas robustas, garantindo a eficiência operacional e a previsibilidade das entregas."
                    skills={['Tricentis Tosca', 'Jira', 'STLC', 'KPIs de Qualidade', 'Test Coverage', 'Scrum']}
                />

            </div>
        </main>
    );
}