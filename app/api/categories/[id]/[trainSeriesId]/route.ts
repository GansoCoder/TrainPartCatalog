import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const categories = await prisma.category.findMany({
      where: {
        trainSeriesId: parseInt(params.id),
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
} 