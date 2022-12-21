'use strict';

const Btn = document.querySelector('.button')
const Nav = document.querySelector('.nav')
const NavItem = document.querySelectorAll('.navItem')
const Line = document.querySelectorAll('.line')
//NavItemとLineは同じclassが複数の要素についているので
//querySelectorAllで取得→NodeList(配列)で格納される

//NavItemとLineをそのまま使ってもエラーになるのでfor文で中の要素を取り出す
for (let spanLine of Line) {
    Btn.addEventListener('click', function () {
        Nav.classList.toggle('active')
        Btn.classList.toggle('active')
        spanLine.classList.toggle('active')
    })
}

for (let item of NavItem) {
    item.addEventListener('click', function () {
        Nav.classList.remove('active')
        Btn.classList.remove('active')
    })
}