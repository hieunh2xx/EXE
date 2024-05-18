document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const userDropdown = document.getElementById('userDropdown');
    const usernameSpan = document.getElementById('username');
    const logoutButton = document.getElementById('logout');
    const loginNavLink = document.querySelector('.login');
    const registerNavLink = document.querySelector('.register');

    const checkLoggedIn = () => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            usernameSpan.textContent = loggedInUser;
            userDropdown.classList.remove('d-none');
            loginNavLink.classList.add('d-none');
            registerNavLink.classList.add('d-none');
        } else {
            userDropdown.classList.add('d-none');
            loginNavLink.classList.remove('d-none');
            registerNavLink.classList.remove('d-none');
        }
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', email);
            alert('Đăng nhập thành công!');
            checkLoggedIn();
            new bootstrap.Modal(document.getElementById('loginModal')).hide();
        } else {
            alert('Email hoặc mật khẩu không chính xác.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('Email đã được sử dụng.');
        } else {
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Đăng ký thành công!');
            new bootstrap.Modal(document.getElementById('registerModal')).hide();
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('Đã đăng xuất.');
        checkLoggedIn();
    });

    checkLoggedIn();
});
document.addEventListener('DOMContentLoaded', function() {
    var serviceList = document.getElementById('service-list');

    serviceList.addEventListener('click', function(event) {
        event.preventDefault();
        var clickedItem = event.target.closest('li');
        if (clickedItem) {
            var serviceId = clickedItem.id + '-content';
            var serviceContent = document.getElementById(serviceId);
            var allServiceContent = document.querySelectorAll('.service-content');
            allServiceContent.forEach(function(content) {
                content.style.display = 'none';
            });

            if (serviceContent) {
                serviceContent.style.display = 'block';
            }
        }
    });
});
