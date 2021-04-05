const Generator = require("../model/QR-logic");

exports.getIndexPage = (req,res) => {
    res.render('index', {pageTitle: 'Home Page'});
}

exports.getViewPage = (req, res) => {
    res.render('view', {pageTitle: 'View QR'});
}

// exports.getGeneratePage = (req, res) =>{
//     const generator = new Generator('www.google.com');
//     generator.generateQR((url) => {
//         console.log(url);
//         res.render('generate', { pageTitle: 'generate Page', imageUrl: url});
//     });
// }

exports.postGenerateQR = (req, res) => {
    const qrId = req.body.qrString;
    console.log(qrId);
    const generator = new Generator(qrId); //qrstring 
    generator.generateQR((url) => {
        console.log(url);
        res.render('generate', {pageTitle: 'generate Page', imageUrl: url});
    })
    // res.redirect('/generate');
}
