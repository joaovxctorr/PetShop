import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentBanho() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Agendar Banho - Petshop</title>
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Agendar Banho</h1>
        <AppointmentForm serviceType="banho" />
      </main>
      <Footer />
    </div>
  );
}
