var mylogin = document.getElementById('login');
var mysignup = document.getElementById('signup');
var mybtn = document.getElementById('btn');

login=()=>
{
    mylogin.style.left='50px';
    mysignup.style.left='500px';
    mybtn.style.left='0px';
}

signup=()=>
{
    mylogin.style.left='-450px';
    mysignup.style.left='50px';
    mybtn.style.left='110px';
}