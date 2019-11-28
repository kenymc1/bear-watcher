import 'bootstrap';
import $ from 'jquery';
import '../styles/main.scss';

const bearData = [
  {
    image: 'img/Bear_0000_Layer-11.png',
    name: 'Pinky',
    id: '24',
    attempts: '6',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0001_Layer-10.png',
    name: 'Don',
    id: '24',
    attempts: '8',
    success: '8',
    times: '',
    total: '🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0002_Layer-9.png',
    name: 'Shelly',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟',
  },
  {
    image: 'img/Bear_0003_Layer-8.png',
    name: 'Ralph',
    id: '64',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0004_Layer-7.png',
    name: 'Blu',
    id: '11',
    attempts: '25',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0005_Layer-6.png',
    name: 'Biggie',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0006_Layer-5.png',
    name: 'Lil Kim',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0007_Layer-4.png',
    name: 'Rambo',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0008_Layer-3.png',
    name: 'Sky',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0009_Layer-2.png',
    name: 'India',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0010_Layer-1.png',
    name: 'Duke',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0000_Layer-11.png',
    name: 'Marshmallow',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0000_Layer-11.png',
    name: 'Ding Dong',
    id: '24',
    attempts: '12',
    success: '4',
    times: '',
    total: '🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟',
  },

];

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};


const printCards = (bearCard) => {
  let domString = '';
  for (let i = 0; i < bearCard.length; i += 1) {
    domString += `
    
    <div class="col-md-4 text-center">
            <div class="profile">
              <img src=${bearCard[i].image} class="bear">
              <h3 id="name" class="name">${bearCard[i].name}:</h3>
              <hr class="line">
              <h3 id="id" class="id">${bearCard[i].id}</h3>
              <hr>
              <h3 id="catch" class="catch">${bearCard[i].attempts}</h3>
              <hr>
              <h3 id="success" class="success">${bearCard[i].success}</h3>
              <hr>
              <h3 id="time" class="time">${bearCard[i].time}</h3>
              <hr>
              <h3 id="total" class="total">${bearCard[i].total}</h3>
            </div>
          </div>
          `;
  }
  printToDom(domString, 'card-place');
};
