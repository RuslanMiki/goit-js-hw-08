import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('input', throttle(input, 500));
refs.form.addEventListener('submit', onSubmit);

fillInputs();

function input() {
    const data = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    localStorage.setItem('feedback-from-state');
}

function fillInputs() {
    const savedInfo = localStorage.getItem('feedback-from-state');

    if (savedInfo) {
        refs.input.value = JSON.parse(savedInfo).email;
        refs.textarea.value = JSON.parse(savedInfo).message;

    }
}
