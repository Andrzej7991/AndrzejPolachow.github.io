const textContainer = document.querySelector(".first-text");
const text1 = textContainer.innerHTML;
let text2 = "Beginner Frontend Web Developer";




function animateText(texts, container, delay) {
    let index = 0;
    let direction = 1;

  
    function animate() {
      const text = texts[index];
      const currentLength = container.innerHTML.length;
      
  
      container.innerHTML = (direction === 1)
        ? text.substring(0, currentLength + 1)
        : text.substring(0, currentLength - 1);
  
      if (direction === 1 && currentLength === text.length) {

        direction = -1;
        setTimeout(animate, delay * 2);
      } else if (direction === -1 && currentLength === 0) {
        direction = 1;
        index = (index + 1) % texts.length;
        setTimeout(animate, delay);
      } else {
        setTimeout(animate, delay);
      }

      container.style.color = (text === text2) ? "Chartreuse" : "white";
    }
  
    animate();
  }

    document.getElementById('textContainer');

  animateText([text1, text2], textContainer, 125);

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        easing: 'ease-in-out',
        duration: 800,
    });
});

// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('img');

// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while(lightbox.firstChild){
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })

// lightbox.addEventListener('click', e => {
//   // if(e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })

// document.addEventListener('keydown', event => {
//   if (event.key === 'Escape') {
//     lightbox.classList.remove('active');
//   }
// });


