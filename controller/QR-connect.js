const Generator = require("../model/QR-logic");

exports.getIndexPage = (req,res) => {
    res.render('index', {pageTitle: 'Home Page'});
}

exports.getViewPage = (req, res) => {
    res.render('view', {pageTitle: 'View QR'});
}

exports.getGeneratePage = (req, res) =>{
    const generator = new Generator('www.google.com');
    generator.generateQR((url) => {
        console.log(url);
        res.render('generate', { pageTitle: 'generate Page', imageUrl: url});
    });
}
