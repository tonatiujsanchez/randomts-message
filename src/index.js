const messages = [
    'Brandon',
    'Santiago',
    'Nataly',
    'Tonatiuj',
    'Anna',
    'Lonidas',
    'Fernando',
    'Juan',
    'Carlos',
    'Arturo',
    'Enrique',
    'Yesica',
    'Nicolas',
    'Oscar',
    'Diego',
    'Laura'
];




const randomMsg = () =>{
    const message = messages[ Math.floor( Math.random() * messages.length ) ];
    console.log( message );
}



module.exports = { randomMsg };