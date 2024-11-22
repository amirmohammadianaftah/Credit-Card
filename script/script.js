const inp = document.querySelectorAll('.white>.cardnumber>input')
const holder = document.querySelector('.white>.holder>input')
const date = document.querySelectorAll('.white>.datecvv2>.date>input')
const cvv2 = document.querySelector('.white>.datecvv2>.cvv2>input')
const li = document.querySelectorAll('.card>.cardnumberpurple>ul>li')
const purpleholder = document.querySelector('#holder')
const expires = document.querySelector('#expires')
const span = document.querySelectorAll('#expires>span')
console.log(span[0]);
const card = document.querySelector('.card')
const securityBack = document.querySelector('.security>div')
const security = document.querySelector('.security')
const back = document.querySelector('.back')
const cardnumberpurple = document.querySelector('.cardnumberpurple')
const cardholderpurple = document.querySelector('.cardholderpurple')
const cardexpirespurple = document.querySelector('.cardexpirespurple')
const img = document.querySelectorAll('.card>img')
console.log(img);


// console.log(monthdatedate);
// const monthdate = date[0]
// console.log(date);

// console.log(inp);

inp.forEach((val, i) => {
    val.addEventListener('input', (e) => {
        val.value = val.value.slice(0, 4)
        if (val.value.length == 4) {
            if (i != 3) {
                val.nextElementSibling.focus()
            } else {
                holder.focus()
            }
        }
        if (e.target.value.search(/[a-z]/) >= 0 || e.target.value.search(/[A-Z]/) >= 0) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        }
        li[0].innerHTML = inp[0].value
        li[1].innerHTML = inp[1].value
        li[2].innerHTML = inp[2].value
        li[3].innerHTML = inp[3].value
    })
})

date[0].addEventListener('input', (e) => {
    if (e.target.value.search(/[a-z]/) >= 0 || e.target.value.search(/[A-Z]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
    date[0].value = date[0].value.slice(0, 2)
    console.log(date[0]);
    span[0].innerHTML = date[0].value
    if (date[0].value.length == 2) {
        date[1].focus()
    }
})

date[1].addEventListener('input', (e) => {
    if (e.target.value.search(/[a-z]/) >= 0 || e.target.value.search(/[A-Z]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
    date[1].value = date[1].value.slice(0, 4)
    span[1].innerHTML = date[1].value
    if (date[1].value.length == 4) {
        cvv2.focus()
    }
})

holder.addEventListener('input', (e) => {
    holder.value = holder.value.slice(0, 24)
    purpleholder.innerHTML = holder.value
    if (e.target.value.search(/[0-9]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
})

cvv2.addEventListener('input', (e) => {
    if (cvv2.value.length > 4) {
        cvv2.value = cvv2.value.slice(0, 4)
        back.style.opacity = '0'
        securityBack.style.opacity = '0'
        security.style.opacity = '0'
        cardnumberpurple.style.opacity = '1'
        cardholderpurple.style.opacity = '1'
        cardexpirespurple.style.opacity = '1'
        img[0].style.opacity = '1'
        img[1].style.opacity = '1'
        card.style.transform = 'perspective(850px)rotateY(0deg)translateX(-200px)'
    }
    securityBack.innerHTML = cvv2.value
    if (e.target.value.search(/[a-z]/) >= 0 || e.target.value.search(/[A-Z]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
})

cvv2.addEventListener('focus', () => {
    card.style.transform = 'perspective(850px)rotateY(180deg)translateX(200px)'
    back.style.opacity = '1'
    securityBack.style.opacity = '1'
    security.style.opacity = '1'
    cardnumberpurple.style.opacity = '0'
    cardholderpurple.style.opacity = '0'
    cardexpirespurple.style.opacity = '0'
    img[0].style.opacity = '0'
    img[1].style.opacity = '0'
})