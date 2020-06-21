'use strict';

function getVal() {
  const input = $('.js-input').val();
  console.log(input);
  return input;
}

function getBreedVal() {
  const breedInput = $('.breed-input').val();
  console.log(breedInput);
  return breedInput;
}

function getDogImage() {
  const input = getVal();
  const breedInput = getBreedVal();
  
  // https://dog.ceo/api/breeds/image/random/3

  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random/${input}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return showString(generateString(responseJson.message));
    })
    .catch(error => alert('We do not have that breed, try another breed name'));
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
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  
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
$(getDogImage)