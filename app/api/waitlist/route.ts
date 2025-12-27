
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email } = data;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        const filePath = path.join(process.cwd(), 'waitlist.json');

        let waitlist = [];


        // Check if file exists and read it
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                waitlist = JSON.parse(fileContent);
            } catch (e) {
                // If file is empty or invalid JSON, start with empty array
                waitlist = [];
            }
        }

        // Check for duplicates
        if (waitlist.some((entry: any) => entry.email === email)) {
            return NextResponse.json(
                { error: 'You are already on the waitlist!' },
                { status: 409 }
            );
        }

        // Add new entry
        const newEntry = {
            name,
            email,
            date: new Date().toISOString()
        };

        waitlist.push(newEntry);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2));

        return NextResponse.json({ success: true, message: 'Added to waitlist' });
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
