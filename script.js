let span = document.querySelector('.menu_btn > span')
let menu =  document.querySelector('.promo_header__menu.menu_box')

function showMenu () {
    // Show menu
    if (span.classList.contains('closed')) {
        span.classList.remove('closed')
        span.classList.add('open')
        menu.style.visibility = 'visible'
        menu.style.right = '0px'
    } else { //hide menu if already opened
        span.classList.remove('open')
        span.classList.add('closed')
        menu.style.visibility = 'hidden'
        menu.style.right = '-100%'
    }
}

//hide menu after clicking a menu item 
span.addEventListener('click', function (event) {
    if (event.target.matches('.promo_header__menu.menu_box > li > a')) showMenu()
}, false);
//hide menu after clicking on X
span.addEventListener('click', function (event) {
    if (event.target.matches('.menu_btn > span')) showMenu()
}, true);
//hide menu when clicking outside  
span.addEventListener('click', function (event) {
    if (!event.target.matches('.promo_header__menu.menu_box')) showMenu()
}, true);

//scroll smoothly to the chosen section
document.querySelectorAll('.promo_header__menu.menu_box > li > a').forEach(link => {
    const anchor = link.getAttribute("href")
    const section = document.querySelector(anchor)
    link.addEventListener('click', event => {
        event.preventDefault()
        section.scrollIntoView({block: "center", behavior: "smooth"})
    })
})

// show loader
form1.onsubmit = async (e) => {
    e.preventDefault();
    
    let loader = document.getElementById('loader')
    let buttonText = document.getElementById('buttonText')
    buttonText.style.display = 'none'
    loader.style.display = 'block'

    setTimeout (showModal, 2000)
}

function showModal() {	
    let nameValue =  document.getElementById('name').value
    let dateValue = document.getElementById('date').value
    let timeValue = document.getElementById('time').value
    let background = document.body
    let overlay = document.getElementById('overlay')

    // Compose personalized booking message
    document.querySelector('.modal-text').innerHTML = `${nameValue}, a table has been booked for you for ${dateValue}.<br>We will be waiting for you by ${timeValue}.<br> A reminder will be sent to the specified mail an hour before the chosen time.`
    // Show modal itself
    let modal = document.querySelector('#bookingModal')
    modal.style.display = 'flex'
    // Unable scroll and set background opacity
    background.style.overflow = 'hidden'
    overlay.style.display = 'block'
    document.getElementById('Reservations').style.opacity = ('0.4')
    setModalCoords()
}

function setModalCoords() {
    let modal = document.querySelector('#bookingModal')
    let width = window.innerWidth
    let height = window.innerHeight

    modal.style.left = (width - modal.offsetWidth)/2 + 'px'
    modal.style.top = (height - modal.offsetHeight)/2 + 'px'
}

window.addEventListener("resize", setModalCoords);

function hideModal(){
    let modal = document.querySelector('#bookingModal')
    modal.style.display = 'none'

    document.body.style.overflow = 'auto'
    document.getElementById('Reservations').style.opacity = '1'
    let overlay = document.getElementById('overlay')
    overlay.style.display = 'none'

    let loader = document.getElementById('loader')
    let buttonText = document.getElementById('buttonText')
    buttonText.style.display = 'block'
    loader.style.display = 'none'
}