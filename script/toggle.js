
handleToggle('cashout-form','none')
handleToggle('transaction-history','none')

// handleToggle('add-money-form','none')

        // document.getElementById('cashout-form').style.display='none';
document.getElementById('add-money-box').addEventListener('click',
    function(){
       handleToggle('cashout-form','none')
       handleToggle('add-money-form','block')
       handleToggle('transaction-history','none')
    }
)
document.getElementById('cashout-box').addEventListener('click',
    function(){
        handleToggle('cashout-form','block')
        handleToggle('add-money-form','none')
        handleToggle('transaction-history','none')
    }
)
document.getElementById('transaction-box').addEventListener('click',
    function(){
        handleToggle('transaction-history','block')
        handleToggle('cashout-form','none')
        handleToggle('add-money-form','none')
        

    }
)
