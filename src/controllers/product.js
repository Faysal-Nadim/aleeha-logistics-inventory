const fetch = require("node-fetch");
const TJO = require("translate-json-object")();

exports.getProductByURL = async (req, res, next) => {
  const productURL = req.body.url;
  const url = "http://api.tmapi.top/1688/v2/item_detail_by_url";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      apiToken: `${process.env.APITOKEN}`,
    },
    body: JSON.stringify({
      url: productURL,
    }),
  });
  const product = await response.json();

  if (product.code !== 200) {
    return res.status(product.code).json(product);
  } else {
    TJO.init({
      googleApiKey: `${process.env.GOOGLE_API_KEY}`,
    });

    TJO.translate(product.data, "en")
      .then(function (data) {
        return res.status(200).json(data);
      })
      .catch(function (err) {
        console.log("error ", err);
      });
  }
};

exports.getProductByID = async (req, res) => {
  const productID = req.body.id;
  const url = `http://api.tmapi.top/1688/v2/item_detail?item_id=${productID}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      apiToken: `${process.env.APITOKEN}`,
    },
  });
  const product = await response.json();

  if (product.code !== 200) {
    return res.status(product.code).json(product);
  } else {
    TJO.init({
      googleApiKey: `${process.env.GOOGLE_API_KEY}`,
    });

    TJO.translate(product.data, "en")
      .then(function (data) {
        return res.status(200).json(data);
      })
      .catch(function (err) {
        console.log("error ", err);
      });
  }
};

exports.getProductDescription = async (req, res) => {
  const productID = req.body.id;
  const url = `http://api.tmapi.top/1688/item_desc?item_id=${productID}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      apiToken: `${process.env.APITOKEN}`,
    },
  });
  const product = await response.json();
  TJO.init({
    googleApiKey: `${process.env.GOOGLE_API_KEY}`,
  });

  TJO.translate(product.data, "en")
    .then(function (data) {
      return res.status(200).json(data);
    })
    .catch(function (err) {
      console.log("error ", err);
    });
};
