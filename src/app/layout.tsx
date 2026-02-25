import './globals.css';
import { Inter } from 'next/font/google';

import Header from '../components/Header/Header'; 

import Footer from '../components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfólio Flavia | QA Engineer',
  description: 'Portfólio de Quality Assurance e Automação de Testes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>

        {/* 2. IMPORTANTE: O componente tem que estar aqui dentro */}
        <Header />  {/* <-- SE NÃO TIVER ISSO, O MENU NÃO APARECE */}

        {children}

        <Footer />
      </body>
    </html>
  );
}