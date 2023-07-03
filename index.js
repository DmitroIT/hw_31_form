document.querySelector('#signup').addEventListener('submit', (e) => {
    e.preventDefault();

    const table = document.querySelector('table');
    const fullName = document.querySelector('#fullname').value;
    const birth = document.querySelector('#birth').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const location = document.querySelector('#location').value;
    const address = document.querySelector('#address').value;
    const languages = [];


    document.querySelectorAll('#language').forEach((checkbox) => {
        if (checkbox.checked) {
            languages.push(checkbox.value);
        }
    });


    const template = `
        <caption>полученные данные</caption>

        <tr>
            <th>fullname</th>
            <td>${fullName}</td>
        </tr>
        <tr>
            <th>birth</th>
            <td>${birth}</td>
        </tr>
        <tr>
            <th>gender</th>
            <td>${gender}</td>
        </tr>
        <tr>
            <th>location</th>
            <td>${location}</td>
        </tr>
        <tr>
            <th>address</th>
            <td>${address}</td>
        </tr>
        <tr>
            <th>language</th>
            <td>${languages}</td>
        </tr>
    `
    table.innerHTML = template;

    const signup = document.querySelector('#signup');
    const body = document.querySelector('body');

    signup.style.display = 'none';
    body.style.backgroundColor = 'rgb(85, 85, 85)'
})









