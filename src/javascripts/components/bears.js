import utilities from './helpers/utilities';

const bears = [];

const submitButton = document.getElementById('submit');

const goFish = () => Math.random() >= 0.5;


const attemptToCatch = (e) => {
  console.log('attempt to catch running');
  const id = e.target.id.split('-a')[0];
  const timeStamp = new Date();
  const time = `${(timeStamp.getMonth() + 1)}/${timeStamp.getDate()}/${timeStamp.getFullYear()} ${timeStamp.getHours()}:${timeStamp.getMinutes()}`;
  for (let i = 0; i < bears.length; i += 1) {
    if (id === bears[i].id) {
      bears[i].attemptTimestamp.push(time);
      if (goFish()) {
        bears[i].successfulCatch += 1;
        bears[i].successTimestamp.push(time);
      }
    }
  }
  // eslint-disable-next-line no-use-before-define
  cardPrinter();
  console.log(id);
  const success = document.getElementById(`${id}-success`);
  success.innerHTML = '';
};

const showSuccess = (e) => {
  console.log('success running');
  const id = `${e.target.id.split.split('-s')[0]}`;

  // eslint-disable-next-line no-use-before-define
  cardPrinter();
  const attempts = document.getElementById(`${id}-tries`);
  attempts.innerHTML = '';
};

const attemptEvents = () => {
  const attemptButton = document.getElementsByClassName('attempt-button');
  for (let i = 0; i < attemptButton.length; i += 1) {
    attemptButton[i].addEventListener('click', attemptToCatch);
  }
};

const successEvents = () => {
  const successButton = document.getElementsByClassName('success-button');
  for (let i = 0; i < successButton.length; i += 1) {
    successButton[i].addEventListener('click', showSuccess);
  }
};

const addAllEvents = () => {
  attemptEvents();
  successEvents();
};

const cardPrinter = () => {
  let stringDom = '';
  for (let i = 0; i < bears.length; i += 1) {
    stringDom += `<div id="${bears[i].id}" class="card container col-md-4" style="width: 25rem;">
      <img src="${bears[i].picture}" class="card-img-top img-fluid" alt="location" style="width: 23rem; height: 18rem">
      <div class="card-body card text-center">
        <h5 class="card-title">${bears[i].name}</h5>
        <small class="form-text">${bears[i].id}</small>
        <button id="${bears[i].id}-a" type="button" class="btn btn btn-outline-warning attempt-button">Attempts</button>
        <button id="${bears[i].id}-s" type="button" class="btn btn-outline-success success-button">Fish Caught</button>
        <div id='${bears[i].id}-tries' class='card-text'><b> Time of attempted catch:</b>`;
    const attempts = bears[i].attemptTimestamp;
    for (let k = 0; k < attempts.length; k += 1) {
      stringDom += `<div>${attempts[k]}</div>\n`;
    }
    stringDom += '</div>';
    stringDom += `<div id=${bears[i].id}-success' class='card-text'><b> Time of successful catch:</b>`;
    const success = bears[i].successTimestamp;
    for (let j = 0; j < success.length; j += 1) {
      stringDom += `<div>${success[j]}</div>\n`;
    }
    stringDom += '</div>';
    stringDom += `<div id=''${bears[i].id}-caught' class='card-text'><b>Number of successful catches:</b> ${bears[i].successfulCatch}</div>
      </div>
    </div>`;
  }
  utilities.printToDom('showInfo', stringDom);

  document.getElementById('inputName').value = '';
  document.getElementById('inputId').value = '';
  document.getElementById('inputPic').value = '';

  addAllEvents();
};

function BearObj(id, name, picture) {
  this.id = id;
  this.name = name;
  this.picture = picture;
  this.attemptTimestamp = [];
  this.successTimestamp = [];
  this.successfulCatch = 0;
}

const addBearFunc = () => {
  const newName = document.getElementById('inputName').value;
  const newId = document.getElementById('inputId').value;
  const newPic = document.getElementById('inputPic').value;
  const testBear = new BearObj(newId, newName, newPic);
  bears.push(testBear);
};

const submitFunc = () => {
  submitButton.addEventListener('click', () => {
    addBearFunc();
    cardPrinter();
    // attachSuccessEvents();
    // SomethingEvents();
  });
};


export default { submitFunc };
