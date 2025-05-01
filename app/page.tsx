import prisma from './lib/prisma';
import TrainSeriesCard from './components/TrainSeriesCard';

export default async function Home() {
  const trainSeries = await prisma.trainSeries.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {trainSeries.map((series) => (
        <TrainSeriesCard
          key={series.id}
          id={series.id}
          name={series.name}
          description={series.description}
          imageUrl={series.imageUrl}
          />
      ))}
    </div>
  );
}
