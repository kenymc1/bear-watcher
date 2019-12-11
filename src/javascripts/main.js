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
    times: '6:30pm',
    total: '🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0001_Layer-10.png',
    name: 'Don',
    id: '24',
    attempts: '8',
    success: '8',
    times: '4:21pm',
    total: '🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0002_Layer-9.png',
    name: 'Shelly',
    id: '24',
    attempts: '12',
    success: '4',
    times: '5:45pm',
    total: '🐟🐟🐟',
  },
  {
    image: 'img/Bear_0003_Layer-8.png',
    name: 'Ralph',
    id: '64',
    attempts: '12',
    success: '4',
    times: '4:15pm',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0004_Layer-7.png',
    name: 'Blu',
    id: '11',
    attempts: '25',
    success: '4',
    times: '11:13am',
    total: '🐟🐟🐟🐟🐟',
  },
  {
    image: 'img/Bear_0005_Layer-6.png',
    name: 'Biggie',
    id: '24',
    attempts: '12',
    success: '4',
    times: '12:52pm',
    total: '🐟🐟🐟🐟🐟🐟🐟',
  },

];


const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};


const printCards = () => {
  let domString = '';
  for (let i = 0; i < bearData.length; i += 1) {
    domString += `
    
    <div class="col-md-4 text-center">
            <div class="profile">
              <img src=${bearData[i].image} class="bear">
              <h3 id="name" class="name"> <h5>Name:</h5> ${bearData[i].name}</h3>
              <hr class="line">
              <h3 id="id" class="id"><h5>Id: </h5> ${bearData[i].id}</h3>
              <hr>
              <h3 id="catch" class="catch"> <h5>Attempts: </h5> ${bearData[i].attempts}</h3>
              <hr>
              <h3 id="success" class="success"> <h5>Success: </h5> ${bearData[i].success}</h3>
              <hr>
              <h3 id="time" class="time"> <h5>Time:</h5> ${bearData[i].times}</h3>
              <hr>
              <h3 id="total" class="total"> <h5>Total: </h5> ${bearData[i].total}</h3>
            </div>
          </div>
          `;
  }
  printToDom(domString, 'card-place');
};
$('#card-place').append(printCards(bearData));

// $(document).ready(() => {
//   $('div#form1').append(
//   // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
//     $('<form/>', {
//       action: '#',
//       method: '#',
//     }).append(
//       // Create <form> Tag and Appending in HTML Div form1.
//       $('<input/>', {
//         type: 'text',
//         id: 'name',
//         name: 'name',
//         placeholder: 'Bear Name',
//       }), // Creating Input Element With Attribute.
//       $('<input/>', {
//         type: 'text',
//         id: 'id',
//         name: 'id',
//         placeholder: 'Id',
//       }),
//       $('<input/>', {
//         type: 'text',
//         id: 'attempts',
//         name: 'attempts',
//         placeholder: 'Attempts',
//       }),
//       $('<input/>', {
//         type: 'text',
//         id: 'success',
//         name: 'success',
//         placeholder: 'Success',
//       }),
//       $('<input/>', {
//         type: 'text',
//         id: 'time',
//         name: 'time',
//         placeholder: 'Time',
//       }),
//       $('<input/>', {
//         type: 'text',
//         id: 'total',
//         name: 'total',
//         placeholder: 'Total',
//       }),
//       $('<br/>'), $('<input/>', {
//         type: 'submit',
//         id: 'submit',
//         value: 'Submit',
//       }),
//     ),
//   );
// });

$('button').click((event) => {
  event.preventDefault();
  // const input = bearData.get();
  // const inputVal = $('input').val();
  bearData.push({
    image: 'img/Bear_0010_Layer-1.png',
    name: $('#name').val(),
    id: $('#id').val(),
    attempts: $('#attempts').val(),
    success: $('#success').val(),
    times: $('#time').val(),
    total: $('#total').val(),
  });

  printCards();
  // const name = $('#name').val();
  // const id = $('#id').val();
  // const attempts = $('#attempts').val();
  // const success = $('#success').val();
  // const time = $('#time').val();
  // const total = $('#total').val();

  // $('#preview').html(name);
  // $('#preview-2').html(id);
  // $('#preview-3').html(attempts);
  // $('#preview-4').html(success);
  // $('#preview-5').html(time);
  // $('#preview-6').html(total);
});
