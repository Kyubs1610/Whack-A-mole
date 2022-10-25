const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
/// [... help to convert in array]
const scoreEl= document.querySelector('.count span')

let score= 0




function run (){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

   

    const img = document.createElement('img')
    img.classList.add('thomas')
    img.src = 'Assets/thomascontent.png'

    img.addEventListener('click',() => {
        score +=1
        scoreEl.textContent = score
        img.src = 'Assets/thomastriste.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)

    })

    hole.appendChild(img)
    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)

}

run()

window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
    
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
} )

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
} )