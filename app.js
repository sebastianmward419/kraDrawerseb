let keypress = require ('keypress');
let io       = require ('socket.io-client');


const socket = io ('10.0.0.22');

keypress (process.stdin);

process.stdin.on ('keypress', (ch, key) =>
{
    if (key && key.ctrl && key.name == 'c') 
    {
   
        if (['left, right', 'up', 'down'].includes (key.name))
        {
            
        }
        process.stdin.pause ();
    }
})



process.stdin.setRawMode (true);
process.stdin.resume();