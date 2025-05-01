import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const parts = await prisma.part.findMany({
      where: {
        categoryId: parseInt(params.id),
      },
    });
    return NextResponse.json(parts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch parts' }, { status: 500 });
  }
} 