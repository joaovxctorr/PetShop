import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PetForm from '../components/PetForm';

export default function PetDetails() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Detalhes do Pet - Petshop Scheduler</title>
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Detalhes do Pet</h1>
        <PetForm />
      </main>
      <Footer />
    </div>
  );
}
