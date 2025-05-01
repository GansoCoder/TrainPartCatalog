import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { partId: string } }
) {
  try {
    const body = await request.json();
    const { name, description, partNumber, location, imageUrl } = body;

    const data: any = {
      name,
      description,
      partNumber,
    };

    if (location) {
      data.location = location;
    }

    if (imageUrl) {
      data.imageUrl = imageUrl;
    }

    const part = await prisma.part.update({
      where: {
        id: parseInt(params.partId),
      },
      data,
    });

    return NextResponse.json(part);
  } catch (error) {
    console.error('Error updating part:', error);
    return NextResponse.json(
      { error: 'Error updating part' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { partId: string } }
) {
  try {
    // Ensure params is awaited
    params = await params;
    const { partId } = params;
    const id = parseInt(partId);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.part.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting part:', error);
    return NextResponse.json(
      { error: 'Failed to delete part' },
      { status: 500 }
    );
  }
} 