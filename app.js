var submit = document.getElementById('submit');
var container = document.getElementById('container');
var rating1 = document.getElementById('rating-1')
var rating2 = document.getElementById('rating-2')
var rating3 = document.getElementById('rating-3')
var rating4 = document.getElementById('rating-4')
var rating5 = document.getElementById('rating-5')
let rating = 0;

rating1.addEventListener('click',()=> {
    return rating = 1;
});
rating2.addEventListener('click',()=> {
    return rating = 2;
});
rating3.addEventListener('click',()=> {
    return rating = 3;
});
rating4.addEventListener('click',()=> {
    return rating = 4;
});
rating5.addEventListener('click',()=> {
    return rating = 5;
});

submit.addEventListener('click',()=> {
  if (rating === 0) {
    alert('Please Select a Rating');
  } else {
    container.innerHTML = 
    `
    <div id="thank-you">
      <img id="thank-you-image" src="./images/illustration-thank-you.svg" alt="">
      <h1 id="thank-you-h1">
        You selected ${rating} out of 5
      </h1>

      <h2 id="thank-you-h2">
        Thank you!
      </h2>

      <p id="thank-you-p">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>
    `
  }
});