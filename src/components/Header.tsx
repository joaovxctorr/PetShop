import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Espaço vazio para centralizar o nome */}
      <div className="flex-grow"></div>
      
      <Link href="/" className="text-2xl font-bold flex items-center justify-center flex-grow">
        <FaHome className="mr-2" /> Petshop
      </Link>
      
      {/* Espaço vazio para manter o alinhamento */}
      <div className="flex-grow"></div>
    </header>
  );
}
