// function onformsubmit(){
//     var formData = readname();
//     insertrecord(formData);
// }

// function readname(){
//     var formData = {};
//     formData["fname"] = document.getElementById("fname").value;
//     formData["lname"] = document.getElementById("lname").value;
//     return formData;
// }

// function insertrecord(data){
//     var table = document.getElementById("display").getElementsByTagName('tbody')[0];
//     var newrow = table.insertRow(table.length);
//     var cell1 = newrow.insertCell(0);
//         cell1.innerHTML = data.fname;
//     var cell4 = newrow.insertCell(3);
//         cell4.innerHTML = `<button>Delete</button>`;
// }

//Fullname
// function fullName(){
//     var fn = document.getElementById("fname").value;
//     var ln = document.getElementById("lname").value;
//     var fnln = fn+ " " +ln;
//     document.getElementById('result').innerHTML=fnln;

//     var dob = document.getElementById("dob").value;
//     var birthday = +new Date(dob);
//     var res1 = ~~((Date.now() - birthday) / (31557600000));
//     document.getElementById('age').innerHTML=res1;
    
//     var country = document.getElementById("country").value;
//     var state = document.getElementById("state").value;
//     var city = document.getElementById("city").value;
//     var zip = document.getElementById("zip").value;
//     var cscz = country+ " " +state+ " " +city+ " "+zip;
//     document.getElementById('address').innerHTML=cscz;
    
// }

const one = document.querySelector("form");
const two = document.querySelector("tbody");
const three = document.querySelector("table");
function onAdd(e)
{
        e.preventDefault();
        var fn = document.getElementById("fname").value;
        var ln = document.getElementById("lname").value;
        var fullname = fn + " " +ln;
  
        var dob = document.getElementById("dob").value;
        var birthday = +new Date(dob);
        var res1 = ~~((Date.now() - birthday) / (31557600000));
       
        var country = document.getElementById("country").value;
        var state = document.getElementById("state").value;
        var city = document.getElementById("city").value;
        var zip = document.getElementById("zip").value;
        var fulladd = country+ " " +state+ " " +city+ " "+zip;
        two.innerHTML += `
            <tr>
                <td>${fullname}</td>
                <td>${res1}</td>
                <td>${fulladd}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
      }
      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
      }
      one.addEventListener("submit", onAdd);
      three.addEventListener("click", onDeleteRow);
   