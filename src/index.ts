import {Animals} from './zoo/classes/Zoo';
import {urlToObj} from './parser/parser';

const lion = new Animals('Lion', 'roar');
lion.speak("I'm a lion");

const tiger = new Animals('Tiger', 'grr');
tiger.speak('Lions suck');

const objPrint = urlToObj(
  '/:version/api/:collection/:id',
  '/6/api/listings/3?sort=desc&limit=10'
);
console.log(objPrint);
