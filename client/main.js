$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote() {
    let url = 'http://localhost:3000/quote';
    $.get(url, (data) => {
      $('#quote').append(`<h3>${data}</h3>`);
    });
  }

  function addQuote(quote){
    let url = 'http://localhost:3000/addQuote';
    $.post(url, quote, (res) => {
      console.log('Res obj', res);
    });

  }
});
