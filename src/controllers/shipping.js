const fetch = require("node-fetch");

exports.getShippingRates = async (req, res) => {
  const url = `https://edge.ali2bd.com/api/public/v1/products/shipping-categories?type=moveon&country=CN`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const shipping = await response.json();
  return res.status(200).json(shipping);
};
