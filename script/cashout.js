document.getElementById('btn-cashout').addEventListener('click',
    function(event){
        event.preventDefault;
        const cashpin  = document.getElementById('cashout-pin').value;
        const balance = document.getElementById('main-balance').innerText

            const convertedCashPin = parseInt(cashpin);

            const cashoutAmount = parseFloat(document.getElementById('cashout-amount').value);
        const mainBalance = parseFloat(balance);
            if(convertedCashPin && cashoutAmount){
         if(convertedCashPin===1234){
            const sum = mainBalance - cashoutAmount;
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
    }
)