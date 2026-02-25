// src/app/page.tsx
import Hero from '../components/Hero/Hero';
import QAProcess from '../components/QAProcess/QAProcess'; 
import TechStack from '../components/TechStack/TechStack';

export default function Home() {
  return (
    <main className="grid-container">

      {/* 1. Apresentação */}
      <section>
        <Hero />
      </section>

      {/* 2. Metodologia (NOVO!) */}
      <section style={{ marginTop: '2rem' }}>
        <QAProcess />
      </section>

      {/* 3. Ferramentas */}
      <section>
        <TechStack />
      </section>

    </main>
  );
}