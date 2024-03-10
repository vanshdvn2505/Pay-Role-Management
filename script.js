let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let notes = [500,100,20,10,5,1];

    let tamt = parseInt(document.querySelector('.amount').value);
    let gamt = parseInt(document.querySelector('.cash').value);
    let rem  = gamt - tamt;

    if(tamt < 0 || gamt < 0 || isNaN(rem)){
        alert("Enter correct details");
        return;
    }

    let out = document.querySelectorAll('.no-of-notes');

    if(rem < 0){
        alert("Give the right amount");
    }

    else{
        for(let i = 0; i < 6; i++){
            let value = Math.trunc(rem/notes[i]);
            rem = rem % notes[i];

            out[i].innerHTML = value;
        }
    }
});