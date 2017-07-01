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
let frontBackgrounds = [
  'http://wanaroy.fi/images/gallery/08b.jpg',
  'http://wanaroy.fi/images/gallery/07b.jpg',
  'http://wanaroy.fi/images/gallery/06b.jpg',
  'http://wanaroy.fi/images/gallery/02b.jpg'
]

// front
Array.from(document.getElementsByClassName('front-a')).forEach((e, i) => {
  let articles = document.getElementsByTagName('article')
  e.onclick  = () => {
    document.getElementById('jumbotron').style.backgroundImage = `url(${frontBackgrounds[i]})`
    Array.from(articles).forEach((e) => {
      e.style.display = 'none'
    })
    articles[i].style.display = 'block'
  }
})

// TODO remove when menu is done
frontOut();
