

const firstName = document.querySelector('.field1').value;

const nameValue = document.querySelector('.name');

const Title = document.querySelector('.title');

const email = document.querySelector('.email');

const city = document.querySelector('.city');

const state = document.querySelector('.state');

var phone = document.querySelector('.phone');

var school = document.querySelector('.school');


var resume = document.querySelector('.resume');

var city2 = document.querySelector('.city2');

var degree = document.querySelector('.degree');

var from = document.querySelector('.from');

var company = document.querySelector('.company');

var city3 = document.querySelector('.city3')

const address = document.querySelector('.Address');

var from2 = document.querySelector('.fromTo');

var from22 = document.querySelector('.fromToTo');

document.querySelector('.field1').addEventListener('input', (e) => {
 nameValue.innerHTML = e.target.value;
})
document.querySelector('.field3').addEventListener('input', (e) => {
 email.innerHTML = e.target.value;
})

document.querySelector('.field4').addEventListener('input', (e) => {
city.innerHTML = e.target.value;
})

document.querySelector('.field6').addEventListener('input', (e) => {
  phone.innerHTML = e.target.value;
})


document.querySelector('.field7').addEventListener('input', (e) => {
 school.innerHTML = e.target.value;
})

document.querySelector('.field8').addEventListener('input', (e) => {
city2.innerHTML = e.target.value;
})


document.querySelector('.field10').addEventListener('input', (e) => {
 degree.innerHTML = e.target.value;
})

document.querySelector('.field11').addEventListener('input', (e) => {
  from.innerHTML = e.target.value;
})

document.querySelector('.field12').addEventListener('input', (e) => {
company.innerHTML = e.target.value;
})

document.querySelector('.field13').addEventListener('input', (e) => {
city3.innerHTML = e.target.value;
})

document.querySelector('.field14').addEventListener('input', (e) => {
 address.innerHTML = e.target.value;
})

document.querySelector('.field15').addEventListener('input', (e) => {
 from2.innerHTML = e.target.value;
})

document.querySelector('.field16').addEventListener('input', (e) => {
 from22.innerHTML = e.target.value;
})


/*GENERATE PDF FILE */











