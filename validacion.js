const button = document.getElementById('sendButton');

button.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const subject = document.getElementById('inputSubject').value;
    const message = document.getElementById('inputMessage').value;

    // Validaciones
    if (name === '') {
    }
    else if (email === '') {
    }
    else if (message === '') {
    }
    else if (name !== '' && email !== '' && message !== '') {
    }
    // to get encoded see: https://meyerweb.com/eric/tools/dencoder/
    window.location.href = `mailto:julianty100@gmail.com?subject=${subject}&body=Nombre%3A%20${name}
    %0ACorreo%3A%20${email}%0AAsunto%3A%20${subject}%0AMensaje%3A%20${message}`;
    // I need to implement a Netlify way to hide my email address
});