const User = require('./schema/schemaUser')
let nome = document.getElementById('firstName');
let text = nome.value;

async function bola() {
    const database = require('../db');

    try {
        // const resultado = await database.sync();
        // // console.log(resultado);
        const resultadoCreate = await User.create({
            firstName: 'Mouse',
            lastName: 'Mickey',
            participation: 10,
        })
        console.log(resultadoCreate);


        // const user = await User.findAll();
        // console.log(user);

        // const user = await User.findByPk(1);
        // //console.log(produto);
        // user.firstName = "Mouse Top";

        // const resultadoSave = await user.save();
        // console.log(resultadoSave);

        // //assim
        // User.destroy({ where: { id: 1 }});
        
        // //ou assim
        // const user = await User.findByPk(1);
        // user.destroy();

    } catch (error) {
        console.log(error);
    }
};

bola()