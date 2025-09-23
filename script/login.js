document.getElementById('btn-login').addEventListener('click', function(event){
    // console.log('hello js')
    event.preventDefault()
    const accNum = document.getElementById('acc-number').value;
    const pin  = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    if(accNum.length===11){
        console.log('thik ase');
        if(convertedPin === 1234){
            window.location.href="./main.html";
        }
        else{
            alert('Invalid Pin')
        }
    }
    else{
        alert('Invalid Account number');
    }

})