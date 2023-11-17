const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (password.value === '' || email.value === '') {
    return alert('All fields must be filled!');
  }
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log(dataForm);
  loginForm.reset();
}
