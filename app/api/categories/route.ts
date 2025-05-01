import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, trainSeriesId } = body;

    const category = await prisma.category.create({
      data: {
        name,
        description,
        trainSeriesId: Number(trainSeriesId),
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Error creating category' },
      { status: 500 }
    );
  }
} 