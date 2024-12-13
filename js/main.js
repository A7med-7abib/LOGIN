var email_input = document.getElementById('email');
var password_input = document.getElementById('password');
var name_input = document.getElementById('name');

function getUsers() {
    var users = localStorage.getItem('user_details');
    return users ? JSON.parse(users) : [];
}

function save(users) {
    localStorage.setItem('user_details', JSON.stringify(users));
}

function register() {
    let email = email_input.value.trim();
    let password = password_input.value.trim();
    let name = name_input ? name_input.value.trim() : "";

    if (!email || !password || !name) {
        document.getElementById('reg').innerHTML = "All inputs are required.";
        return;
    }

  

    let users = getUsers();
    if (users.find(user => user.email === email)) {
        document.getElementById('reg').innerHTML = "Email already registered.";
        return;
    }

    let person = { email, password, name };
    users.push(person);
    save(users);

    document.getElementById('reg1').innerHTML = " success.";
    clear();
    window.location.href = "index.html";
}

function login() {
    const email = email_input.value.trim();
    const password = password_input.value.trim();

    if (!email || !password) {
        document.getElementById('demo').innerHTML = "All inputs are required";
        return;
    }

    let users = getUsers();
    let user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        document.getElementById('demo').innerHTML = "Incorrect email or password.";
        return;
    }

    document.getElementById('nameIN').innerHTML = user.name;
    window.location.href = "smart-login.html";
    clear();
}

function logout() {

    window.location.href = "index.html";
}

function clear() {
 
    email_input.value = "";
    password_input.value = "";
    name_input.value = "";
}