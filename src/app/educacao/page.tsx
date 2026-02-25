import EducationCard from '../../components/EducationCard/EducationCard';

export default function EducationPage() {
    return (
        <main className="grid-container">

            {/* Título */}
            <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Formação & Cursos
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Jornada acadêmica e aprendizado contínuo.
                </p>
            </section>

            {/* Seção 1: Estudando Agora (Destaque) */}
            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    color: '#00B37E', 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    🚀 Estudando no Momento
                </h2>

                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <EducationCard
                        institution="Udemy"
                        course="Formação Engenheiro de IA Generativa 2026: IA na Prática"
                        period="2026 - Presente"
                        status="andamento"
                    />
                    <EducationCard
                        institution="Udemy"
                        course="Engenharia de Prompt: ChatGPT, Gemini, Meta AI, Grok e mais"
                        period="2026 - Presente"
                        status="andamento"
                    />
                </div>
            </section>

            {/* Seção 2: Histórico (Concluídos) */}
            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Formação Acadêmica & Cursos Livres
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    {/* Graduação */}
                    <EducationCard
                        institution="Centro Universitário Senac - Santo Amaro"
                        course="Gestão da Tecnologia da Informação"
                        period="2015 - 2017"
                        status="concluido"
                    />

                    {/* Pós-Graduação */}
                    <EducationCard
                        institution="Impacta Tecnologia"
                        course="MBA em          Engenharia de Software"
                        period="2022 - 2023"
                        status="concluido"
                    />

                    {/* Cursos Técnicos */}
                    <EducationCard
                        institution="Udemy"
                        course="Cypress: Do Zero ao Profissional"
                        period="2023"
                        status="concluido"
                    />

                    <EducationCard
                        institution="Alura"
                        course="Formação Robot Framework"
                        period="2024"
                        status="concluido"
                    />

                    <EducationCard
                        institution="Descomplica"
                        course="Pós-Graduação em Engenharia de Software"
                        period="2023 - 2024"
                        status="concluido"
                    />

                </div>
            </section>

        </main>
    );
}