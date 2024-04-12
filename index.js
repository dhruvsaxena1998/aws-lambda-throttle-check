const axios = require("axios");

const url = "https://5zkqi58ifg.execute-api.us-east-1.amazonaws.com/dev/api/v1";

const times = Array.from({ length: 30 }).fill(true);

const promises = times.map(() => axios.get(url));

const main = async () => {
  const results = await Promise.allSettled(promises);
  const output = results.map(r => {
    return r.status
  })
  console.log(output);
};

main();
