const client = require("../config/elasticClient");

exports.getStores = async (req, res) => {
    try {
        const { body } = await client.search({
            index: "stores",
            size: 50,
            query: { match_all: {} }
        });
        res.json(body.hits.hits.map(hit => hit._source));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
