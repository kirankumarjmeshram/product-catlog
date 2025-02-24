const client = require("../config/elasticClient");

exports.getStores = async (req, res) => {
    try {
        const response = await client.search({
            index: "stores",
            size: 50,
            query: { match_all: {} }
        });
        
        const stores = response.hits?.hits?.map(hit => hit._source) || [];
        res.json(stores);
    } catch (error) {
        console.error("Error fetching stores:", error);
        res.status(500).json({ message: error.message });
    }
};

