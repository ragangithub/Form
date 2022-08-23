//get the elements

const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password_check=document.getElementById('password-check')
 
const form=document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const usernameValue=username.value
    const emailValue=email.value
    const passwordValue=password.value
    const password_checkValue=password_check.value

    if (usernameValue===''){
        setError(username,'username cannot be blank')
    }
    else{
        setSuccess(username)
    }


    if (emailValue===''){
        setError(email,'email cannot be blank')
    }
    else if(!isEmail(emailValue)){
        setError(email,'email isnt valid')
    }
    else{
        setSuccess(email)
    }

    if (passwordValue===''){
        setError(password,'username cannot be blank')
    }
    else{
        setSuccess(password)
    }

    if (password_checkValue===''){
        setError(password_check,'password cannot be blank')
    } 
    else if(password_checkValue!==passwordValue){
        setError(password_check,'password doesnt match')
    }
    else{
        setSuccess(password_check)
    }
}

function isEmail(emailValue){

return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)
}
function setSuccess(input){
    const formControl=input.parentElement
    formControl.className='form-control success'
}
function setError(input,message){
    const formControl=input.parentElement
    formControl.className='form-control error'
    const small=formControl.querySelector('small')
    small.innerText=message
}