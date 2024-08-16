import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Agendamento - Petshop</title>
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Agendar Serviço</h1>
        <AppointmentForm serviceType="consulta" /> 
      </main>
      <Footer />
    </div>
  );
}
