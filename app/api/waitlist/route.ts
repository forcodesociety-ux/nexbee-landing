import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

        // Insert into Supabase
        const { error } = await supabase
            .from('waitlist')
            .insert([{ name, email }]);

        if (error) {
            // Check for unique violation (code 23505 in Postgres)
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: 'You are already on the waitlist!' },
                    { status: 409 }
                );
            }
            throw error;
        }

        return NextResponse.json({ success: true, message: 'Added to waitlist' });
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
