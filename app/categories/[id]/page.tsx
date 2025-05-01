import prisma from '@/app/lib/prisma';
import { notFound } from 'next/navigation';
import CategoryContent from './CategoryContent';
import { Category, Part, TrainSeries } from '@prisma/client';

interface PageProps {
  params: { id: string };
}

type ExtendedPart = Part & {
  location: string | null;
};

type ExtendedCategory = Category & {
  parts: ExtendedPart[];
  trainSeries: TrainSeries;
};

export default async function CategoryPage({ params }: PageProps) {
  // Ensure params is awaited
  params = await params;
  const { id: paramId } = params;
  const id = Number(paramId);
  
  if (isNaN(id)) {
    notFound();
  }

  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      parts: true,
      trainSeries: true,
    },
  });

  if (!category) {
    notFound();
  }

  // Cast the category to the expected type since we know the structure matches
  return <CategoryContent category={category as ExtendedCategory} />;
} 