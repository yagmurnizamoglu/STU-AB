// const counters=document.querySelectorAll('.counter');
// const speed=200; 

// counters.forEach((counter) => {
//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const increment = target / speed;
//         if(count < target) {
//             counter.innerText = '${Math.ceil(count+increment)};
//             setTimeout(updateCounter, 1);
//         }
//         else{
//             counter.innerText = target;
//         }
//     };

//     updateCounter();
// });


// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;
// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

// var countOptions = {
//     useEasing: true,
//     separator: ''
//   }
  
//   var count = new CountUp('country', 0, 2016, 0, 5, countOptions)
  
//   // start the counting and give it a callback when done
//   count.start(function() {
//     $('h2').text('finished')
//   })

