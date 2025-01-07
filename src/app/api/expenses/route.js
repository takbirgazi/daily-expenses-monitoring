
import clientPromise from "@/lib/databases/mongoDb";

// GET all tasks
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        const dateOb = new Date();
        const date = `${(String(dateOb.getDate()).padStart(2, "0"))}/${(String(dateOb.getMonth() + 1).padStart(2, "0"))}/${dateOb.getFullYear()}`;

        const tasks = await db.collection('daily_expenses').find({ date }).toArray();
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

        const task = await db.collection('daily_expenses').insertOne(body);
        return new Response(JSON.stringify(task), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}