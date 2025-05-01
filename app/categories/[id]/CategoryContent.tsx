'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category, Part, TrainSeries } from '@prisma/client';
import PartsSearch from '@/app/components/PartsSearch';
import AddPartModal from '@/app/components/AddPartModal';
import EditPartModal from '@/app/components/EditPartModal';
import { useRouter } from 'next/navigation';

type ExtendedPart = Part & {
  location: string | null;
};

type CategoryContentProps = {
  category: Category & {
    parts: ExtendedPart[];
    trainSeries: TrainSeries;
  };
};

export default function CategoryContent({ category }: CategoryContentProps) {
  const [filteredParts, setFilteredParts] = useState<ExtendedPart[]>(category.parts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState<ExtendedPart | null>(null);
  const router = useRouter();

  const handleSuccess = () => {
    router.refresh();
  };

  const handleEditClick = (part: ExtendedPart) => {
    setSelectedPart(part);
    setIsEditModalOpen(true);
  };

  const handleDeletePart = async (partId: number) => {
    if (confirm('Are you sure you want to delete this part?')) {
      try {
        const response = await fetch(`/api/parts/${partId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete part');
        }

        handleSuccess();
      } catch (error) {
        console.error('Error deleting part:', error);
        alert('Failed to delete part. Please try again.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link
          href={`/train-series/${category.trainSeriesId}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Voltar para {category.trainSeries.name}
        </Link>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
         + Adicionar Item
        </button>
      </div>

      <PartsSearch parts={category.parts} onSearch={setFilteredParts} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
          <div
            key={part.id}
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {part.imageUrl && (
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={part.imageUrl}
                  alt={part.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <h2 className="text-xl text-gray-600 font-bold mb-2">{part.name}</h2>
            <p className="text-gray-600 mb-2">{part.description}</p>
            <div className="flex flex-col gap-1 text-sm text-gray-500">
              <p>Nomenclatura: {part.partNumber}</p>
              {part.location && <p>Localização: {part.location}</p>}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => handleEditClick(part)}
                className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeletePart(part.id)}
                className="px-3 py-1 text-sm bg-red-200 text-red-700 rounded hover:bg-red-300"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddPartModal
        categoryId={category.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />

      {selectedPart && (
        <EditPartModal
          part={selectedPart}
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedPart(null);
          }}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
} 