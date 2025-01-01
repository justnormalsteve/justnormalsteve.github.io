let purple = localStorage.getItem('purple')
const backgroundSwitch = document.getElementById('background-switch')

const enablePurple = () => {
    document.body.classList.add('purple')
    localStorage.setItem('purple', 'active')
}

const disablePurple = () => {
    document.body.classList.remove("purple")
    localStorage.setItem('purple', null)
}

// Loads the theme that is already stored
if(purple === "active") enablePurple()

backgroundSwitch.addEventListener("click", () => {
    purple = localStorage.getItem('purple')
    // If Else statement shortened
    purple !== "active" ? enablePurple() : disablePurple()
}) 