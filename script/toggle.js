// document.getElementById('add-money-form').style.display='none';
        document.getElementById('cashout-form').style.display='none';
document.getElementById('add-money-box').addEventListener('click',
    function(){
        document.getElementById('add-money-form').style.display='block';
        document.getElementById('cashout-form').style.display='none';

    }
)
document.getElementById('cashout-box').addEventListener('click',
    function(){
        document.getElementById('add-money-form').style.display='none';
        document.getElementById('cashout-form').style.display='block';

    }
)