'use strict';

function getVal() {
  const input = $('.js-input').val();
  console.log(input);
  return input;
}
function getDogImage() {
  const input = getVal();
  // https://dog.ceo/api/breeds/image/random/3
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return showString(generateString(responseJson.message));
    });
}

function generateString(message) {
  let string = '';
  message.forEach(item => string += `<li><img src = "${item}"/> </li>`);
  console.log(string);
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