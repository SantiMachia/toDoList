const body = document.querySelector('body')

let colorScheme = 'dark'
const changeThemeBtn = document.createElement('button')

const colorSchemeButton = () => {
    changeThemeBtn.classList.add('change-theme')

    updateTheme();
    body.appendChild(changeThemeBtn)
    changeThemeBtn.addEventListener('click', changeColor)
}

function updateTheme() {
    if (colorScheme === 'dark') {
        body.style.backgroundColor = '#333'
        changeThemeBtn.innerHTML = '<i class="fa-solid fa-sun color-icon"></i>'
    } else {
        body.style.backgroundColor = '#e2e2e2'
        changeThemeBtn.innerHTML = '<i class="fa-solid fa-moon color-icon"></i>'
    }
}
function changeColor() {
    colorScheme = (colorScheme === 'dark') ? 'light' : 'dark';
    updateTheme();
}


export default { colorSchemeButton }