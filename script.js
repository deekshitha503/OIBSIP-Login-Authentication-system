    const users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" }
    ];
    document.getElementById("login").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            showSecuredPage();
        } else {
            alert("Invalid username or password");
        }
    });

    document.getElementById("register").addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        if (users.some(user => user.username === newUsername)) {
            alert("Username already exists. Please choose a different one.");
        } else {
            users.push({ username: newUsername, password: newPassword });
            alert("Registration successful! You can now login with your new account.");
            showLoginForm();
        }
    });

    document.getElementById("registerLink").addEventListener("click", function(event) {
        event.preventDefault();
        showRegisterForm();
    });

    document.getElementById("loginLink").addEventListener("click", function(event) {
        event.preventDefault();
        showLoginForm();
    });

    function showSecuredPage() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("securedPage").style.display = "block";
    }

    function showLoginForm() {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("securedPage").style.display = "none";
    }

    function showRegisterForm() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
        document.getElementById("securedPage").style.display = "none";
    }

    function logout() {
        showLoginForm();
    }
