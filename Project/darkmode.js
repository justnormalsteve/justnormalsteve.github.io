let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem('darkmode', null)
}

// Loads the theme that is already stored
if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    // If Else statement shortened
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}) 