import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, partNumber, categoryId, location, imageUrl } = body;

    const data: any = {
      name,
      description,
      partNumber,
      categoryId: Number(categoryId),
    };

    if (location) {
      data.location = location;
    }

    if (imageUrl) {
      data.imageUrl = imageUrl;
    }

    const part = await prisma.part.create({
      data,
    });

    return NextResponse.json(part);
  } catch (error) {
    console.error('Error creating part:', error);
    return NextResponse.json(
      { error: 'Error creating part' },
      { status: 500 }
    );
  }
} 