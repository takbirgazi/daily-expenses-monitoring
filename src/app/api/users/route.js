
import clientPromise from "@/lib/databases/mongoDb";

// GET all tasks
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        const tasks = await db.collection('users').find({}).toArray();
        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}

// POST: Create a new task
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        const body = await request.json();

        const task = await db.collection('users').insertOne(body);
        console.log(task)
        return new Response(JSON.stringify(task), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}