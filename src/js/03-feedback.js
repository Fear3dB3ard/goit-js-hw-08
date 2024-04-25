import { throttle } from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Funcția pentru a salva datele în local storage la fiecare modificare
  const saveToLocalStorage = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  // Funcția pentru a completa câmpurile formularului cu datele din local storage
  const populateFormFields = () => {
    const savedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (savedFormData) {
      emailInput.value = savedFormData.email || '';
      messageInput.value = savedFormData.message || '';
    }
  };

  populateFormFields(); // Apelăm funcția la încărcarea paginii

  // Evenimentul de input pentru a salva datele la fiecare modificare
  form.addEventListener('input', saveToLocalStorage);

  // Evenimentul de submit pentru a șterge datele și a afișa obiectul în consolă
  form.addEventListener('submit', event => {
    event.preventDefault();
    const savedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    console.log(savedFormData);
    localStorage.removeItem('feedback-form-state');
    form.reset(); // Resetăm formularul după trimitere
  });
});
