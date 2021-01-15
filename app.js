const keypress = require ('keypress');
const io       = require ('socket.io-client');


const socket = io ('http://localhost:3000'); // replace with arduino server ip

keypress (process.stdin);

process.stdin.on ('keypress', (ch, key) =>
{

    if (['left', 'right', 'up', 'down'].includes (key.name))
    {
       socket.emit ('eventName', `${key.name}\0`);
    }

    if (key && key.ctrl && key.name == 'c') 
    {
        process.exit (1);
    }
})



process.stdin.setRawMode (true);