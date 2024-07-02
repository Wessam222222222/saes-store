const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://your_username:your_password@cluster0.qoyhumj.mongodb.net/your_database_name?retryWrites=true&w=majority";

async function main() {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        // Insert operation example
        const database = client.db("your_database_name");
        const collection = database.collection("ads");

        // Example insert
        await collection.insertOne({
            productName: "Car",
            productPrice: 5000,
            productLocation: "Muscat"
        });

        console.log("Inserted a document into the collection.");

        // Find operation example
        const findResult = await collection.find({ productLocation: "Muscat" }).toArray();
        console.log("Found documents:", findResult);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
