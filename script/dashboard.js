
let table = document.getElementById('table');

//data pulled from local storage

const extractedData= localStorage.getItem('data');
//string again converted to object
const storageData = JSON.parse(extractedData);

storageData.map ((data)=>{
    let id = storageData.indexOf(data);
    
    //json string to js object
    table.innerHTML += `<tr>
    <td class="column-1">
        <label class="container-checkbox">
            <div class="checkmark"></div>
            <input type="checkbox" class="checkmark-default" id="checkbox-one">
        </label>
        <div class="img-box">
        <img class="img-profile" id="image" src=${data.image} alt="logo">
        </div>
        <div class="logo-name">
            <p class="logo-heading">
                ${data.firstName} ${data.lastName}
            </p>
            <p class="logo-subheading">
                ${data.email}
            </p>
        </div>
    </td>

    <td>
        <div class="progress-container">
            <div class="progress" style="width: 40%;"></div>
        </div>
    </td>
    <td class="td-center">
        <p class="badge error">
            ${data.role}
        </p>
    </td>

    <td>
        <div class="avatars">
            <span class="avatar">
                <img src="/images/account-photo.png" />
            </span>
            <span class="avatar">
                <img src="/images/acc-photo-1.png" />
            </span>
            <span class="avatar">
                <img src="/images/acc-photo-2.png" />
            </span>
            <span class="avatar">
                <img src="/images/acc-photo-3.png" />
            </span>
            <span class="avatar">
                <img src="/images/acc-photo-4.png" />
            </span>

            <span class="extra">
                +8
            </span>
        </div>
    </td>

    <td>
        <p class="about-heading">
            ${data.description}
        </p>
        <p class="about-subheading">
            Time tracking, invoicing and expenses
        </p>
    </td>

    <td class="action-block">
        <a onclick="removeRow(${id})"> <img  src="/images/bin-icon.svg" alt="dustbin-icon"></a>
        <a href="./editSetting.html?${id=id}"> <img src="/images/edit-icon.svg" alt="edit-icon"></a>
    </td>
</tr> `
    
})

function removeRow(id){
    storageData.splice(id,1);
    localStorage.setItem('data', JSON.stringify(storageData));
    window.location.reload();
}




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




function searchTable() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var rows = document.querySelectorAll("#table tr");
  
    rows.forEach(row => {
      var found = Array.from(row.getElementsByTagName("td")).some(cell =>
        cell.innerHTML.toLowerCase().includes(input)
      );
      row.style.display = found ? "" : "none";
    });
  }

  var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", searchTable);

  
let totalCustomer = document.getElementById('total-customer');
totalCustomer.innerHTML = storageData.length;



