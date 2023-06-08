const btnOpenMenu = document.querySelector('.area__icon__open__sidebar')
const btnCloseMenu = document.querySelector('#icon__close__menu')
const leftSide = document.querySelector('.container .left__side')
const rightSide = document.querySelector('.container .right__side')
const areaLoad = document.querySelector('.container .right__side .area__load')
const barLoading = document.querySelector('.container .right__side .area__load .bar__loading')
const btnToggleTheme = document.querySelector('.area__icon__change__theme i')

setTimeout(() => {
    document.querySelector('.container .preload').style.display = 'none'
}, 400);

btnCloseMenu.addEventListener('click', () => {
    if(innerWidth > 672) {
        closeMenu()
    }else {
        closeMenuMobile()
    }
})

btnOpenMenu.addEventListener('click', () => {
    if(innerWidth < 672) {
        openMenuMobile()
    }else {
        openMenu()
    }
})

btnToggleTheme.addEventListener('click', () => {
    darkTheme()
})

const closeMenu = () => {
    leftSide.style.opacity = '0'
    rightSide.style.paddingLeft = '1.25rem'

    setTimeout(() => {
        leftSide.style.display = 'none'
    }, 100)
}

const openMenu = () => {
    leftSide.style.opacity = '0'
    leftSide.style.display = 'block'
    rightSide.style.paddingLeft = '32%'

    setTimeout(() => {
        leftSide.style.opacity = '1'
    }, 100)
}

const closeMenuMobile = () => {
    leftSide.style.opacity = '0'
    rightSide.style.paddingLeft = '1.25rem'

    setTimeout(() => {
        leftSide.style.display = 'none'
    }, 100)
}

const openMenuMobile = () => {
    rightSide.style.paddingLeft = '1.25rem'
    leftSide.style.opacity = '0'
    leftSide.style.width = '100%'
    leftSide.style.display = 'block'

    setTimeout(() => {
        leftSide.style.opacity = '1'
    }, 100)
}


const loadBar = () => {
    areaLoad.style.display = 'flex'

    let loadWidth = 5

    const interval = setInterval(() => {
        loadWidth += 10
        barLoading.style.width = `${loadWidth}%`
    }, 500)

    setTimeout(() => {
        barLoading.style.width = '5%'
        clearInterval(interval)
        areaLoad.style.display = 'none'
    }, 2000)
}

const verifyScreen = () => {
    if(innerWidth < 672) {
        leftSide.style.display = 'none'
    }
}

const darkTheme = () => {
    let classDarkTheme = 'dark__theme'
    let imgProjectPortfolio = document.querySelectorAll('.container .section__portfolio .area__content__portfolio .area__itens__portfolio .item__portfolio img')
    let shadowInfoProjectPortifolio = document.querySelectorAll('.container .section__portfolio .area__content__portfolio .area__itens__portfolio .item__portfolio .shadow__info')

    if(btnToggleTheme.classList.contains('ri-moon-line')) {
        btnToggleTheme.classList.replace('ri-moon-line', 'ri-sun-line')

        document.body.classList.add(classDarkTheme)

        document.querySelector('.container .left__side').style.backgroundColor = '#222'
        document.querySelector('.container .left__side').style.borderRight = '1px solid #333'

        imgProjectPortfolio.forEach(item => {
            item.style.border = '0'
        })

        shadowInfoProjectPortifolio.forEach(item => {
            item.style.backgroundColor = 'rgba(0,0,0,0.6)'
        })

    }else {
        btnToggleTheme.classList.replace('ri-sun-line', 'ri-moon-line')

        document.body.classList.remove(classDarkTheme)
        document.querySelector('.container .left__side').style.backgroundColor = '#fff'
        document.querySelector('.container .left__side').style.borderRight = '0'

        imgProjectPortfolio.forEach(item => {
            item.style.border = '1px solid #ccc'
        })
    }
}

window.addEventListener('resize', () => {
    if(innerWidth > 672) {
        leftSide.style.width = '30%'
        leftSide.style.opacity = '1'
        leftSide.style.display = 'block'

        rightSide.style.paddingLeft = '32%'

    }else {
        rightSide.style.paddingLeft = '1.25rem'
        leftSide.style.display = 'none'
    }
})

verifyScreen()