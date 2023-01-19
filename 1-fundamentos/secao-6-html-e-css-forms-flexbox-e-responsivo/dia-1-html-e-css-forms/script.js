window.onload = function () {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userArea = document.getElementById('why');


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

  const validate = new JustValidate(
    '#form', 
    {
      errorFieldCssClass: 'is-invalid',
      errorFieldStyle: {
        border: '1px solid red',
      },
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: 'red',
        textDecoration: 'underlined',
      },
      focusInvalidField: true,
      lockForm: true,
      tooltip: {
        position: 'top',
      },
    },
  );


const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#why', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

}