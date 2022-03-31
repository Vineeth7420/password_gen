
let passoneEl = document.getElementById('pass-one')
let passtwoEl = document.getElementById('pass-two')
let passthreeEl = document.getElementById('pass-three')
let passfourEl = document.getElementById('pass-four')
const passgenEl = document.getElementById('passgen')

const passLength = 15

passgenEl.addEventListener('click',function(){
    passoneEl.textContent = makeid(15);
    passtwoEl.textContent = makeid(15);
    passthreeEl.textContent = makeid(15);
    passfourEl.textContent = makeid(15);
})


function makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@£$%^&*()_+';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

