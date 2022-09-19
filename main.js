const topBtn = document.querySelector('.btn-top')
const moon = document.querySelector('.moon img')
const openMenu = document.querySelector('.bars')
const aside = document.querySelector('.list')
const closeMenu = document.querySelector('.list .fas')

//show topBtn
window.addEventListener('scroll',()=>{
    const x = window.pageYOffset
    if(x > 500){
        topBtn.classList.add('show-btn')
    }else{
        topBtn.classList.remove('show-btn')
    }
})
//scroll to top
topBtn.addEventListener('click',()=>{
window.scrollTo({
    top:0
})
})
//dark mode
moon.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if( document.body.classList.contains('dark')){
        moon.src = "./images/sun.png"        
    }else{
        moon.src = "./images/moon.png"
    }
})

//open sidebar
openMenu.addEventListener('click',()=>{
aside.style.right = "0"
})

closeMenu.addEventListener('click',()=>{
    aside.style.right = "-200px"    
    })