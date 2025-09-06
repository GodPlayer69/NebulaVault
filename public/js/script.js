// Aç / Kapa
document.getElementById('loginBtn').onclick = () => openForm('loginForm');
document.getElementById('registerBtn').onclick = () => openForm('registerForm');
document.getElementById('usersBtn').onclick = () => adminCheck();

function openForm(id) { document.getElementById(id).style.display = 'block'; }
function closeForm(id) { document.getElementById(id).style.display = 'none'; }

// Login
document.getElementById('loginSubmit').onclick = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const result = await res.json();
    document.getElementById('loginMessage').textContent = result.message;
}

// Register
document.getElementById('registerSubmit').onclick = async () => {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const result = await res.json();
    document.getElementById('regMessage').textContent = result.message;
}

// Admin check (Users)
async function adminCheck() {
    const pass = prompt('Enter admin password:');
    if(pass === '1234'){
        const response = await fetch('/users');
        const users = await response.json();
        const ul = document.getElementById('userList');
        ul.innerHTML = '';
        users.forEach(u => {
            const li = document.createElement('li');
            li.textContent = `ID: ${u.id} - Username: ${u.username}`;
            ul.appendChild(li);
        });
        openForm('usersList');
    } else {
        alert('Incorrect password!');
    }
}

function openForm(id) {
    const form = document.getElementById(id);
    form.classList.add('show');
}
function closeForm(id) {
    const form = document.getElementById(id);
    form.classList.remove('show');
}
