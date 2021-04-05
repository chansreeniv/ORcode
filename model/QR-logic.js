module.exports = class Generator {
    constructor(identifier){
        this.identifier = identifier;
    }

    generateQR(cb){
        let QR = require('qrcode');
        QR.toDataURL(this.identifier,(err, url) => {
            cb(url);
        });
    }

    // app.use("/", (req, res) => {
//   var QRCode = require("qrcode");

//   QRCode.toDataURL("www.google.com", function (err, url) {
//     console.log(url);
//     res.render("index", { pageTitle: "Home Page", qrsrc: url });
//   });
}