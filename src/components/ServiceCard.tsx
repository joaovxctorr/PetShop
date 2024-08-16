interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  