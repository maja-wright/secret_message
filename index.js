const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('p').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const textarea = document.querySelector('#message-textarea');
    const encrypted = btoa(textarea.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    // automaticly select url so user can copy it
    linkInput.select();
});