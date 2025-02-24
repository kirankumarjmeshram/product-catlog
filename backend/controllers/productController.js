const client = require("../config/elasticClient");

exports.getProducts = async (req, res) => {
    try {
        const { storeId } = req.params;
        const { body } = await client.search({
            index: "products",
            size: 100,
            query: { term: { "storeId.keyword": storeId } }
        });
        res.json(body.hits.hits.map(hit => hit._source));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductDetails = async (req, res) => {
    try {
        const { storeId, sku } = req.params;
        const { body } = await client.search({
            index: "products",
            query: {
                bool: {
                    must: [
                        { term: { "storeId.keyword": storeId } },
                        { term: { "sku.keyword": sku } }
                    ]
                }
            }
        });
        res.json(body.hits.hits.map(hit => hit._source)[0] || {});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
