
let time = 2000; // общее время анимации
let step = 1; // шаг смены цифр
let counter = 1; // кол-во показа анимации, чтобы анимация не начиналась опять при скролле

window.addEventListener('scroll', function() {
 
let win = document.documentElement.clientHeight; // высота рабочей части окна браузера
let trigger = document.querySelector('.number-block'); // общий блок с цифрами для определения начала анимации
let triggerCoords = trigger.getBoundingClientRect(); // получаем координаты блока относительно окна

function outNum(num, elem){
  let rez = document.querySelector('#' + elem); // селектор блока с бегущими цифрами
  n = 0; // счетчик, устанавливаем в ноль
 
  let t = Math.round( time / (num/step) ); // t - кол-во милисекунд, за кот. происходит один шаг,(можно задать вручную) 
  let interval = setInterval( () => {
    n += step; // наращиваем счетчик 
    counter = counter + 2; // добавляем еденицу, чтобы анимация происходила только один раз не начиналась опять при скролле
    if( n >= num ){ // если счетчик превышает установленное значение
       clearInterval(interval); // прекращаем анимацию
       // n = num;
    }
    rez.innerHTML = n; // записываем значение в html
  }, t);
}

if( triggerCoords.top < win - 200 && counter < 2 ){ // если блок появляется в видимой области экрана и если не превышено кол-во показа анимации то запускаем нашу функцию для нужных блоков
  outNum(962, 'num0');
  outNum(798, 'num1'); 
}
  
});