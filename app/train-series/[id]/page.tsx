import prisma from '@/app/lib/prisma';
import { notFound } from 'next/navigation';
import TrainSeriesContent from './TrainSeriesContent';

export default async function TrainSeriesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: paramId } = await params;
  const id = Number(paramId);
  
  if (isNaN(id)) {
    notFound();
  }

  const trainSeries = await prisma.trainSeries.findUnique({
    where: { id },
    include: { categories: true },
  });

  if (!trainSeries) {
    notFound();
  }

  return <TrainSeriesContent trainSeries={trainSeries} />;
} 