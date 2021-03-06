document.addEventListener('DOMContentLoaded', () => {

  var span = document.createElement('span');
  // check if username already created
  if (localStorage.getItem('username')) {
      span.innerHTML = 'Welcome ' + localStorage.getItem('username');
      document.querySelector('#welcome').append(span);
    }


  // By default, submit button is disabled
  document.querySelector('#submit').disabled = true;

  // Enable button only if there is text in the input field
  document.querySelector('#name').onkeyup = () => {
      if (document.querySelector('#name').value.length > 0)
          document.querySelector('#submit').disabled = false;
      else
          document.querySelector('#submit').disabled = true;
  };

  document.querySelector('#username').onsubmit = () => {

      // Show welcome text
      username = document.querySelector('#name').value;
      span.innerHTML = 'Welcome ' + username;
      localStorage.setItem('username', username);

      // Add text to div tag
      document.querySelector('#welcome').append(span);

      // alert user of new login.
      alert('Logged in as ' + username);

      // Clear input field and disable button again
      document.querySelector('#name').value = '';
      document.querySelector('#submit').disabled = true;

      // Stop form from submitting
      return false;
    };

});
