const body = document.querySelector('body')
const div = document.querySelector('#div-container')
const list = document.querySelector('#list')
const button = document.querySelector('#button-pendiente')
const input = document.querySelector('input')

let colorScheme = 'dark'
const changeThemeBtn = document.createElement('button')

const addTask = () => {
    if (input.value === "") {
        alert('Este campo debe ser completado.')
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = '';
    }
}

button.addEventListener('click', addTask)






const colorSchemeButton = () => {
    changeThemeBtn.classList.add('change-theme')

    updateTheme();
    body.appendChild(changeThemeBtn)
    changeThemeBtn.addEventListener('click', changeColor)
}

function updateTheme() {
    if (colorScheme === 'dark') {
        body.style.backgroundColor = '#333'
        div.style.boxShadow = '0 0 55px #fff7'
        changeThemeBtn.innerHTML = '<i class="fa-solid fa-sun color-icon"></i>'
    } else {
        body.style.backgroundColor = '#e2e2e2'
        div.style.boxShadow = '0 0 55px #0007'
        changeThemeBtn.innerHTML = '<i class="fa-solid fa-moon color-icon"></i>'
    }
}
function changeColor() {
    colorScheme = (colorScheme === 'dark') ? 'light' : 'dark';
    updateTheme();
}


export default { colorSchemeButton }