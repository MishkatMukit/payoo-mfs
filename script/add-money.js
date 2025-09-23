document.getElementById('btn-add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const amount= parseFloat(document.getElementById('amount').value);
        const pin  = parseInt(document.getElementById('pin-number').value);
        const balance = document.getElementById('main-balance').innerText
        const mainBalance = parseFloat(balance);
       if(pin && amount){
         if(pin===1234){
            const sum = mainBalance + amount;
            console.log(sum);

            document.getElementById('main-balance').innerText = sum;
            
        }
        else{
            alert('invalid pin')
        }
       }
       else{
        alert('Enter amount')
       }
})