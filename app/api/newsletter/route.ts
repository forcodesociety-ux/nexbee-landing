import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

        // Insert into Supabase
        const { error } = await supabase
            .from('newsletter')
            .insert([{ email }]);

        if (error) {
            // Check for unique violation (code 23505 in Postgres)
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: 'You are already subscribed!' },
                    { status: 409 }
                );
            }
            throw error;
        }

        return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
