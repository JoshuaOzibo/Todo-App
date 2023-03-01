const nameinput = document.querySelector('.nameinput');
const emailinput = document.querySelector('.emailinput');
const phoneinput = document.querySelector('.phoneinput');
const h3 = document.querySelector('.h3');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', onclick)
function onclick(e){
    e.preventDefault()
    
    const tododiv = document.createElement('div')
    tododiv.classList.add('list1');


    if(nameinput.value === '' || emailinput.value === '' || phoneinput.value ===''){
        h3.innerHTML='Please Fill All Blank Space:';
        h3.classList.add('h31')
        setTimeout(()=> h3.remove(), 2000);
        tododiv = false;
    }else{
        tododiv === true;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameinput.value}:${emailinput.value}:${phoneinput.value}`));
    tododiv.appendChild(li);

    const bad = document.createElement('btn');
    bad.innerHTML='<i class="fas fa-times"></i>';
    bad.classList.add('listbad')
    tododiv.appendChild(bad)

    bad.addEventListener('click', badclick)
    function badclick(e){
        e.preventDefault()
        tododiv.classList.add('fall')
        tododiv.addEventListener('transitionend', function(){
            tododiv.remove()
        });
    }

    const good = document.createElement('btn');
    good.innerHTML='<i class="fas fa-check"></i>';
    good.classList.add('listgood')
    tododiv.appendChild(good)

    good.addEventListener('click', goodclick);
    function goodclick(e){
        e.preventDefault()

        li.classList.toggle('goodclick')
    }
    const selection = document.querySelector('#select');
    selection.addEventListener('click', select);
    function select(e){
        e.preventDefault()
        const link=li.childNodes;
        link.forEach(function(todo){
            switch(e.target.value){
                case "all":
                tododiv.style.display='block';
                break;
                case "marked":
                if(li.classList.contains('goodclick')){
                    tododiv.style.display='block';
                } else {
                    tododiv.style.display='none';
                }
                break;
                case "unmarked":
                if(!li.classList.contains('goodclick')){
                    tododiv.style.display='block';
                } else {
                    tododiv.style.display='none';
                }
            }
        });
    }
    if(nameinput.value==='',emailinput.value==='',phoneinput.value===''){
        tododiv.style.display =='none';
        
        h3.innerHTML='Please Fill All Blank Space:';
        h3.classList.add('h31')
        setTimeout(()=> h3.remove(), 2000)
    }

    list.appendChild(tododiv)
    nameinput.value='';
    emailinput.value='';
    phoneinput.value='';
}