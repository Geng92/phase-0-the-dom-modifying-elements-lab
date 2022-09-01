// Write your code here!
const maindelete = document.querySelector('main');
maindelete.remove();

let newHeader = document.createElement('h1');

newHeader.setAttribute('id',"victory");

newHeader.textContent = 'Geng is the champion';

document.append(newHeader);



//let newHeader = document.getElementById( "victory");
//document.body.innerHTML = "<h1>YOUR-NAME is the champion</h1>";