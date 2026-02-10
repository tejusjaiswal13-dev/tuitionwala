import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, studentClass, board, tuitionType, locality } = body;

        // Validate required fields
        if (!name || !phone || !studentClass || !board || !tuitionType || !locality) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create enquiry in database
        const enquiry = await prisma.enquiry.create({
            data: {
                name,
                phone,
                studentClass,
                board,
                tuitionType,
                locality
            }
        });

        return NextResponse.json(
            { message: 'Enquiry submitted successfully', enquiry },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating enquiry:', error);
        return NextResponse.json(
            { error: 'Failed to submit enquiry' },
            { status: 500 }
        );
    }
}
