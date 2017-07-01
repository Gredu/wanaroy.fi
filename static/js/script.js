function frontIn() {

}

function frontOut() {
  // or just don't display the scroll?
  Array.from(document.getElementsByClassName('hide-on-start')).forEach(function(e) {
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
Array.from(document.getElementsByClassName('front-a')).forEach(function(e, i) {
  e.onclick  = function() {
    console.log('link: ' + e.innerHTML)
    console.log('index: ' + i)
    console.log('put image: ' + frontBackgrounds[i])
    document.getElementById('jumbotron').style.backgroundImage = 'url(' + frontBackgrounds[i] + ')'
  }
})
