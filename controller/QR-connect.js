exports.getIndexPage = (req,res) => {
    res.render('index', {pageTitle: 'Home Page'});
}

exports.getViewPage = (req, res) => {
    res.render('view', {pageTitle: 'View QR'});
}

exports.getGeneratePage = (req, res) =>{
    res.render('generate', { pageTitle: 'generate Page'});
}