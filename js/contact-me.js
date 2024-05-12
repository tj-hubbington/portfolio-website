// Form Validation

let myForm = document.querySelector('form');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  let fullNameInput = myForm.querySelector('#full-name');
  let fullNameBox = fullNameInput.value;
  let fullNameErrorBox = myForm.querySelector('.name-error');
  fullNameErrorBox.innerHTML = '';
  fullNameInput.style.borderColor = 'black';
  if (fullNameBox.length === 0) {
    fullNameInput.style.borderColor = 'red';
    fullNameErrorBox.innerHTML = 'Please enter your name!'
  }

    if (fullNameBox.length > 0) {
        console.log(fullNameBox);
  }


  let emailInput = myForm.querySelector('#email');
  let emailBox = emailInput.value;
  let emailErrorBox = myForm.querySelector('.email-error');
  emailErrorBox.innerHTML = '';
  emailInput.style.borderColor = 'black';
  if (emailBox.length === 0) {
    emailInput.style.borderColor = 'red';
    emailErrorBox.innerHTML = 'Please enter your email!'
  }

  if (emailBox.length > 0) {
    console.log(emailBox);
}

  let commentInput = myForm.querySelector('#textarea');
  let commentBox = commentInput.value;
  let commentErrorBox = myForm.querySelector('.comment-error');
  commentErrorBox.innerHTML = '';
  commentInput.style.borderColor = 'black';
  if (commentBox.length === 0) {
    commentInput.style.borderColor = 'red';
    commentErrorBox.innerHTML = 'Please write something!'
  };

  if (commentBox.length > 0) {
    console.log(commentBox);
}
});