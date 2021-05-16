const url = "https://192.168.0.100:8006/api2/json/nodes/appledore/qemu";

var token = require("./token.json");

var cookieSring = "PVEAuthCookie=" + token.data.ticket;

var postData = { //ref https://pve.proxmox.com/pve-docs/api-viewer/#/nodes/{node}/qemu for all options
  node: "appledore",
  vmid: "169",
  cores: 2,
  memory: 2048
};

const axios = require("axios");

// axios.get(url, {
//     headers: {
//         Cookie: cookieSring
//     }
// }).then(response => {
//       console.log(JSON.stringify(response.data));
// });

axios
  .post(url,postData, {
    headers: {
      Cookie: cookieSring,
      "CSRFPreventionToken" : token.data.CSRFPreventionToken
    },
  })
  .then((response) => {
    console.log(JSON.stringify(response.data));
  });
