import clientPromise from "@/lib/databases/mongoDb";

// GET the last task
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');

        // Get Current User Email
        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");
        if (!email) {
            return new Response(JSON.stringify({ message: "Unauthorized User" }), { status: 403 });
        }

        // Fetch the last document that matches the query
        const task = await db.collection('expenses_limit')
            .find({ email }) // Filter by email
            .sort({ _id: -1 }) // Sort by _id in descending order
            .limit(1) // Limit to the last document
            .toArray(); // Convert the cursor to an array

        // If no document is found, return an appropriate message
        if (task.length === 0) {
            return new Response(JSON.stringify({ message: "No data found" }), { status: 404 });
        }

        // Return the found document
        return new Response(JSON.stringify(task[0]), { status: 200 });
    } catch (error) {
        // Handle any errors
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}



// POST: Create a new task
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        const body = await request.json();
        const setLimit = await db.collection('expenses_limit').insertOne(body);
        return new Response(JSON.stringify(setLimit), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}