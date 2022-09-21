let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');
let b13 = document.getElementById('b13');
let b14 = document.getElementById('b14');
let b15 = document.getElementById('b15');
let answer = document.getElementById('p1answer')

b11.addEventListener('click', function onClick() {
  answer.innerHTML = "Wrong";
})

b12.addEventListener('click', function onClick() {
  answer.innerHTML = "Wrong";
})

b13.addEventListener('click', function onClick() {
  answer.innerHTML = "Wrong";
})

b14.addEventListener('click', function onClick() {
  answer.innerHTML = "Wrong";
})

b15.addEventListener('click', function onClick() {
  answer.innerHTML = "Right! For this question, we try shortening both values to see which one results in 18. We see that shortening 4 to 3 results in 18. Therefore, the other value will be 4*7=28";
})

