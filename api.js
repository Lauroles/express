
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.
var express = require('express');
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = 3000;

// Nous créons un objet de type Express.
var app = express();

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes.
var myRouter = express.Router();

// Je vous rappelle notre route (/ressources).
myRouter.route('/ressources')

// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
    .get(function(req,res){
        res.json({message : "Liste toutes les ressources de Lille Métropole", methode : req.method});
    })
    //POST
    .post(function(req,res){
        res.json({message : "Ajoute une nouvelle ressource à la liste", methode : req.method});
    })
    //PUT
    .put(function(req,res){
        res.json({message : "Mise à jour des informations d'une ressource dans la liste", methode : req.method});
    })
    //DELETE
    .delete(function(req,res){
        res.json({message : "Suppression d'une ressource dans la liste", methode : req.method});
    });

myRouter.route('/')
// all permet de prendre en charge toutes les méthodes.
    .all(function(req,res){
        res.json({message : "Bienvenue sur notre Frugal API ", methode : req.method});
    });



myRouter.route('/ressources/:ressource_id').get(function(req,res){
        res.json({message : "Vous souhaitez accéder aux informations de la ressource n°" + req.params.ressource_id});
    })
    .put(function(req,res){
        res.json({message : "Vous souhaitez modifier les informations de la ressource n°" + req.params.ressource_id});
    })
    .delete(function(req,res){
        res.json({message : "Vous souhaitez supprimer la ressource n°" + req.params.ressource_id});
    });

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example', host, port);
});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect();

connection.query('SELECT 1+1 as solution', function (err, rows, fields) {
    if(err) throw err;
    console.log('The solution is: ', rows[0].solution);
});