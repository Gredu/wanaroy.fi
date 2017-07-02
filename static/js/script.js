function frontIn() {

}

function frontOut() {
  // or just don't display the scroll?
  Array.from(document.getElementsByClassName('hide-on-start')).forEach((e) => {
    e.style.display = 'block'
  })
  document.getElementsByClassName('front-display')[0].style.transform = 'translate(0, -100%)'
}

// main

// TODO Replace with local when publicing
const frontBackgrounds = [
  'http://wanaroy.fi/images/gallery/08b.jpg',
  'http://wanaroy.fi/images/gallery/07b.jpg',
  'http://wanaroy.fi/images/gallery/06b.jpg',
  'http://wanaroy.fi/images/gallery/02b.jpg'
]

// front
Array.from(document.getElementsByClassName('front-a')).forEach((e, i) => {
  const articles = document.getElementsByTagName('article')
  e.onclick  = () => {
    document.getElementById('jumbotron').style.backgroundImage = `url(${frontBackgrounds[i]})`
    Array.from(articles).forEach((e) => {
      e.style.display = 'none'
    })
    articles[i].style.display = 'block'
  }
})

// Language preference in menu sidebar list
Array.from(document.getElementsByClassName('preference-language')).forEach((e) => { 
  e.onclick = () => {
    const selectedLanguage = e.innerHTML
    Array.from(document.getElementsByClassName('sidebar-menu-list')).forEach((e) => {
      if(e.classList.contains(`sidebar-menu-list-${selectedLanguage}`)) {
        e.classList.remove('hide')
      } else {
        e.className += ' hide'
      }
    })
  }
})

// TODO remove when menu is done
frontOut();
