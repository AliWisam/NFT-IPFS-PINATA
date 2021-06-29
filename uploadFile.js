const pinataApiKey = "16efb9533273a56df558";
const pinataSecretApiKey = "c4e840a9fd3c7d7b07b9c6cf3f50d04f268c8c0368231f980880cf3f44992027";

const axios = require("axios");
const fs = require("fs");

const FormData = require("form-data");

const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("./pic.png"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });
  console.log(res.data);
};
pinFileToIPFS();