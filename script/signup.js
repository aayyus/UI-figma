
const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('c-password');
const date = document.getElementById('date');
let gender = document.getElementsByName('gender');
const description = document.getElementById('description');
const city = document.getElementById('city');

let genderValue
for (var i = 0; i < gender.length; i++) {
    gender[i].addEventListener("click", function() {
       genderValue=(this.value);
    });}

let dataObject;
    let dataArray ;



    form.addEventListener('submit',function(e){
        e.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
        }
        else{

       
        dataObject = {
            name: fullname.value,
            email:email.value,
            password:password.value,
            cpassword:confirmPassword.value,
            date:date.value,
            gender:genderValue,
            description:description.value,
            city:city.value
        } 
        let localData= localStorage.getItem('data-login');
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
        localStorage.setItem('data-login',storageData);
        //reset form
            form.reset();  
    }
    })

  

