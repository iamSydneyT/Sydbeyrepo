function showDropdown (){
    let mydrop = document.querySelector('.dropdown-container');
    mydrop.style.display="block";
    mydrop.style.position="fixed";
    mydrop.style.animation='slideY forwards linear .1s';
    document.getElementById('defaultShown').style.display="none";
    document.getElementById('defaultHidden').style.display="block";

   
}
function hideDropdown (){
    let mydrop = document.querySelector('.dropdown-container');
    mydrop.style.display="none";
    mydrop.style.position="relative";
    document.getElementById('defaultShown').style.display="block";
    mydrop.style.animation='InverseslideY forwards linear .1s';
    document.getElementById('defaultHidden').style.display="block";
    document.getElementById('defaultHidden').style.display="none";

}

function showDrop(){
    let content = document.querySelector('.content');
    content.style.display='block';
    let show = document.getElementById('defShown');
    show.style.display='none';
    let mybtn = document.getElementById('defHidden');
    mybtn.style.display='block';

}

function hidedown(){
    let content = document.querySelector('.content');
    let show = document.getElementById('defShown');
    show.style.display='block';
    let mybtn = document.getElementById('defHidden');
    mybtn.style.display='none';
    content.style.display='none';

}