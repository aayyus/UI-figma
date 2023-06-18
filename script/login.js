const extractedData= localStorage.getItem('data-login');
//string again converted to object
const storageData = JSON.parse(extractedData);
const form = document.getElementById('form');
const emailSignup = document.getElementById('email');
const passwordSignup = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let isCredential = false;
  
    storageData.map(auth => {
      if (auth.email === emailSignup.value && auth.password === passwordSignup.value) {
        isCredential = true;
        window.location.href = 'dashboard.html';
      }
    });
  
    if (!isCredential) {
      alert("Wrong Credentials");
    }
  });
  