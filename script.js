
let con = document.createElement('div');
con.setAttribute('class','container');

//left container
let leftcon = document.createElement('div');
leftcon.setAttribute('class','leftcontainer');

//right container
let rightcon = document.createElement('div');
rightcon.setAttribute('id','rightcontainer');

let placeholder = document.createElement('h4');
let space = document.createElement('br');

placeholder.innerText = 'Enter your name to see your Nationality'
let form =  document.createElement('form');
let text1 = document.createElement('input');
let submit1 = document.createElement('input');

text1.setAttribute('type','text');

submit1.setAttribute('type','Submit');
submit1.setAttribute('value','Search')

form.append(text1,submit1);
leftcon.append(placeholder,space,form);
con.append(leftcon);
//right container


submit1.addEventListener('click',(event)=>{
    event.preventDefault();
//     console.log(text1.value);
    try{
        func();
    }
    catch(err){
        console.log(err);
    }
    // text1.value = '';
})

document.body.append(con);


const func = async ()=>{
    url = 'https://api.nationalize.io?name=';
    let res =  await fetch(url+text1.value);
    let data = await res.json();
    for(let i = 0;i<2;i++){


        let main= document.createElement('div');
        let names = document.createElement('h3');
        names.innerHTML = `${text1.value}`;
        names.setAttribute('class','input')
        let ul= document.createElement('ul');
        ul.setAttribute('class','input')
        let res = document.createElement('li');
        res.innerHTML = `Nationality : ${data.country[i].country_id}, Probability : ${data.country[i].probability}`;
        //res.innerHTML = 'Nationality :',data.country[i].country_id +', Probability :',data.country[i].probability;
        // res.setAttribute('class','rightcontainer');
        ul.append(res)
        main.append(names,ul);
        rightcon.append(main);
        con.append(rightcon)
        text1.value = '';

        // document.body.append(con);
        console.log('Nationality :',data.country[i].country_id +', Probability :',data.country[i].probability);
    }
}


