import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    // First delete all categories associated with this train series
    await prisma.category.deleteMany({
      where: { trainSeriesId: id },
    });

    // Then delete the train series
    await prisma.trainSeries.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting train series:', error);
    return NextResponse.json(
      { error: 'Failed to delete train series' },
      { status: 500 }
    );
  }
} 