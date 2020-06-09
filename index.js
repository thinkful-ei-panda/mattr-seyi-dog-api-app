'use strict';

function getVal() {
  const input = $('.js-input');
  return input;
}
function getDogImage() {
  const input = getVal();
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson.message);
      return showString(generateString(responseJson.message));
    });
}

function generateString(message) {
  let string = '';
  message.forEach(item => string += `<li><img src = "${item}</img></li>`);
  return string;
}

function showString(string) {
  $('ul').html(string);
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('.js-form').submit(event => {
    event.preventDefault();
    // console.log($("#input-selection").val())
    getDogImage();
  });
}

$(watchForm);