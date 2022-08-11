let menu = require('../data/menu.json');

module.exports = {
    home: (req,res) =>{
        
        return res.render('index',{menu})
    },
    menu: (req,res) =>{
        return res.render('detalleMenu')
    },
    detalle: (req,res) =>{
        let id = +req.params.id          // en let id guardamos el identificar, el id que pasamos por router.get.. :id (que puede ser variable) -- esto llega en string de .json, lo necesitamos en number "+"
        
        let plato = menu.find(plato => plato.id === id)


        return res.render('detalleMenu',{plato})
    },
}