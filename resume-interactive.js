
const fade = (element) => {
if(!element.classList.contains('animate__animated','animate__fadeIn')) {
element.classList.add('animate__animated','animate__fadeIn')
element.style.animationDuration = "3s"
} else {
element.classList.remove('animate__animated','animate__fadeIn')
}
// Add animation classes back to our element after 1 milisecond;
setTimeout(function(){
  element.classList.add('animate__animated','animate__fadeIn');
}, 100);
}

const pulse = (element) => {
  if(!element.classList.contains('animate__animated','animate__pulse')) {
    element.classList.add('animate__animated','animate__pulse')
    element.style.animationDuration = "0.5"
    element.style.animationIterationCount = "3"
    } else {
    element.classList.remove('animate__animated','animate__pulse')
    }
    // Add animation classes back to our element after 1 milisecond;
    setTimeout(function(){
      element.classList.add('animate__animated','animate__pulse');
    }, 100);
  }

  const flip = (element) => {
    if(!element.classList.contains('animate__animated','animate__flipInX')) {
      element.classList.add('animate__animated','animate__flipInX')
      element.style.animationDuration = "0.5s"
      } else {
      element.classList.remove('animate__animated','animate__flipInX')
      }
      // Add animation classes back to our element after 1 milisecond;
      setTimeout(function(){
        element.classList.add('animate__animated','animate__flipInX');
      }, 100);
    }

const hideElement = (element) => {
  element.style.display = "none"
}
const showElement = (element) => {
  element.style.display= "block"
}

const showPhoneNumber = () => {
document.querySelector(".phonenumber").classList.add('animate__animated','animate__fadeIn')
document.querySelector(".phonenumber").style.display = "block";
}

const showEmail = () => {
  document.querySelector(".email").classList.add('animate__animated','animate__fadeIn')
  document.querySelector(".email").style.display = "block"
  }

