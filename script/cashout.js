document.getElementById('btn-cashout').addEventListener('click',
    function(event){
        event.preventDefault();
        const cashAccNum = getValueByID('cash-account-number');
        const cashAmount = parseFloat(getValueByID('cashout-amount'));
        const cashPin = parseInt(getValueByID('cashout-pin'));

        const currentBalance = parseFloat(getInTextByID('main-balance'));


        if(cashAccNum.length === 11){
            if(cashPin===1234){
                const cashSum  = currentBalance - cashAmount;
                if(cashAmount<=0){
                    alert('Please insert a valid amount')
                }
                else if(cashSum<0){
                    alert('Not enough balance');
                }
                else{ 
                    setInnerTextByIDandValue('main-balance',cashSum)
                    alert('Cash out successful!');
                    const history = document.createElement('div');
                    history.innerHTML = `<h1 class="font-semibold text-blue-800">Cashout From Payoo</h1>
                        <h3 class="font-semibold">$${cashAmount}</h3>
                        <p>To Account : ${cashAccNum}
            `
            history.classList.add("bg-slate-200","rounded-sm","p-2","mb-2")
            document.getElementById('history-container').appendChild(history)
                }
                
            }
            else{
                alert('Invalid Pin')
            }
        }
        else{
            alert('Invalid Account Number')
        }
        
    }
)