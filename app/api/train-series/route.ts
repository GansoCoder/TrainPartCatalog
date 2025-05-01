import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET() {
  try {
    const trainSeries = await prisma.trainSeries.findMany();
    return NextResponse.json(trainSeries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch train series' }, { status: 500 });
  }
} 