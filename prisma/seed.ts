import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  // Create train series
  const series2300 = await prisma.trainSeries.create({
    data: {
      name: '2300',
      description: '2300 Series Electric Multiple Unit',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Automotora_da_S%C3%A9rie_2300%2C_a_2302_na_esta%C3%A7%C3%A3o_de_Bra%C3%A7o_de_Prata%2C_em_2021.jpg/2560px-Automotora_da_S%C3%A9rie_2300%2C_a_2302_na_esta%C3%A7%C3%A3o_de_Bra%C3%A7o_de_Prata%2C_em_2021.jpg',
    },
  });

  const series3500 = await prisma.trainSeries.create({
    data: {
      name: '3500',
      description: '3500 Series Electric Multiple Unit',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Automotora_da_S%C3%A9rie_3500%2C_a_fazer_um_servi%C3%A7o_urbano_em_Lisboa-Oriente.jpg/2560px-Automotora_da_S%C3%A9rie_3500%2C_a_fazer_um_servi%C3%A7o_urbano_em_Lisboa-Oriente.jpg',
    },
  });

  // Create categories for 2300 series
  const electrical2300 = await prisma.category.create({
    data: {
      name: 'Sistemas Elétricos',
      description: 'Componentes e sistemas elétricos',
      trainSeriesId: series2300.id,
    },
  });

  const mechanical2300 = await prisma.category.create({
    data: {
      name: 'Sistemas Pneumáticos',
      description: 'Componentes e sistemas pneumáticos',
      trainSeriesId: series2300.id,
    },
  });

  // Create categories for 3500 series
  const electrical3500 = await prisma.category.create({
    data: {
      name: 'Sistemas Elétricos',
      description: 'Componentes e sistemas elétricos',
      trainSeriesId: series3500.id,
    },
  });

  const mechanical3500 = await prisma.category.create({
    data: {
      name: 'Sistemas Pneumáticos',
      description: 'Componentes e sistemas pneumáticos',
      trainSeriesId: series3500.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 