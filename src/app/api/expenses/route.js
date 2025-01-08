
import clientPromise from "@/lib/databases/mongoDb";

// GET all tasks
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('daily_expenses_monitoring_db');
        // Get Current User Email
        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");
        if (!email) {
            return new Response(JSON.stringify({ message: "Unauthorize User" }), { status: 403 });
        }

        // Today Date
        const dateOb = new Date();
        const date = `${(String(dateOb.getDate()).padStart(2, "0"))}/${(String(dateOb.getMonth() + 1).padStart(2, "0"))}/${dateOb.getFullYear()}`;
        const allData = await db.collection('daily_expenses').find({ email }).toArray();
        const myDate = date;
        // Get Today Date in Number
        const [day, month, year] = myDate.split("/");

        const dayNumber = parseInt(day, 10);
        const monthNumber = parseInt(month, 10);
        const yearNumber = parseInt(year);
        const thisMonthData = new Array()
        allData.map(exp => {
            // Export Data in Number
            const [day, month, year] = exp.date.split("/");
            if (parseInt(month) === monthNumber && parseInt(year) === yearNumber) {
                // If this data is this month 
                return thisMonthData.push(exp);
            }
        })
        // Divide to daily basis
        const groupedData = thisMonthData.reduce((acc, item) => {
            // Check if the date already exists in the accumulator
            const existingGroup = acc.find(group => group.date === item.date);

            if (existingGroup) {
                // If the date exists, push the item to its details array
                existingGroup.details.push(item);
            } else {
                // If the date does not exist, create a new group for it
                acc.push({
                    date: item.date,
                    details: [item]
                });
            }

            return acc;
        }, []);


        return new Response(JSON.stringify(groupedData), { status: 200 });
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