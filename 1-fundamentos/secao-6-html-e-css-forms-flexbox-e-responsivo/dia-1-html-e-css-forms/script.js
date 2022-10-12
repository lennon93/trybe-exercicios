window.onload = function () {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userArea = document.getElementById('why');

    if (userName.value.length < 10 || userName.value.length > 40) {
        alert('Dados inválidos');
    } else if (userEmail.value.length < 10 || userEmail.value.length > 50) {
        alert('Dados inválidos');
    } else if (userArea.value.length > 500) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }

  })

  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', function (event) {
   const inputAll = document.getElementsByTagName('input');
   const textArea = document.getElementsByTagName('textarea'); 
   for (let index = 0; index < inputAll.length; index += 1) {
    const element = inputAll[index];
    element.value = '';
    element.checked = false;
   }
   textArea.value = '';
   event.preventDefault();
  })


}