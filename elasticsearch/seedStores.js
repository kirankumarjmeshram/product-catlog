const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://localhost:9200" });

const stores = [
    {
        storeId: "STORE001",
        name: "Downtown Market",
        location: "New York, NY"
    },
    {
        storeId: "STORE002",
        name: "Suburban Grocery",
        location: "Los Angeles, CA"
    },
    {
        storeId: "STORE003",
        name: "City Center Mall",
        location: "Chicago, IL"
    },
    {
        storeId: "STORE004",
        name: "Organic Store",
        location: "San Francisco, CA"
    },
    {
        storeId: "STORE005",
        name: "SuperMart",
        location: "Houston, TX"
    }
];

async function seedStores() {
    try {
        // Delete index if exists
        await client.indices.delete({ index: "stores" }).catch(() => {});

        // Create new index
        await client.indices.create({
            index: "stores",
            body: {
                mappings: {
                    properties: {
                        storeId: { type: "keyword" },
                        name: { type: "text" },
                        location: { type: "text" }
                    }
                }
            }
        });

        // Insert data
        const body = stores.flatMap(doc => [{ index: { _index: "stores" } }, doc]);
        await client.bulk({ refresh: true, body });

        console.log("Stores seeded successfully!");
    } catch (error) {
        console.error("Error seeding stores:", error);
    }
}

seedStores();
