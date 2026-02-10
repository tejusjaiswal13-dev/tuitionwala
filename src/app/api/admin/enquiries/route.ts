import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthenticated(request: NextRequest): boolean {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) return false;

    try {
        const decoded = Buffer.from(token, 'base64').toString('utf-8');
        const [username, password] = decoded.split(':');
        return (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        );
    } catch {
        return false;
    }
}

export async function GET(request: NextRequest) {
    if (!isAuthenticated(request)) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const enquiries = await prisma.enquiry.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json({ enquiries }, { status: 200 });
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        return NextResponse.json(
            { error: 'Failed to fetch enquiries' },
            { status: 500 }
        );
    }
}
