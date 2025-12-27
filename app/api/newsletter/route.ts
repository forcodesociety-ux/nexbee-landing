
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email } = data;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const filePath = path.join(process.cwd(), 'newsletter.json');

        let newsletter = [];

        // Check if file exists and read it
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                newsletter = JSON.parse(fileContent);
            } catch (e) {
                newsletter = [];
            }
        }

        // Check for duplicates
        if (newsletter.some((entry: any) => entry.email === email)) {
            return NextResponse.json(
                { error: 'You are already subscribed!' },
                { status: 409 }
            );
        }

        // Add new entry
        const newEntry = {
            email,
            date: new Date().toISOString()
        };

        newsletter.push(newEntry);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(newsletter, null, 2));

        return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
