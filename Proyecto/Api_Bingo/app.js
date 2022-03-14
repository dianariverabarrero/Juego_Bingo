const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

const mongo_uri = 'mongodb://dev:dev@localhost/bingo';

mongoose.connect(mongo_uri, function(err) {
    if (err) {
        throw err;
    } else {
        console.log('DB Conectada: ' + this.mongo_uri);
    }
});

app.post('/registro', (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });

    user.save(err => {
        if (err) {
            res.status(500).send('ERROR AL REGISTRAR USUARIO!')
        } else {
            res.status(200).send('USUARIO CREADO!')
        }
    })

});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).send('ERROR AL AUTENTICAR EL USUARIO!')
        } else if (!user) {
            res.status(500).send('USUARIO NO EXISTE.')
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send('ERROR AL AUTENTICAR.')
                } else if (result) {
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE!.')
                } else {
                    res.status(500).send('USUARIO Y CONTRASEÑA INCORRECTA!')
                }
            })
        }
    });


});

/*
mongoose.connect('mongodb://dev:dev@localhost:27017/bingo', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexión a la BD exitosa...');
});

connection.on('error', (err) => {
    console.log('Error en la conexión a la BD: ', err);
});
*/
//modelo
//const Todo = mongoose.model('Todo', { text: String, completed: Boolean });

/*
app.get('/getall', (req, res) => {
    Todo.find({}, 'text completed')
        .then(doc => {
            res.json({ response: 'success', data: doc });
        })
        .catch(err => {
            console.log('Error al consultar elementos...', err.message);
            res.status(400).json({ response: 'failed' });
        });
});
*/




/*
app.get('/complete/:id/:status', (req, res) => {

    const id = req.params.id;
    const status = req.params.status == 'true'; // convertir a boleano

    Todo.findByIdAndUpdate({ _id: id }, { $set: { completed: status } })
        .then(doc => {
            res.json({ response: 'success' });
        })
        .catch(err => {
            console.log('Error al actualizar dato ', err.message);
            res.status(400).json({ response: 'failed' });
        });

});
*/
/*
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete({ _id: id })
        .then(doc => {
            //res.json({response: 'success'});
            res.redirect('/');
        })
        .catch(err => {
            console.log('Error al eliminar dato ', err.message);
            res.status(400).json({ response: 'failed' });
        });
});
*/
app.listen(3000, () => {
    console.log('Inicio de Servidor Exitoso!');
});