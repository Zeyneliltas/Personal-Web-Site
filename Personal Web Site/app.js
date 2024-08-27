const themeIcon = document.querySelector("#theme");

themeIcon.onclick= ()=>{
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains("dark-theme")){
        themeIcon.classList = "fa-solid fa-star fa-2x"
    }else{
        themeIcon.classList =  "fa-solid fa-sun fa-2x"
    }
}

