const client = require("../config/elasticClient");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await client.search({
      index: "products",
      size: 100,
      query: { match_all: {} },
    });

    if (!result.hits || !result.hits.hits) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(result.hits.hits.map((hit) => hit._source));
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.getProductDetails = async (req, res) => {
    try {
        const { storeId, sku } = req.params;
        console.log("Searching for:", { storeId, sku });

        const result = await client.search({
            index: "products",
            query: {
                bool: {
                    must: [
                        { match: { "storeId": storeId } },  
                        { match: { "sku": sku } }          
                    ]
                }
            }
        });

        console.log("Elasticsearch Response:", JSON.stringify(result, null, 2));

        if (!result.hits || !result.hits.hits.length) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(result.hits.hits[0]._source);
    } catch (error) {
        console.error("Error fetching product details:", error);
        res.status(500).json({ message: error.message });
    }
};




exports.getProducts = async (req, res) => {
    try {
        const { storeId } = req.params;
        console.log("Searching for storeId:", storeId);

        const result = await client.search({
            index: "products",
            size: 100,
            query: {
                bool: {
                    should: [
                        { match: { "storeId": storeId } },
                        { term: { "storeId.keyword": storeId } }  
                    ],
                    minimum_should_match: 1
                }
            }
        });

        console.log("Elasticsearch Response:", JSON.stringify(result, null, 2));

        if (!result.hits || !result.hits.hits.length) {
            return res.status(404).json({ message: `No products found for store: ${storeId}` });
        }

        res.json(result.hits.hits.map(hit => hit._source));
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: error.message });
    }
};



