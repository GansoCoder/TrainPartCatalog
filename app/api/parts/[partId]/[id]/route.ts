import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { partId: string } }
) {
  try {
    // Ensure params is awaited
    params = await params;
    const { partId: paramId } = params;
    const id = parseInt(paramId);
    
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