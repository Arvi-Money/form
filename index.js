const button = document.querySelector('.btn');
const nameInput = document.getElementById('inputName');
const email = document.getElementById('inputEmail4');
const password = document.getElementById('inputPassword4');
const address = document.getElementById('inputAddress');
const city = document.getElementById('inputCity');
const state = document.getElementById('inputState');
const CEP = document.getElementById('inputZip');
const check = document.getElementById('gridCheck');


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function validate() {
    if(nameInput.value.length <= 3 && nameInput.value.trim() == ""){
        alert('3ta belgidan koproq bolishi kerak');
        nameInput.focus();
        return false;
    }

    if (!ValidateEmail(email.value && email.value.trim() == "")) {
        alert('Email notogri kiritildi');
        email.focus();
        return false;
    }

    if (password.value < 6 && password.value.trim() == "") {
        alert('Parol 6ta belgidan koproq bolishi kerak');
        email.focus();
        return false;
    }

    if (address.value.length <= 10 && address.value.trim() == "") {
        alert('Toliq manzilni kiriting');
        address.focus();
        return false;
    }

    if (city.value.length <= 4 && city.value.trim() == "") {
        alert('Shahar nomini toliq kiriting');
        city.focus();
        return false
    }

    if (state.value.trim() == "") {
        alert('Shtatni tanlang');
        state.focus();
        return false
    }
    
    return true

}


button && button.addEventListener('click', function (e) {
   e.preventDefault();
   if (validate()) {
    alert('Validatsiyadan otdi');
   }else{
    alert('Validatsiyadan otmadi');
   }   
})
