const divs=document.querySelector('.javas')
let hid=document.getElementsByClassName('c')
hid=Array.from(hid);
divs.addEventListener('click',(e)=>
{
    hid.forEach((element,index)=>
    { 
       if(!(e.target.nextElementSibling.classList.contains('hidden')))
        {
          
        }  
        else
        {
            console.log("Yes")
           element.classList.add('hidden')
        }
    })
    console.log( e.target.nextElementSibling.classList.toggle('hidden'))  
})