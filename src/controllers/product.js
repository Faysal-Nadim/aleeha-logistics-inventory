const fetch = require("node-fetch");
const TJO = require("translate-json-object")();

exports.getProductByURL = async (req, res, next) => {
  const url = "http://api.tmapi.top/1688/v2/item_detail_by_url";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      apiToken: `${process.env.APITOKEN}`,
    },
    body: JSON.stringify({
      url: "https://detail.1688.com/offer/601843431962.html",
    }),
  });
  const product = await response.json();
  TJO.init({
    googleApiKey: "AIzaSyAqZ3nFX-4AjkLS2IbDCsAMSQwPK4Jn3UY",
  });

  TJO.translate(product.data, "en")
    .then(function (data) {
      return res.status(200).json(data);
    })
    .catch(function (err) {
      console.log("error ", err);
    });
  //   const translatedData = await translation(data);
  //   if (translatedData !== null) {

  //   }
};
