const form = document.querySelector('form');
//this usecase gives empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    if (bmi < 18) {
      results.innerHTML = `<span>you are underWeight</span>`;
      results.innerHTML = `<span>${bmi}</span>`;
    }
  }
});
