document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName('body')[0]
    var bodyDiv = document.getElementsByTagName('div')[0]
    var div = document.createElement('div')
    div.className= "colorDiv"
    var container= document.getElementsByClassName('containerDiv')[0]
    var remove= document.getElementsByClassName('colorDiv')

    var pixelDiv = document.createElement('div')
    pixelDiv.className = "circleDiv"
    document.body.appendChild(pixelDiv)
    var pixelDiv1 = document.createElement('div')
    pixelDiv1.className = "circleDiv1"
    document.body.appendChild(pixelDiv1)
    var pixelDiv2 = document.createElement('div')
    pixelDiv2.className = "circleDiv2"
    document.body.appendChild(pixelDiv2)
    var pixelDiv3 = document.createElement('div')
    pixelDiv3.className = "circleDiv3"
    document.body.appendChild(pixelDiv3)
    var pixelDiv4 = document.createElement('div')
    pixelDiv4.className = "circleDiv4"
    document.body.appendChild(pixelDiv4)
    var pixelDiv5 = document.createElement('div')
    pixelDiv5.className = "circleDiv5"
    document.body.appendChild(pixelDiv5)
    var pixelDiv6 = document.createElement('div')
    pixelDiv6.className = "circleDiv6"
    document.body.appendChild(pixelDiv6)
    var pixelDiv7 = document.createElement('div')
    pixelDiv7.className = "circleDiv7"
    document.body.appendChild(pixelDiv7)
    var pixelDiv8 = document.createElement('div')
    pixelDiv8.className = "circleDiv8"
    document.body.appendChild(pixelDiv8)
    var pixelDiv9 = document.createElement('div')
    pixelDiv9.className = "circleDiv9"
    document.body.appendChild(pixelDiv9)
    var pixelDiv10 = document.createElement('div')
    pixelDiv10.className = "circleDiv10"
    document.body.appendChild(pixelDiv10)
    pixelDiv10.innerText = "Single Pixel"

    var pixelDiv11 = document.createElement('div')
    pixelDiv11.className = "circleDiv11"
    document.body.appendChild(pixelDiv11)
    var pixelDiv12 = document.createElement('div')
    pixelDiv12.className = "circleDiv12"
    document.body.appendChild(pixelDiv12)
    var pixelDiv13 = document.createElement('div')
    pixelDiv13.className = "circleDiv13"
    document.body.appendChild(pixelDiv13)
    var pixelDiv14 = document.createElement('div')
    pixelDiv14.className = "circleDiv14"
    document.body.appendChild(pixelDiv14)
    var pixelDiv15 = document.createElement('div')
    pixelDiv15.className = "circleDiv15"
    document.body.appendChild(pixelDiv15)
    var pixelDiv16 = document.createElement('div')
    pixelDiv16.className = "circleDiv16"
    document.body.appendChild(pixelDiv16)
    var pixelDiv17 = document.createElement('div')
    pixelDiv17.className = "circleDiv17"
    document.body.appendChild(pixelDiv17)
    var pixelDiv18 = document.createElement('div')
    pixelDiv18.className = "circleDiv18"
    document.body.appendChild(pixelDiv18)
    var pixelDiv19 = document.createElement('div')
    pixelDiv19.className = "circleDiv19"
    document.body.appendChild(pixelDiv19)
    var pixelDiv20 = document.createElement('div')
    pixelDiv20.className = "circleDiv20"
    document.body.appendChild(pixelDiv20)
    var pixelDiv21 = document.createElement('div')
    pixelDiv21.className = "circleDiv21"
    document.body.appendChild(pixelDiv21)
    var pixelDivMo = document.createElement('div')
    pixelDivMo.className = "circleDivMo"
    document.body.appendChild(pixelDivMo)
    pixelDivMo.innerText = "Draw!"
    for (var i = 0; i < 2000; i++) {
        var div = document.createElement('div')
        var divColor= container.appendChild(div)
        div.className= "colorDiv"
    }

    pixelDiv.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv')){
            event.target.style.backgroundColor = "#FFFF00"
          }
        })
    })
    pixelDiv1.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "#00FFFF"
        })
    })
    pixelDiv2.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 118, 118)"
        })
    })
    pixelDiv3.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 209, 249)"
        })
    })
    pixelDiv4.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 241)"
        })
    })
    pixelDiv5.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 206)"
        })
    })
    pixelDiv6.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(187, 249, 118)"
        })
    })
    pixelDiv7.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(230, 249, 118)"
        })
    })
    pixelDiv8.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 216, 118)"
        })
    })
    pixelDiv9.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 130, 118)"
        })
    })

    pixelDiv11.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor= "#FFFF00"
        })
    })

    pixelDiv12.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "#00FFFF"
        })
    })
    pixelDiv13.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 118, 118)"
        })
    })
    pixelDiv14.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 209, 249)"
        })
    })
    pixelDiv15.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 241)"
        })
    })
    pixelDiv16.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(118, 249, 206)"
        })
    })
    pixelDiv17.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(187, 249, 118)"
        })
    })
    pixelDiv18.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(230, 249, 118)"
        })
    })
    pixelDiv19.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 216, 118)"
        })
    })
    pixelDiv20.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
          if(event.target.classList.contains('colorDiv'))
            event.target.style.backgroundColor = "rgb(249, 130, 118)"
        })
    })

    var button = document.getElementById('btn');
    button.addEventListener('click', function() {
      button.style.backgroundColor = "rgba(134, 216, 251, 0.37)"
        var remove= document.getElementsByClassName('colorDiv')
        for (var i = 0; i < remove.length; i++) {
          remove[i].style.backgroundColor= "rgba(255, 255, 255, 0)"

        }
        })

});
