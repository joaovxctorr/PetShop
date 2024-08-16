import { useState } from 'react';

interface AppointmentFormProps {
  serviceType: 'consulta' | 'banho';
}

export default function AppointmentForm({ serviceType }: AppointmentFormProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [petName, setPetName] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petType, setPetType] = useState<'gato' | 'cachorro'>('cachorro'); // Default to 'cachorro'
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details || !petName || !petWeight || !petAge || !petBreed) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const appointment = {
      serviceType,
      date,
      time,
      petName,
      petWeight,
      petAge,
      petBreed,
      petType,
      details,
    };

    localStorage.setItem('appointment', JSON.stringify(appointment));
    alert('Agendamento salvo com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Data
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hora
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome do Pet
        </label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Nome do pet"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Peso do Pet
        </label>
        <input
          type="number"
          value={petWeight}
          onChange={(e) => setPetWeight(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Peso em kg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Idade do Pet
        </label>
        <input
          type="number"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Idade em anos"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Raça do Pet
        </label>
        <input
          type="text"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Raça do pet"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tipo de Pet
        </label>
        <select
          value={petType}
          onChange={(e) => setPetType(e.target.value as 'gato' | 'cachorro')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Detalhes Adicionais
        </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={4}
          placeholder="Descreva qualquer detalhe adicional importante para o agendamento"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agendar
        </button>
      </div>
    </form>
  );
}
