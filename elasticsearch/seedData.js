const { Client } = require("@elastic/elasticsearch");
require("dotenv").config();

const client = new Client({ node: process.env.ELASTICSEARCH_URL || "http://localhost:9200" });

const products = [
    {
        sku: "RICE-26KG-001",
        name: "26KG Rice Bag",
        description: "Premium quality rice bag",
        category: "Grocery",
        storeId: "STORE001",
        price: 1200.0,
        availableForDelivery: true,
        imageUrl: "https://images.ctfassets.net/hrltx12pl8hq/6jfxPKUJjYFn56CBzUzvSL/64a8bd8f0ec405ac87f9d4a7076d2eeb/cute-character-3d-image-robot-600nw-2279309245.webp"
    },
    {
        sku: "MILK-1L-002",
        name: "1L Full Cream Milk",
        description: "Organic farm fresh milk",
        category: "Dairy",
        storeId: "STORE002",
        price: 50.0,
        availableForDelivery: true,
        imageUrl: "https://images.ctfassets.net/hrltx12pl8hq/64u8O1PmawkQuosJOgfIVj/c9a5863d615d4c065f6dac2438767c9a/mountains-during-sunset-beautiful-natural-260nw-407021107.webp"
    },
    {
        sku: "BREAD-WHT-003",
        name: "Whole Wheat Bread",
        description: "Fresh and soft whole wheat bread",
        category: "Bakery",
        storeId: "STORE003",
        price: 40.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "OIL-1L-004",
        name: "Sunflower Oil 1L",
        description: "Healthy cooking oil",
        category: "Grocery",
        storeId: "STORE004",
        price: 200.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "SUGAR-5KG-005",
        name: "5KG Sugar Pack",
        description: "Refined granulated sugar",
        category: "Grocery",
        storeId: "STORE005",
        price: 250.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "COFFEE-500G-006",
        name: "500g Premium Coffee",
        description: "Rich aroma and deep flavor",
        category: "Beverages",
        storeId: "STORE001",
        price: 450.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "TEA-250G-007",
        name: "250g Assam Tea",
        description: "Strong and refreshing tea leaves",
        category: "Beverages",
        storeId: "STORE002",
        price: 150.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "BUTTER-200G-008",
        name: "200g Unsalted Butter",
        description: "Creamy and smooth dairy butter",
        category: "Dairy",
        storeId: "STORE003",
        price: 100.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "HONEY-500G-009",
        name: "500g Pure Honey",
        description: "Raw and organic honey",
        category: "Grocery",
        storeId: "STORE004",
        price: 300.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "JUICE-1L-010",
        name: "1L Orange Juice",
        description: "Freshly squeezed orange juice",
        category: "Beverages",
        storeId: "STORE005",
        price: 120.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/glass-bottle-orange-juice-isolated-on-260nw-1501663535.jpg"
    },
    {
        sku: "EGGS-12-011",
        name: "12 Pack Eggs",
        description: "Farm fresh eggs",
        category: "Dairy",
        storeId: "STORE001",
        price: 90.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/cheddar-cheese-block-slices-isolated-on-260nw-1501663538.jpg"
    },
    {
        sku: "CHEESE-250G-012",
        name: "250g Cheddar Cheese",
        description: "Rich and creamy cheddar cheese",
        category: "Dairy",
        storeId: "STORE002",
        price: 200.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/cheddar-cheese-block-slices-isolated-on-260nw-1501663538.jpg"
    },
    {
        sku: "APPLE-1KG-013",
        name: "1KG Apples",
        description: "Fresh and juicy apples",
        category: "Fruits",
        storeId: "STORE003",
        price: 180.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/oranges-isolated-on-white-background-260nw-1501663541.jpg"
    },
    {
        sku: "BANANA-1KG-014",
        name: "1KG Bananas",
        description: "Sweet and ripe bananas",
        category: "Fruits",
        storeId: "STORE004",
        price: 60.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/oranges-isolated-on-white-background-260nw-1501663541.jpg"
    },
    {
        sku: "ORANGE-1KG-015",
        name: "1KG Oranges",
        description: "Citrus and tangy oranges",
        category: "Fruits",
        storeId: "STORE005",
        price: 150.0,
        availableForDelivery: true,
        imageUrl: "https://www.shutterstock.com/image-photo/oranges-isolated-on-white-background-260nw-1501663541.jpg"
   
    }]


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

const seedData = async () => {
    try {
        if (await client.indices.exists({ index: "products" })) {
            await client.indices.delete({ index: "products" });
        }
        await client.indices.create({ index: "products", body: require("./mappings.json") });
        for (const product of products) {
            await client.index({
                index: "products",
                document: product
            });
        }
        await client.indices.refresh({ index: "products" });
        console.log("Elasticsearch product data seeded successfully.");

        if (await client.indices.exists({ index: "stores" })) {
            await client.indices.delete({ index: "stores" });
        }
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
        const body = stores.flatMap(doc => [{ index: { _index: "stores" } }, doc]);
        await client.bulk({ refresh: true, body });
        console.log("Stores seeded successfully!");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
};

seedData();
