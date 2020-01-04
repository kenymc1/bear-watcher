// import print from './helpers/utilities';


// const clearFunc = () => {
//   print.printToDom('showInfo', '');
// };


// const successfulCatch = (poop) => {
//   const timeStamp = new Date();
//   for (let i = 0; i < bear.bears.length; i += 1) {
//     if (poop === bear.bears[i].id) {
//       bear.bears[i].successfulCatch += 1;
//       bear.bears[i].attemptTimestamp.push(timeStamp);
//       bear.bears[i].successTimestamp.push(timeStamp);
//     }
//   }
// };


// const attachSuccessEvents = () => {
//   const successButton = document.getElementsByClassName('success-button');
//   for (let i = 0; i < successButton.length; i += 1) {
//     successButton[i].addEventListener('click', (event) => {
//       const successCounterChange = event.target.parentNode.parentNode.id;
//       successfulCatch(successCounterChange);
//       clearFunc();
//       cardPrinter();
//       attachSuccessEvents();
//       attachattemptedEvents();
//     });
//   }
// };

// const SomethingEvents = () => {
//   const attemptButton = document.getElementsByClassName('attempt-button');
//   for (let j = 0; j < attemptButton.length; j += 1) {
//     attemptButton[j].addEventListener('click', (event2) => {
//       const attemptCounterChange = event2.target.parentNode.parentNode.id;
//       attemptToCatch(attemptCounterChange);
//       clearFunc();
//       cardPrinter();
//       SomethingEvents();
//       attachSuccessEvents();
//     });
//   }
// };

// export default { submitFunc };
