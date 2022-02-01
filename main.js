let darkMode = localStorage.getItem('darkMode'); 
const  darkModeToggle = document.querySelector("#toogle-dark");

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
  }

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');


    localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener('click', () => {
    console.log(darkModeToggle)
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
      console.log(darkMode)
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });