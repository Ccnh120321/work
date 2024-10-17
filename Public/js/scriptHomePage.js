function showInfo() {
    const infoDiv = document.querySelector('.information');
    const button = document.querySelector('.show-info-button');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
        button.style.display = 'none';
    }
}

const displayNameTH = localStorage.getItem('displayNameTH');
const displayNameEN = localStorage.getItem('displayNameEN');
const type = localStorage.getItem('type');
const username = localStorage.getItem('username');
const faculty = localStorage.getItem('faculty');
const organization = localStorage.getItem('organization');
const department = localStorage.getItem('department');
const email = localStorage.getItem('email');
const statusid = localStorage.getItem('statusid');
const StatusEmp = localStorage.getItem('StatusEmp');
const tu_status = localStorage.getItem('tu_status');
const StatusWork = localStorage.getItem('StatusWork');
if (displayNameTH == null) {
    document.getElementById('nameTH').innerText = 'Who are you !!!'
    } else {
    document.getElementById('nameTH').innerText = `${displayNameTH}`;
    document.getElementById('nameEN').innerText = `${displayNameEN}`;
    document.getElementById('type').innerText = `${type}`;
    document.getElementById('UID').innerText = `${username}`;
    document.getElementById('department').innerText = `${department}`;
    document.getElementById('email').innerText = `${email}`;
        if (`${type}` == 'student') {
            document.getElementById('faculty').innerText = `${faculty}`;
            document.getElementById('statusid').innerText = `${statusid}`;
            document.getElementById('tu_status').innerText = `${tu_status}`;
            } else {
            document.getElementById('faculty').innerText = `${organization}`;
            document.getElementById('statusid').innerText = `${StatusEmp}`;
            document.getElementById('tu_status').innerText = `${StatusWork}`;
            }
    }
function logout() {
    localStorage.removeItem('displayNameTH');
    localStorage.removeItem('displayNameEN');
    localStorage.removeItem('type');
    localStorage.removeItem('username');
    localStorage.removeItem('faculty');
    localStorage.removeItem('organization');
    localStorage.removeItem('department');
    localStorage.removeItem('email');
    localStorage.removeItem('statusid');
    localStorage.removeItem('StatusEmp');
    localStorage.removeItem('tu_status');
    localStorage.removeItem('StatusWork');
    window.location.href = 'index.html';
}

function createNewRequest() {
    alert('This feature is not yet available.');
}

function viewRequestHistory() {
    alert('This feature is not yet available.');
}