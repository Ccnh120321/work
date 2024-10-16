async function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TUb5c859bda848fcc3d38a278f225fd511194f421143a7f8e68cc0f6b0f24d5b63b751026686b0034767cf7a86ed7d0804',
            },
            body: JSON.stringify({"UserName": username, "PassWord": password})
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('displayNameTH', data.displayname_th);
            localStorage.setItem('displayNameEN', data.displayname_en);
            localStorage.setItem('type', data.type);
            localStorage.setItem('username', data.username);
            localStorage.setItem('faculty', data.faculty);
            localStorage.setItem('organization', data.organization);
            localStorage.setItem('department', data.department);
            localStorage.setItem('email', data.email);
            localStorage.setItem('statusid', data.statusid);
            localStorage.setItem('StatusEmp', data.StatusEmp);
            localStorage.setItem('tu_status', data.tu_status);
            localStorage.setItem('StatusWork', data.StatusWork);
            window.location.href = 'HomePage.html';
        } else {
            document.getElementById('message').innerText = 'Login failed. Please check your username and password.';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
}

async function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TUb5c859bda848fcc3d38a278f225fd511194f421143a7f8e68cc0f6b0f24d5b63b751026686b0034767cf7a86ed7d0804',
            },
            body: JSON.stringify({"UserName": username, "PassWord": password})
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('message').innerText = 'คุณควรจะกดอีกปุ่มนะไม่ใช่ปุ่มนี้';
            document.getElementById('message2').innerText = data.displayname_th + '!!!';
        } else {
            document.getElementById('message').innerText = 'Login failed. Please check your username and password.';
            document.getElementById('message2').innerText = null;
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
}
