'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Category, TrainSeries } from '@prisma/client';
import CategoriesSearch from '@/app/components/CategoriesSearch';
import AddCategoryModal from '@/app/components/AddCategoryModal';
import { useRouter } from 'next/navigation';

type TrainSeriesContentProps = {
  trainSeries: TrainSeries & {
    categories: Category[];
  };
};

export default function TrainSeriesContent({ trainSeries }: TrainSeriesContentProps) {
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(trainSeries.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link
          href="/"
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
          Voltar para escolha de comboio
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categorias das {trainSeries.name}</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Adicionar Categoria
        </button>
      </div>
      
      <CategoriesSearch categories={trainSeries.categories} onSearch={setFilteredCategories} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl text-gray-600 font-bold mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>

      <AddCategoryModal
        trainSeriesId={trainSeries.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </div>
  );
} 