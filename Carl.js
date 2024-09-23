const pal ={
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    service:(req, res) =>{
        res.render('service');
    }
    ,
    ty:(req, res) =>{
        res.render('ty');
    }
};

module.exports =pal;