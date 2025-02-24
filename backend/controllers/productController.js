exports.getProducts = async (req, res) => {
    try {
      const storeId = req.params.storeId;
      const { body } = await client.search({
        index: "products",
        size: 100,
        query: { match: { storeId } },
      });
      res.json(body.hits.hits.map(hit => hit._source));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };