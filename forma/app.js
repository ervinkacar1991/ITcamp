const userValue = 'admin'
const passValue = 'admin'

document.querySelector('#login').onsubmit = function (e) {
    e.preventDefault()
    varUsername = document.getElementById("user").value;
    varPassword = document.getElementById("pass").value;
    if (varUsername === userValue && varPassword === passValue) {
        document.getElementById("user").value = ''
        document.getElementById("pass").value = ''
        location.replace('home.html')
    } else {
        document.getElementById("user").value = ''
        document.getElementById("pass").value = ''
        alert('Neispravna sifra')
    }
}

