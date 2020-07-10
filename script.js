//DOM - document object model
// document - это весь наш документ html
// console.log(document);
// document.querySelector('selector') - подключается к элементу html через селектор и возвращает его в виде объекта

// console.log(document.querySelector('.s'));
let s = document.querySelector('.s'),//подключаемся к секундной стрелке
   m = document.querySelector('.m'),//подключаемся к минутной стрелке
   h = document.querySelector('.h'),//подключаемся к часовой стрелке
   hoursBox = document.querySelector('.hours'),
   minBox = document.querySelector('.minutes');

function clock() {
   //new Date() - возвращает объект к текущей датой на устройстве
   let time = new Date();
   // console.log(time);
   //.getSeconds() - получает секунды
   //.getMinutes() - получает минуты
   //.getHours() - получает часы
   let secDeg = time.getSeconds() * 6,
      minDeg = time.getMinutes() * 6,
      hourDeg = time.getHours() * 30;
   //htmlEl.style - добавляет css стили к этому элементу в html
   // console.log(s.style);
   s.style = `transform: rotate(${secDeg}deg)`;
   m.style = `transform: rotate(${minDeg}deg)`;
   h.style = `transform: rotate(${hourDeg}deg)`;

   //htmlEl.innerHTML = заменяет все html содержимое этого элемента
   hoursBox.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
   minBox.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
   setTimeout(clock, 1000); //вызовет функцию clock через 1000миллисекунд
}
clock();

//рекурсия - это когда функция вызывает саму себя внутри своего тела функции
// let i = 1;
// function time() {
//    console.log(i);
//    if(i < 100){
//       i++;
//       time();
//    }
// }
// time();
// document.querySelectorAll('selector'); - выбирает все элементы по селектору и возвращает массив из них
let links = document.querySelectorAll('.tabsItem'),
   tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
   //elem.addEventListener('событие', функция которая сработает при событии)
   //click - событие нажатия на левую кноаку мыши
   links[i].addEventListener('click', function (e) {
      // console.log('click');
      //event
      //e - отдает нам все информацию о событии
      // console.log(e);
      // e.preventDefault(); - отменяет событие по умолчанию в html
      e.preventDefault();
      //пробегаюсь по всем ссылкам и у всех удаляю класс active
      for (let j = 0; j < links.length; j++) {
         //elem.classList - возвращает список классов эл.
         //elem.classList.add('class') - добавляет класс к элементу
         //elem.classList.remove('class') - удаляет класс у элемента
         links[j].classList.remove('active');
         tabs[j].classList.remove('active');
      }
      this.classList.add('active');
      tabs[i].classList.add('active');
   })
}
// console.log(links);

//================================Секундомер===============================//
const watchBtn = document.querySelector('.stopwatch__btn'),
   secondsWatch = document.querySelector('.stopwatch__seconds'),
   minutesWatch = document.querySelector('.minutes'),
   hoursWatch = document.querySelector('.stopwatch__hours'),
   infoSpan = document.querySelector('.tabsLink__span');
watchBtn.addEventListener('click', function(){
   if(this.innerHTML == 'start'){
      this.innerHTML = 'stop';
      infoSpan.classList.add('active');
      let sec = 0;
      setTimeout(stopWatch, 1000, this, sec);
   }
   else if(this.innerHTML == 'stop'){
      this.innerHTML = 'clear';
      infoSpan.classList.remove('active');
      infoSpan.classList.add('active_clear');
   }
   else{
      this.innerHTML = 'start';
      infoSpan.classList.remove('active_clear');
      secondsWatch.innerHTML = 0;
      minutesWatch.innerHTML = 0;
      hoursWatch.innerHTML = 0;
   }
})
function stopWatch(btn, sec){
   if(btn.innerHTML == 'stop'){
      if(sec == 59){
         sec = 0;
         secondsWatch.innerHTML = sec;
         if(minutesWatch.innerHTML == 59){
            minutesWatch.innerHTML = 0;
            hoursWatch.innerHTML++;
         }
         else minutesWatch.innerHTML++;
      }
      else{
         sec++;
         secondsWatch.innerHTML = sec;
      }
      setTimeout(stopWatch, 1000, btn, sec);
   }
}
