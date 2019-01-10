import 'helper-4'; // Base directory resolution to '.helpers/'
import { someFunction as someFun } from 'helper-3';

var hello = 1,
  how = 2,
  are = 3;


function grizzlyBear() {
  someFun('Sending a parcel. Print me plzzz.');
  console.log('I\'m Grrrizzly Bear!');
}

function grilledSandwich() {
  console.log('I\'m Grilled Sandwich!');
}

function honeySyrup() {
  console.log('I\'m Honey syrup!');
}