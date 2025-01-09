import clientPromise from '@/lib/databases/mongoDb';

// GET a tasks
export async function GET(request, { params }) {
    try {
        const { email } = await params;
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        const tasks = await db.collection('users').findOne({ email });
        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}