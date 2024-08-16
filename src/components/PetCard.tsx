// Exibir as informações de cada pet.
interface PetCardProps {
    name: string;
    weight: number;
    age: number;
    breed: string;
    type: string;
  }
  
  export default function PetCard({ name, weight, age, breed, type }: PetCardProps) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p>Peso: {weight} kg</p>
        <p>Idade: {age} anos</p>
        <p>Raça: {breed}</p>
        <p>Tipo: {type}</p>
      </div>
    );
  }
  