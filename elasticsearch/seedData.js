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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rice_Bags.jpg"
    },
    {
        sku: "MILK-1L-002",
        name: "1L Full Cream Milk",
        description: "Organic farm fresh milk",
        category: "Dairy",
        storeId: "STORE002",
        price: 50.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Milk_glass.jpg"
    },
    {
        sku: "BREAD-WHT-003",
        name: "Whole Wheat Bread",
        description: "Fresh and soft whole wheat bread",
        category: "Bakery",
        storeId: "STORE003",
        price: 40.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Whole_wheat_bread_loaf.jpg"
    },
    {
        sku: "OIL-1L-004",
        name: "Sunflower Oil 1L",
        description: "Healthy cooking oil",
        category: "Grocery",
        storeId: "STORE004",
        price: 200.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Bottle_of_sunflower_oil.jpg"
    },
    {
        sku: "SUGAR-5KG-005",
        name: "5KG Sugar Pack",
        description: "Refined granulated sugar",
        category: "Grocery",
        storeId: "STORE005",
        price: 250.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/White_sugar_granules.jpg"
    },
    {
        sku: "TEA-500G-006",
        name: "500g Assam Tea",
        description: "Strong and refreshing tea leaves",
        category: "Beverages",
        storeId: "STORE001",
        price: 300.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Darjeeling_tea_leaves.jpg"
    },
    {
        sku: "COFFEE-200G-007",
        name: "200g Instant Coffee",
        description: "Rich aroma and flavor",
        category: "Beverages",
        storeId: "STORE002",
        price: 150.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        sku: "BISCUIT-300G-008",
        name: "300g Butter Biscuits",
        description: "Crunchy and delicious butter biscuits",
        category: "Snacks",
        storeId: "STORE003",
        price: 90.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Butter_biscuits.jpg"
    },
    {
        sku: "DETERGENT-1KG-009",
        name: "1KG Washing Powder",
        description: "Removes stains and keeps clothes fresh",
        category: "Household",
        storeId: "STORE004",
        price: 180.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Washing_powder.jpg"
    },
    {
        sku: "SHAMPOO-500ML-010",
        name: "500ML Herbal Shampoo",
        description: "Nourishing and sulfate-free shampoo",
        category: "Personal Care",
        storeId: "STORE005",
        price: 350.0,
        availableForDelivery: true,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Shampoo_bottles.jpg"
    }
];

const seedData = async () => {
    try {
        await client.indices.delete({ index: "products" }).catch(() => {});
        await client.indices.create({ index: "products", body: require("./mappings.json") });

        for (const product of products) {
            await client.index({
                index: "products",
                document: product
            });
        }

        await client.indices.refresh({ index: "products" });

        console.log("Elasticsearch product data seeded successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
};

seedData();
