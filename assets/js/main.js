const itensMenu = document.querySelectorAll('.onw__link')
const classActiveMenu = 'bg__link__active'
const titleItensSkills = document.querySelectorAll('.container .section__skills .area__content__skills .area__item .title__item')
const sectionMain = document.querySelector('.section__main')
const sectionAbout = document.querySelector('.section__about__me')
const sectionSkills = document.querySelector('.section__skills')
const sectionPortfolio = document.querySelector('.section__portfolio')

itensMenu.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()

        switch (item.getAttribute('data-id')) {
            case '1':

                item.classList.add(classActiveMenu)
                itensMenu[1].classList.remove(classActiveMenu)
                itensMenu[2].classList.remove(classActiveMenu)
                itensMenu[3].classList.remove(classActiveMenu)
                itensMenu[4].classList.remove(classActiveMenu)

                sectionMain.style.display = 'block'
                sectionAbout.style.display = 'none'
                sectionSkills.style.display = 'none'
                sectionPortfolio.style.display = 'none'
                break;
        
            case '2':
                loadBar()
                    
                item.classList.add(classActiveMenu)
                itensMenu[0].classList.remove(classActiveMenu)
                itensMenu[2].classList.remove(classActiveMenu)
                itensMenu[3].classList.remove(classActiveMenu)
                itensMenu[4].classList.remove(classActiveMenu)

                sectionMain.style.display = 'none'
                sectionSkills.style.display = 'none'
                sectionPortfolio.style.display = 'none'

                setTimeout(() => {
                    sectionAbout.style.display = 'block'
                }, 2000)

                break;
            
            case '3':
                loadBar()

                item.classList.add(classActiveMenu)
                itensMenu[0].classList.remove(classActiveMenu)
                itensMenu[1].classList.remove(classActiveMenu)
                itensMenu[3].classList.remove(classActiveMenu)
                itensMenu[4].classList.remove(classActiveMenu)
                
                sectionMain.style.display = 'none'
                sectionAbout.style.display = 'none'
                sectionPortfolio.style.display = 'none'

                setTimeout(() => {
                    sectionSkills.style.display = 'block'
                }, 2000)

                break;

            case '4':
                loadBar()

                item.classList.add(classActiveMenu)
                itensMenu[0].classList.remove(classActiveMenu)
                itensMenu[1].classList.remove(classActiveMenu)
                itensMenu[2].classList.remove(classActiveMenu)
                itensMenu[4].classList.remove(classActiveMenu)
                
                sectionMain.style.display = 'none'
                sectionAbout.style.display = 'none'
                sectionSkills.style.display = 'none'

                setTimeout(() => {
                    sectionPortfolio.style.display = 'block'
                }, 2000)
                
                break;

            case '5':
                item.classList.add(classActiveMenu)

                window.open('https://api.whatsapp.com/send?phone=5598996070979', '_blank')

                itensMenu[0].classList.remove(classActiveMenu)
                itensMenu[1].classList.remove(classActiveMenu)
                itensMenu[2].classList.remove(classActiveMenu)
                itensMenu[3].classList.remove(classActiveMenu)
                break;
        }
    })
})


titleItensSkills.forEach(item => {
    item.addEventListener('click', (e) => {
        let firstItem = document.querySelector('.first__item .area__container')
        let secondItem = document.querySelector('.second__item .area__container')
        let thirdItem = document.querySelector('.third__item .area__container')

        if(item.getAttribute('data-id') == '1') {

            if(firstItem.style.display == 'none') {
                firstItem.style.display = 'block'
                document.querySelector('#chevron__1').style.transform = ''
            }else {
                firstItem.style.display = 'none'
                document.querySelector('#chevron__1').style.transform = 'rotate(180deg)'
            }

        }else if(item.getAttribute('data-id') == '2') {
            if(secondItem.style.display == 'block') {
                secondItem.style.display = 'none'
                document.querySelector('#chevron__2').style.transform = ''
            }else {
                secondItem.style.display = 'block'
                document.querySelector('#chevron__2').style.transform = 'rotate(180deg)'
            }
            
        }else if(item.getAttribute('data-id') == '3') {
            if(thirdItem.style.display == 'block') {
                thirdItem.style.display = 'none'
                document.querySelector('#chevron__3').style.transform = ''
            }else {
                thirdItem.style.display = 'block'
                document.querySelector('#chevron__3').style.transform = 'rotate(180deg)'
            }
        }else {
            console.log('Error')
        }
  
    })
})