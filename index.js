const userInfo = require('./information.js');
console.log(userInfo);


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je m'appelle ${userInfo.nom} et j'étudie à ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));
