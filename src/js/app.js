function supportAlert(){
    alert("Está função sera adicionada em breve!!!")
}
function onMobileMenu(){
    const onMobileIcons = document.querySelector(".mobileIcons")
    onMobileIcons.classList.remove('hidden')

const closeButton = document.querySelector(".closeButton")
closeButton.classList.remove('hidden')
}
function exitMobileMenu(){
    const exitMobileMenu = document.querySelector(".mobileIcons")
    exitMobileMenu.classList.add('hidden')

    const exitCloseButton = document.querySelector(".closeButton")
    exitCloseButton.classList.add('hidden')
}
