//------------Header Toggle-------------

let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Typing Effect

let typed=new Typed('.auto-input',{
    strings:['Full Stack Developer!','Web Designer!'],
    typedSpeed:150,
    backspeed:150,
    backDelay:2000,
    loop:true,
})


//Active Link State On Scroll



//Get all Links
let navLinKs =document.querySelectorAll('nav ul li a')

//Get all Sections
let sections= docment.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll',function(){
    const scrolPos= window. scrollY + 20
    sections.ForEach(section=>{
        if(scrolPos > section.offsetTop && scrolPos < (section.offsetTop + section.offsetHeight)){
            navLinKs.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id') == link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});


//Contact Form Validation
function validForm(){

    var name = document.custom_form.name;
    var email = document.custom_form.email;
    var phone = document.custom_form.phone;
    var subject = document.custom_form.subject;
    var msg= document.custom_form.msg;
    if(name.value == ""){
        name.nextElementSibling.style.display = "block";
        name.style.border = "2px solid rgb(164, 29, 29)";
        return false
    }else{
        name.nextElementSibling.style.display = "none";
        name.style.border = "2px solid transparent";
    }

    if(email.value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/") || email.value == ""){
        email.nextElementSibling.style.display = "block";
        email.style.border = "2px solid rgb(164, 29, 29)";
        return false
    }else{
        email.nextElementSibling.style.display = "none";
        email.style.border = "2px solid transparent";
    }

    if(subject.value == ""){
        subject.nextElementSibling.style.display = "block";
        subject.style.border = "2px solid rgb(164, 29, 29)";
        return false
    }else{
        subject.nextElementSibling.style.display = "none";
        subject.style.border = "2px solid transparent";
    }
    if(msg.value == ""){
        msg.nextElementSibling.style.display = "block";
        msg.style.border = "2px solid rgb(164, 29, 29)";
        return false
    }else{
        msg.nextElementSibling.style.display = "none";
        msg.style.border = "2px solid transparent";
    }

}
