const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let newsletter = document.getElementById('checkboxnewsletter').value;
    let data = {
        name,
        email,
        newsletter,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead',convertData);

    let content = document.getElementById('content');

    alert('Email cadastrado com sucesso!');
});