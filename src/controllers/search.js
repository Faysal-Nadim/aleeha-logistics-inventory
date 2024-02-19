const fetch = require("node-fetch");
const TJO = require("translate-json-object")();

exports.getProductsByKeyword = async (req, res) => {
  const { page, keyword } = req.query;
  const url = `http://api.tmapi.top/1688/search/items?page=${page}&keyword=${keyword}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      apiToken: `${process.env.APITOKEN}`,
    },
  });
  const products = await response.json();
  TJO.init({
    googleApiKey: `${process.env.GOOGLE_API_KEY}`,
  });

  TJO.translate(products.data, "en")
    .then(function (data) {
      return res.status(200).json(data);
    })
    .catch(function (err) {
      console.log("error ", err);
    });
};
