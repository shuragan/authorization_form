document.addEventListener('DOMContentLoaded', function() {
    // Переключение на форму восстановления пароля
    document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
        e.preventDefault();
        toggleAuthSection('reset');
    });

    // Переключение на форму авторизации
    document.getElementById('backToLoginLink').addEventListener('click', function(e) {
        e.preventDefault();
        toggleAuthSection('login');
    });

    // Обработка формы авторизации
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'tmt@mail.ru' && password === 'tmt') {
            showPopup('Авторизация успешна');
        } else {
            showPopup('Неверный логин или пароль');
        }
    });

    // Обработка формы восстановления пароля
    document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const resetEmail = document.getElementById('resetEmail').value;

        if (resetEmail === 'tmt@mail.ru') {
            showPopup('Код отправлен');
        } else {
            showPopup('E-mail не найден');
        }
    });

    // Закрытие поп-ап окна
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Функция для отображения поп-ап окна
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

// Функция для переключения между экранами
function toggleAuthSection(section) {
    const loginSection = document.getElementById('loginSection');
    const resetSection = document.getElementById('resetSection');

    if (section === 'reset') {
        loginSection.style.display = 'none';
        resetSection.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        resetSection.style.display = 'none';
    }
}
