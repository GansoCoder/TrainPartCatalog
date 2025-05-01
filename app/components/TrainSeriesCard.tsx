import Link from 'next/link';
import Image from 'next/image';

type TrainSeriesCardProps = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export default function TrainSeriesCard({ id, name, description, imageUrl }: TrainSeriesCardProps) {
  return (
    <Link
      href={`/train-series/${id}`}
      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="relative w-full h-64">
        <Image
          src={`/images/${name}.jpg`}
          alt={`${name} Series Train`}
          fill
          className="object-cover"
          priority={true}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl text-gray-600 font-bold mb-2"> UQE {name}</h2>
      </div>
    </Link>
  );
} 