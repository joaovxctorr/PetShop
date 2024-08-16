import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaSoap, FaUser } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Bem-vindo ao Petshop</h1>
          <p className="text-lg mb-4">Agende consultas e banhos para o seu pet de forma fácil e rápida.</p>
          <div className="flex justify-center gap-4 mb-6">
            <Link href="/appointment?serviceType=consulta">
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 cursor-pointer">
                <FaCalendarAlt /> Agendar Consulta
              </div>
            </Link>
            <Link href="/appointment?serviceType=banho">
              <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 cursor-pointer">
                <FaSoap /> Agendar Banho
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Link href="/profile">
        <div className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer">
          <FaUser className="mr-2" /> Perfil
        </div>
      </Link>
    </div>
  );
}
