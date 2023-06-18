const extractedData = localStorage.getItem("data");
//string again converted to object
const storageData = JSON.parse(extractedData);
const editForm = document.getElementById("form-setting");

//getting the url of the current page
let url = window.location.href;
let id = url.split("?")[1];
let data = storageData[id];


//adding htmml from js
editForm.innerHTML = `
<form action="" id="form-setting">
                <div class="setting-heading border-btm">
                    <div class="heading-desktop">
                        <h1 class="lg medium">Personal info</h1>
                        <h2 class="sm regular">Update your photo and personal details here.</h2>
                    </div>
                    <div class="heading-mobile">
                        <h1 class="lg medium">Team Members</h1>
                        <h2 class="sm regular">Update your photo and personal details here.</h2>
                    </div>
                    <div class="btn-container" style="margin: 0;">
                        <button class="btn button-secondary" style="margin: 0;">

                            Cancel
                        </button>
                        <button  type="submit" class="btn button-primary" style="margin: 0;">

                            Save
                        </button>
                    </div>
                </div>

                <!-- <div class="name-block-mobile">

                    <div class="input-block">
                        <label class="label" for=" email">First Name</label>
                        <input class="input-box" type="text" id="firstName-mobile"  placeholder="Olivia" >
                    </div>
                    <div class="input-block border-btm">
                        <label class="label" for=" email">Last Name</label>
                        <input class="input-box" type="text" id="lastName-mobile" placeholder="Rhye">
                    </div>
                </div> -->
                <div class="border-btm">
                    <div class="input-block name-block-desktop  ">
                        <label class="label" for=" email">Name</label>
                        <div class="input-block-name">
                            <input class="input-box-name" type="text" id="first-Name"  placeholder="Olivia" value="${data.firstName}">
                            <input class="input-box-name" type="text" id="last-Name" placeholder="Rhye" value="${data.lastName}">
                        </div>       

                </div>

                <div class="input-block border-btm">

                    <label class="label" for=" email">

                        Email address</label>
                    <div class="email-block">
                        <img class="dropdown-icon-mail" src="/images/mailicon.png" alt="">

                        <input class="input-box " type="email" id="emaill" name="email" placeholder="Enter your email" value="${data.email}">
                    </div>
                </div>

                <div class="file-container border-btm">
                    <div>
                        <h3 class="text-heading">Your Photo</h3>
                        <p class="text-subheading">This will be displayed on your profile.</p>
                    </div>
                    <div class="img-box" >
                    <img class="img-profile"  id="image" src=${data.image} alt="profile-pic">
                </div>

                    <div class="file-block">
                        <label for="file" class="file-opener">
                            <input class=" file-box" type="file" id="file" name="file" placeholder="">

                            <img class="import-button-file" src="/images/import.svg" alt="import">
                            <p class="sm regular"><span class="sm semibold">Click to upload</span> or drag and drop</p>
                            <p class="xs regular">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </label>
                    </div>
                </div>

                <div class="input-block border-btm">
                    <label class="label" for=" email">Role</label>
                    <input class="input-box" type="text" id="rolee" name="role" placeholder="Producer" value="${data.role}">
                </div>

                <div class="dropdown-container border-btm">

                    <label for="drop-menu" class="label">Country</label>
                    <div class="dropdown-block">
                        <img class="dropdown-icon" src="/images/arrow-icon.svg" alt="">
                        <select name="head" id="drop-menu" class="dropdown-items">
                            <option value="Details">United-States</option>
                            <option value="Profile">Nepal</option>
                            <option value="Password">India</option>
                            <option value="Team">Bhutan</option>
                            <option value="Plan">Bangladesh</option>
                            <option value="Billing">Russia</option>
                            <option value="Email">Canada</option>
                            <option value="Notifications">Egypt</option>
                            <option value="Integrations">Croatia</option>
                            <option value="API">Norway</option>
                        </select>
                    </div>
                </div>

                <div class="dropdown-container border-btm" for="drop-menu">

                    <label for="drop-menu" class="label">Time Zone</label>
                    <div class="dropdown-block">
                        <img class="dropdown-icon-left" src="/images/clock-icon.svg" alt="">
                        <img class="dropdown-icon" src="/images/arrow-icon.svg" alt="">
                        <select name="head" id="drop-menu" class="dropdown-items dropdown-clock">
                            <option value="Details">
                                Pacific Standard Time (PST)
                                UTC−08:00
                            </option>
                            <option value="Profile">Profile</option>
                            <option value="Password">Password</option>
                            <option value="Team">Team</option>
                            <option value="Plan">Plan</option>
                            <option value="Billing">Billing</option>
                            <option value="Email">Email</option>
                            <option value="Notifications">Notifications</option>
                            <option value="Integrations">Integrations</option>
                            <option value="API">API</option>
                        </select>
                    </div>
                </div>
                <div class="bio-container border-btm">
                    <div class="bio-text">
                        <h3 class="text-heading">Bio</h3>
                        <p class="text-subheading" style="color: #667085;">Share a few snippets of your work.</p>
                    </div>
                    <div class="bio-block-outer">
                        <div class="bio-block-inner">
                            <div class="dropdown-block">
                                <img class="dropdown-icon" src="/images/arrow-icon.svg" alt="">
                                <select name="head" id="drop-menu" class="dropdown-items-bio dropdown-items">

                                    <option value="Details">
                                        Normal Text
                                    </option>
                                    <option value="Profile">Bold</option>
                                    <option value="Password">Itallic</option>

                                </select>
                            </div>

                            <div class="fontedit-icons">
                                <img src="/images/font-edit-bold.svg" alt="bold">
                                <img src="/images/font-edit-italic.svg" alt="italic">
                                <img src="/images/font-edit-space.svg" alt="icon">
                                <img src="/images/font-edit-bulletlist.svg" alt="bullet-list">
                                <img src="/images/font-edit-numberlist.svg" alt="number-list">
                            </div>
                        </div>

                        <div class="description-container">

                            <textarea class="description-box  md regular" type="" id="description" name="email" 
                                placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.">${data.description}</textarea>
                            <p class="text-subheading">275 characters left</p>
                        </div>
                    </div>
                </div>




                <div class="file-container border-btm">
                    <div class="upload-text-block">
                        <h3 class="text-heading">Portfolio projects</h3>
                        <p class="text-subheading">Share a few snippets of your work.</p>
                    </div>


                    <div class="file-block-upload file-block">
                        <label for="file" class="file-opener">
                            <input class=" file-box" type="file" id="file" name="file" placeholder="">

                            <img class="import-button-file" src="/images/import.svg" alt="import">
                            <p class="sm regular"><span class="sm semibold">Click to upload</span> or drag and drop</p>
                            <p class="xs regular">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </label>
                    </div>
                </div>

                <div class="btn-container-footer">
                    <button class="btn button-secondary" style="margin: 0;">

                        Cancel
                    </button>
                    <button  type="submit" class="btn button-primary" style="margin: 0;">

                        Save
                    </button>
                </div>

            </form>`;
            //declaring new variables for editing
            const namefirst = document.getElementById('first-Name');
            const nameFirstMobile = document.getElementById('firstName-mobile');
            const namelast = document.getElementById('last-Name');
            const namelastMobile = document.getElementById('lastName-mobile');
            const email = document.getElementById('emaill');
            const role = document.getElementById('rolee');
            const description = document.getElementById('description');
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

editForm.addEventListener('submit',function(e){
    e.preventDefault();
    (data.firstName = namefirst.value),
    (data.firstNameMobile = nameFirstMobile.value),
    (data.lastName = namelast.value),
    (data.lastNameMobile = namelastMobile.value),
    (data.email = email.value),
    (data.role = role.value),
    (data.description = description.value);
    (data.image= img)
            //object is converted to string
    newData = JSON.stringify(storageData);

    //data UPDATED in local storage
    localStorage.setItem('data',newData);

    window.location.href='dashboard.html';
   
});