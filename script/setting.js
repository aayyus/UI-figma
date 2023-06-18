// "use strict";


//declaring variables
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const firstNameMobile = document.getElementById('firstName-mobile');

    const lastName = document.getElementById('lastName');
    const lastNameMobile = document.getElementById('lastName-mobile');

    const email = document.getElementById('email');
    const role = document.getElementById('role');
    const description = document.getElementById('description');
//devlaring object and array
    let dataObject;
    let dataArray ;
    

    const image = document.getElementById('image');
    const profilePic = document.getElementById('file');
    let img;
    profilePic.addEventListener('change', (e)=> {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function(e){
            img = e.target.result;
            image.src = img;
        }
        reader.readAsDataURL(imageFile);
    });
    
    form.addEventListener('submit',function(e){
        e.preventDefault();

//e = event
//object is made
        dataObject = {
            firstName: firstName.value,
            firstNameMobile:firstNameMobile.value,
            lastName:lastName.value,
            lastNameMobile:lastNameMobile.value,
            email:email.value,
            role:role.value,
            description:description.value,
            image:img
        }
        let localData= localStorage.getItem('data');
        if (localData){
            dataArray = JSON.parse(localData);   
        }
        else{
            dataArray=[];
        }
        dataArray.push(dataObject);
        
                //object is converted to string
        let storageData = JSON.stringify(dataArray);

        //data stored in local storage
        localStorage.setItem('data',storageData);
        //reset form
        form.reset();  

    })



    const sideNav = document.getElementById('sidenav');
    const hamBurger = document.getElementById('hamburger');

    hamBurger.addEventListener('click',(e)=>{
       
        if(sideNav.style.width === '0px' || sideNav.style.width === ''){
            sideNav.style.width = '320px';

            }
            else{
                sideNav.style.width = 0;
                }
    })

    