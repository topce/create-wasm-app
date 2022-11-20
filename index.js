import * as wasm from 'cirilica';

document.title = wasm.to_serbian_cyrillic('ana voli milovana');

document.getElementById('prepisi').onclick = function () {
  myFunction();
};

function myFunction(ev) {
  document.getElementById('cirilica').value = wasm.to_serbian_cyrillic(document.getElementById('latinica').value);
  
}
