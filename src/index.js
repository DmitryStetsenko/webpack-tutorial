import './index.html';
import './index.scss';

import img from './img/img2.jpg';

import { mult, summ } from './modules/calc';

const imgWrap = document.querySelector('.img-wrap');
const imageEl = new Image();

imageEl.src = img;
imgWrap.append(imageEl);

console.log(mult(2, 4));
console.log(summ(5, 6));

