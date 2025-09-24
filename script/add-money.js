document.getElementById('btn-add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const addAmount= parseFloat(getValueByID('add-amount'));
        const addPin  = parseInt(getValueByID('pin-number'));
        const currentAddbalance = parseFloat(getInTextByID('main-balance'))
        const addAccountNumber = getValueByID('acc-number')
        const bankSelect = getValueByID('all-bank')
        if(bankSelect==='none'){
            console.log(addAmount);
            
            alert('Select Bank')
            return
        }
       if(addAmount<=0 || isNaN(addAmount)){
        alert('please provide a valid amount')
        return;
       }
       if(addAccountNumber.length === 11){
         if(addPin===1234){
            const addSum = currentAddbalance + addAmount;
            setInnerTextByIDandValue('main-balance',addSum);

            const history = document.createElement('div');
            history.innerHTML = `<h1 class="font-semibold text-blue-800">Added Money From ${bankSelect}</h1>
            <h3 class="font-semibold">$${addAmount}</h3>
            <p>Account : ${addAccountNumber}
            `
            history.classList.add("bg-slate-200","rounded-sm","p-2","mb-2")
            document.getElementById('history-container').appendChild(history)
            alert('Add Money Successful')
            
        }
        else{
            alert('Invalid Pin');
        }
       }
       else{
        alert('Invalid Account Number');
       }
})

