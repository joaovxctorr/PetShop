import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const [appointment, setAppointment] = useState<any>(null);

  useEffect(() => {
    const savedAppointment = localStorage.getItem('appointment');
    if (savedAppointment) {
      setAppointment(JSON.parse(savedAppointment));
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem('appointment');
    setAppointment(null);
    alert('Agendamento excluído com sucesso!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Perfil - Petshop</title>
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Perfil</h1>
        {appointment ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{appointment.petName}</h2>
              <p className={`text-xl font-semibold ${appointment.serviceType === 'consulta' ? 'text-green-600' : 'text-yellow-600'}`}>
                {appointment.serviceType === 'consulta' ? 'Consulta Médica' : 'Banho'}
              </p>
            </div>
            <div className="text-lg">
              <p><strong>Data:</strong> {appointment.date}</p>
              <p><strong>Hora:</strong> {appointment.time}</p>
              <p><strong>Peso do Pet:</strong> {appointment.petWeight} kg</p>
              <p><strong>Idade do Pet:</strong> {appointment.petAge} anos</p>
              <p><strong>Raça do Pet:</strong> {appointment.petBreed}</p>
              <p><strong>Tipo de Pet:</strong> {appointment.petType}</p>
              <p><strong>Detalhes Adicionais:</strong></p>
              <p>{appointment.details}</p>
            </div>
            <button
              onClick={handleDelete}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Excluir Agendamento
            </button>
          </div>
        ) : (
          <p>Nenhum agendamento encontrado.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
