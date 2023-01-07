let data;
let accData;
const element = document.getElementById("searchbar");

function delay(time) { // Because there is no default sleep function
  return new Promise(resolve => setTimeout(resolve, time));
}

async function main() {
  const res = await fetch("http://localhost:8080/people")

  data = await res.json();
  

  element.addEventListener("keyup", search_users);
  search_users();


  function search_users() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    

    for (const [i, _] of Object.entries(data)) {
      let obj = data[i];

      if (obj.name.toLowerCase().includes(input)) {

        // Create Cards For Each Person

        const base_div = document.createElement("div"); // Outer div
        base_div.className = "chip";

        const hitbox_div = document.createElement("div"); // hitbox div
        hitbox_div.className = "hitbox";

        const p_icon_div = document.createElement("div"); // Icon div
        p_icon_div.className = "chip-icon";

        const p_icon = document.createElement("ion-icon"); // Person icon
        p_icon.className = "icon"
        p_icon.setAttribute("name", "person");

        const txt_div = document.createElement("div"); // Text container
        txt_div.className = "text-container";

        const name_p = document.createElement("p"); // Name paragraph
        name_p.className = "card-text";

        // View

        hitbox_div.onclick = async function () {
          document.querySelector('.main').style.display = "none";
          document.querySelector('.container').style.display = "flex";

          document.querySelector(".name-tag").innerHTML = obj.name;

          document.querySelector(".maidenname").innerHTML = "Maiden name: " + obj.maidenname;
          document.querySelector(".age").innerHTML = "Age: " + obj.age;
          document.querySelector(".bday").innerHTML = "Birthdate: " + obj.bday;
          document.querySelector(".address").innerHTML = "Address: " + obj.address;
          document.querySelector(".phone").innerHTML = "Phone: " + obj.phone;
          document.querySelector(".ssn").innerHTML = "SSN: " + obj.ssn;
          document.querySelector(".civilstatus").innerHTML = "Civil stand: " + obj.civilstatus;
          document.querySelector(".kids").innerHTML = "Kids: " + obj.kids;
          document.querySelector(".hobbies").innerHTML = "Hobbies: " + obj.hobbies;
          document.querySelector(".email").innerHTML = "E-Mail: " + obj.email;
          document.querySelector(".occupation").innerHTML = "Occupation: " + obj.occupation;
          document.querySelector(".prevoccupation").innerHTML = "Previous Occupation: " + obj.prevoccupation;
          document.querySelector(".education").innerHTML = "Education: " + obj.education;
          document.querySelector(".military").innerHTML = "Military stand: " + obj.military;
          document.querySelector(".religion").innerHTML = "Religion: " + obj.religion;
          document.querySelector(".pets").innerHTML = "Pets: " + obj.pets;
          document.querySelector(".club").innerHTML = "Club: " + obj.club;
          document.querySelector(".legal").innerHTML = "Legal: " + obj.legal;
          document.querySelector(".political").innerHTML = "Political: " + obj.political;
          document.querySelector(".notes").innerHTML = "Notes: " + obj.notes;

          
          let allObjectsAtStart = document.querySelectorAll(".viewtag");
          
          allObjectsAtStart.forEach(object => {
            object.style.display = "flex";
          });



          // Get all the elements with the class "viewtag" and store them in a variable called "allObjects"
          let allObjects = document.getElementsByClassName("viewtag");

          // Loop through all the objects in the array
          for (let i = 0; i < allObjects.length; i++) {
            
            // Store the current object's HTML in a variable called "item"
            let item = allObjects[i].innerHTML;
            // Get the text from the object's HTML and store it in a variable called "tempText"
            let tempText = item.substring(item.indexOf(':') + 1).trim();

            // Check if the text is empty, null, or undefined
            if (tempText.length <= 0 || tempText == "" || tempText == " " || tempText == null || tempText == undefined || tempText == 0) {
              // Remove the object from the page
              // allObjects[i].remove();

              allObjects[i].style.display = "none";
              // i--;
            }
          }

          


          // Accounts

          if (obj.accounts != null) {
            for (const [i, _] of Object.entries(obj.accounts)) {
              let accObj = obj.accounts[i];
  
              // Creating elements

              const base_div = document.createElement("div"); // Outer div
              base_div.className = "acc-chip";

              const pfp_img = document.createElement("img"); // Pfp img
              pfp_img.className = "userPfp";

              if (accObj.profilePicture != null) {
                pfp_img.src = "data:image/png;base64," + accObj.profilePicture[0];
              } else {
                pfp_img.src = "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
              }

              const info_div = document.createElement("div"); // Info div
              info_div.className = "info-container";

              const service_p = document.createElement("p");
              service_p.className = "serviceName";
              service_p.innerHTML = accObj.service;

              const name_p = document.createElement("p");
              name_p.className = "userName";
              name_p.innerHTML = accObj.username;


              document.querySelector(".accounts").appendChild(base_div);
              base_div.appendChild(pfp_img);
              base_div.appendChild(info_div);
              info_div.appendChild(service_p);
              info_div.appendChild(name_p);

              if (accObj.bio != null) {
                const bio_p = document.createElement("p");
                bio_p.className = "userBio";
                bio_p.innerHTML = accObj.bio[0];

                info_div.appendChild(bio_p);
              }
            }
          }
        }

        const e_icon_div = document.createElement("div"); // Icon div
        e_icon_div.className = "chip-edit";

        e_icon_div.onclick = function () {
          document.querySelector('.main').style.display = "none";
          document.querySelector('.edit-container').style.display = "flex";

          document.querySelector("#e-showid").innerHTML = obj.id;

          document.querySelector(".e-name-tag").innerHTML = obj.name;

          document.querySelector(".e-maidenname").innerHTML = obj.maidenname;
          document.querySelector(".e-age").innerHTML = obj.age;
          document.querySelector(".e-bday").innerHTML = obj.bday;
          document.querySelector(".e-address").innerHTML = obj.address;
          document.querySelector(".e-phone").innerHTML = obj.phone;
          document.querySelector(".e-ssn").innerHTML = obj.ssn;
          document.querySelector(".e-civilstatus").innerHTML = obj.civilstatus;
          document.querySelector(".e-kids").innerHTML = obj.kids;
          document.querySelector(".e-hobbies").innerHTML = obj.hobbies;
          document.querySelector(".e-email").innerHTML = obj.email;
          document.querySelector(".e-occupation").innerHTML = obj.occupation;
          document.querySelector(".e-prevoccupation").innerHTML = obj.prevoccupation;
          document.querySelector(".e-education").innerHTML = obj.education;
          document.querySelector(".e-military").innerHTML = obj.military;
          document.querySelector(".e-religion").innerHTML = obj.religion;
          document.querySelector(".e-pets").innerHTML = obj.pets;
          document.querySelector(".e-club").innerHTML = obj.club;
          document.querySelector(".e-legal").innerHTML = obj.legal;
          document.querySelector(".e-political").innerHTML = obj.political;
          document.querySelector(".e-notes").innerHTML = obj.notes;
        }

        const e_icon = document.createElement("ion-icon"); // Edit icon
        e_icon.className = "icon"
        e_icon.setAttribute("name", "create-outline");

        const acc_icon_div = document.createElement("div"); // Icon div
        acc_icon_div.className = "chip-acc";

        const acc_icon = document.createElement("ion-icon"); // Edit icon
        acc_icon.className = "icon"
        acc_icon.setAttribute("name", "person-circle-outline");

        const d_icon_div = document.createElement("div"); // Icon div
        d_icon_div.className = "chip-delete";

        const d_icon = document.createElement("ion-icon"); // Edit icon
        d_icon.className = "icon"
        d_icon.setAttribute("name", "trash-outline");

        d_icon_div.onclick = function () {
          fetch("http://localhost:8080/people/" + obj.id + "/delete", {
            method: "GET",
            mode: "no-cors"
          });
        }

        acc_icon_div.onclick = function () {
          document.querySelector("#e-showid").innerHTML = obj.id;
          document.querySelector('.main').style.display = "none";
          document.querySelector('.acc-container').style.display = "flex";
        }

        document.getElementById("acc-searchbtn").onclick = search; 

        document.getElementById("acc-name-tag").onkeypress = function(event) {
          // Check if the pressed key is the Enter key
          if (event.key === "Enter") {
            event.preventDefault();
            // Execute the search function
            search();
          }

          if (event.key == " ") {
            event.preventDefault();
          }
        };

        let isButtonEnabled = true;

        async function search() {
          if (document.getElementById("acc-name-tag").textContent == "") {
            return;
          }
          // Check if the button is enabled
          if (!isButtonEnabled) {
            return;
          }

          // Disable the button
          isButtonEnabled = false;

          document.getElementById("loading-spinner").style.display = "inline-block";

          // Set the flag to indicate that a request is in progress
          const response = await fetch('http://localhost:8080/getAccounts/' + document.getElementById("acc-name-tag").textContent);
          const data = await response.json();
      
          const term_container = document.createElement("div");
          term_container.className = "term-container";
      
          const term_header = document.createElement("p");
          term_header.className = "term-header";
          term_header.innerHTML = document.getElementById("acc-name-tag").innerHTML;

          term_container.appendChild(term_header);

          let amountOfReturnedAccounts = Object.entries(data).length;

          if (amountOfReturnedAccounts >= 1) {
            document.getElementById("acc-no-results").style.display = "none";

            const row_div = document.createElement("div");
            row_div.className = "acc-row";

            document.getElementById("accounts").appendChild(row_div);


            for (const [i, _] of Object.entries(data)) {
              let accObj = data[i];
        
              const manage_acc_chip = document.createElement("div");
              manage_acc_chip.className = "manage-acc-chip"
        
              const outer_div = document.createElement("div");
              outer_div.className = "acc-chip";
        
              const user_pfp = document.createElement("img");
              user_pfp.className = "userPfp";
        
              if (accObj.profilePicture != null) {
                user_pfp.src = "data:image/png;base64," + accObj.profilePicture[0];
              } else {
                user_pfp.src = "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg";
              }
        
              const info_container = document.createElement("div");
              info_container.className = "info-container";
        
              const service_name = document.createElement("p");
              service_name.className = "serviceName";
              service_name.innerHTML = accObj.service;
        
              const user_name = document.createElement("a");
              user_name.className = "userName";
              user_name.innerHTML = accObj.username;
              user_name.href = accObj.url;
              user_name.target = "_blank";
        
              row_div.appendChild(term_container);
              term_container.appendChild(manage_acc_chip);
              manage_acc_chip.appendChild(outer_div);
              outer_div.appendChild(user_pfp);
              outer_div.appendChild(info_container);
              info_container.appendChild(service_name);
              info_container.appendChild(user_name);
        
              if (accObj.bio != null) {
                const user_bio = document.createElement("p");
                user_bio.className = "userBio";
                user_bio.innerHTML = accObj.bio[0];
        
                info_container.appendChild(user_bio);
              }
        
              const btn_container = document.createElement("div");
              btn_container.className = "manage-btn-container";
        
              const reject_btn = document.createElement("div");
              reject_btn.id = "acc-rejectbtn";
              reject_btn.className = "btn btn-secondary";
        
              const reject_p = document.createElement("p");
              reject_p.innerHTML = "Reject";
        
              const accept_btn = document.createElement("div");
              accept_btn.id = "acc-acceptbtn";
              accept_btn.className = "btn btn-secondary";
        
              const accept_p = document.createElement("p");
              accept_p.innerHTML = "Accept";
        
              manage_acc_chip.appendChild(btn_container);
              btn_container.appendChild(reject_btn);
              btn_container.appendChild(accept_btn);
              reject_btn.appendChild(reject_p);
              accept_btn.appendChild(accept_p);
  
              
        
              accept_btn.onclick = async function () {
                // Check if accObj.service and accObj.username are also in accounts object at obj.accounts
                let getId = document.getElementById("e-showid").innerHTML
  
                fetch("http://localhost:8080/people/" +  getId + "/addAccount", {
                  method: 'POST',
                  body: JSON.stringify(accObj)
                });
  
                accept_p.innerHTML = "Accepted!";
              }
  
              reject_btn.onclick = async function () {
                let elementCount = term_container.childElementCount;
  
                if (elementCount > 2) {
                  manage_acc_chip.remove();
                } else {
                  row_div.remove();
                }
              }
            }
          } else {
            // No accounts found

            if (document.getElementById("accounts").childElementCount <= 0) {
              document.getElementById("acc-no-results").style.display = "flex";
            }
          }


          document.getElementById("loading-spinner").style.display = "none";
          isButtonEnabled = true;
        }

        base_div.appendChild(hitbox_div);
        hitbox_div.appendChild(p_icon_div);
        hitbox_div.appendChild(txt_div);
        txt_div.appendChild(name_p);

        base_div.appendChild(e_icon_div);
        base_div.appendChild(acc_icon_div);
        base_div.appendChild(d_icon_div);
        p_icon_div.appendChild(p_icon);
        e_icon_div.appendChild(e_icon);
        acc_icon_div.appendChild(acc_icon);
        d_icon_div.appendChild(d_icon);


        name_p.innerHTML = `${obj.name}`
        x.appendChild(base_div);
      }
    }

    if (x.childElementCount <= 0) {
      document.getElementById("base-no-results").style.display = "flex";
    } else {
      document.getElementById("base-no-results").style.display = "none";
    }

    console.log(x.childElementCount);
  }



  document.getElementById("backbtn").onclick = function () { // back button in view ig
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.container').style.display = "none";

    var elements = document.getElementsByClassName("acc-chip");

    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  document.getElementById("newbtn").onclick = function () {
    document.querySelector('.main').style.display = "none";
    document.querySelector('.create-container').style.display = "flex";
  }

  document.getElementById("e-backbtn").onclick = function () {
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.edit-container').style.display = "none";
  }

  document.getElementById("e-backbtn").onclick = function () {
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.edit-container').style.display = "none";
  }

  document.getElementById("c-backbtn").onclick = function () {
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.create-container').style.display = "none";
  }

  document.getElementById("acc-backbtn").onclick = function () { // account back button
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.acc-container').style.display = "none";
  }

  // CREATE

  document.getElementById("c-savebtn").onclick = function () { // new document save button
    let totalIds = Object.keys(data).length;
    let preId = String(totalIds + 1);

    //A function to check if the data list includes that id already, if it does, it should add one until it doesnt exist
    function checkId(preId) {
      let idExists = false;

      for (let i = 0; i < totalIds; i++) {
        if (Object.keys(data)[i] == preId) {
          idExists = true;
          break;
        }
      }

      if (idExists) {
        preId = String(parseInt(preId) + 1);
        return checkId(preId);
      }
      return preId;
    }

    let id = checkId(preId);

    let name = document.querySelector(".c-name-tag").innerHTML;

    let maidenname = document.querySelector(".c-maidenname").innerHTML;
    let age = parseInt(document.querySelector(".c-age").innerHTML);
    let bday = document.querySelector(".c-bday").innerHTML;
    let address = document.querySelector(".c-address").innerHTML;
    let phone = document.querySelector(".c-phone").innerHTML;
    let ssn = document.querySelector(".c-ssn").innerHTML;
    let civilstatus = document.querySelector(".c-civilstatus").innerHTML;
    let kids = document.querySelector(".c-kids").innerHTML;
    let hobbies = document.querySelector(".c-hobbies").innerHTML;
    let email = document.querySelector(".c-email").innerHTML;
    let occupation = document.querySelector(".c-occupation").innerHTML;
    let prevoccupation = document.querySelector(".c-prevoccupation").innerHTML;
    let education = document.querySelector(".c-education").innerHTML;
    let military = document.querySelector(".c-military").innerHTML;
    let religion = document.querySelector(".c-religion").innerHTML;
    let pets = document.querySelector(".c-pets").innerHTML;
    let club = document.querySelector(".c-club").innerHTML;
    let legal = document.querySelector(".c-legal").innerHTML;
    let political = document.querySelector(".c-political").innerHTML;
    let notes = document.querySelector(".c-notes").innerHTML;

    fetch('http://localhost:8080/people', {
      method: 'POST',
      body: JSON.stringify({ "id": id, "maidenname": maidenname, "name": name, "age": age, "bday": bday, "address": address, "phone": phone, "ssn": ssn, "civilstatus": civilstatus, "kids": kids, "hobbies": hobbies, "email": email, "occupation": occupation, "prevoccupation": prevoccupation, "education": education, "military": military, "religion": religion, "pets": pets, "club": club, "legal": legal, "political": political, "notes": notes })
    });
  }

  // EDIT

  document.getElementById("e-savebtn").onclick = function () {
    let id = document.querySelector("#e-showid").innerHTML;

    let name = document.querySelector(".e-name-tag").innerHTML;

    let maidenname = document.querySelector(".e-maidenname").innerHTML;
    let age = parseInt(document.querySelector(".e-age").innerHTML);
    let bday = document.querySelector(".e-bday").innerHTML;
    let address = document.querySelector(".e-address").innerHTML;
    let phone = document.querySelector(".e-phone").innerHTML;
    let ssn = document.querySelector(".e-ssn").innerHTML;
    let civilstatus = document.querySelector(".e-civilstatus").innerHTML;
    let kids = document.querySelector(".e-kids").innerHTML;
    let hobbies = document.querySelector(".e-hobbies").innerHTML;
    let email = document.querySelector(".e-email").innerHTML;
    let occupation = document.querySelector(".e-occupation").innerHTML;
    let prevoccupation = document.querySelector(".e-prevoccupation").innerHTML;
    let education = document.querySelector(".e-education").innerHTML;
    let military = document.querySelector(".e-military").innerHTML;
    let religion = document.querySelector(".e-religion").innerHTML;
    let pets = document.querySelector(".e-pets").innerHTML;
    let club = document.querySelector(".e-club").innerHTML;
    let legal = document.querySelector(".e-legal").innerHTML;
    let political = document.querySelector(".e-political").innerHTML;
    let notes = document.querySelector(".e-notes").innerHTML;


    fetch('http://localhost:8080/people', {
      method: 'POST',
      body: JSON.stringify({"id": id, "maidenname": maidenname, "name": name, "age": age, "bday": bday, "address": address, "phone": phone, "ssn": ssn, "civilstatus": civilstatus, "kids": kids, "hobbies": hobbies, "email": email, "occupation": occupation, "prevoccupation": prevoccupation, "education": education, "military": military, "religion": religion, "pets": pets, "club": club, "legal": legal, "political": political, "notes": notes })
    });

    document.getElementById("e-savebtn-p").innerHTML = "Saved!";
    delay(1000).then(() => document.getElementById("e-savebtn-p").innerHTML = "Save");
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.edit-container').style.display = "none";
  }
}

main()

document.querySelectorAll("span").forEach(function (element) {
  element.addEventListener('paste', function (e) {
    // Prevent the default action
    e.preventDefault();

    // Get the copied text from the clipboard
    const text = e.clipboardData
      ? (e.originalEvent || e).clipboardData.getData('text/plain')
      : // For IE
      window.clipboardData
      ? window.clipboardData.getData('Text')
      : '';

    if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertText', false, text);
    } else {
      // Insert text at the current position of caret
      const range = document.getSelection().getRangeAt(0);
      range.deleteContents();

      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.selectNodeContents(textNode);
      range.collapse(false);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});

[document.getElementById("c-name-tag"), document.getElementById("acc-name-tag")].forEach(item => {
  item.addEventListener('paste', function (e) {
    // Prevent the default action
    e.preventDefault();
  
    // Get the copied text from the clipboard
    const text = e.clipboardData
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        : // For IE
        window.clipboardData
        ? window.clipboardData.getData('Text')
        : '';
  
    if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
    } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();
  
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);
  
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
  });
});