
function populate (s1,s2)
{
  var s1=document.getElementById('slct1');
  var s2=document.getElementById('slct2');
 
  
   s2.innerHTML = "";
   if(s1.value == "Pune")
   { 
     var optionArray=["select|Select","nursing|Nursing","clinical medicine|Clinical Medicine","family medicine|Family Medicine","public health|Public Health"];
   }
   else if(s1.value == "Mumbai")
   {
    var optionArray=["select|Select","law|Law"];
   }
   else if(s1.value == "Nagpur")
   {
    var optionArray=["select|Select","commerce|Commerce","economics|Economics","hospitality & tourism|Hospitality & Tourism"];
   }
   else if(s1.value == "Nashik")
   {
    var optionArray=["select|Select","music theory|Music Theory","production|Production"];
   }
   else if(s1.value == "Aurangabad")
   {
    var optionArray=["select|Select","computer science & information technology|Computer Science & Information Technology","biological & physical sciences|Biological & Physical Sciences","mathematics & actuarial science|Mathematics & Actuarial Science"];
   }
   else if(s1.value == "Solapur")
   {
    var optionArray=["select|Select","education|Education","mass communiacation|Mass Communication","theology|Theology",];
   }
   else if(s1.value=="Satara")
   {
    var optionArray=["select|Select","pharmacy|Pharmacy",];
   }
   

   for(var option in optionArray)
   {
     var pair = optionArray[option].split("|");
     var newOption = document.createElement("option");
     newOption.value = pair[0];
     newOption.innerHTML = pair[1];
   s2.options.add(newOption);

   }
   
}



function populated(c1,c2)
{
  var c1=document.getElementById(c1);
  var c2=document.getElementById(c2);
 
    c2.innerHTML = "";
   if (c1.value == "nursing")
   { 
     var optionArray = ["select|Select","bsc nursing|Bsc Nursing","diploma in nursing|Diploma in Nursing"];
   }
   else if (c1.value == "clinical medicine")
   { 
     var optionArray = ["select|Select","bsc clinical medicine|Bsc Clinical Medicine","diploma in clinical medicine|Diploma in Clinical Medicine "];
   }
    else if (c1.value == "family medicine")
   { 
     var optionArray = ["select|Select","bsc family medicine|Bsc Family Medicine","diploma in family medicine|Diploma in Family Medicine"];
   }
   else if (c1.value == "clinical medicine")
   { 
     var optionArray = ["select|Select","bsc public health|Bsc Public Health","diploma in public health|Diploma in Public Health"];
   }
    else if (c1.value == "law")
     { 
       var optionArray = ["select|Select","bsc law|Bsc Clinical Law","diploma in law|Diploma in Law"];
     }
     else if (c1.value == "economics")
   { 
     var optionArray = ["select|Select","bsc economics|Bsc Economics","diploma in economics|Diploma in Economics"];
   }
   else if (c1.value == "production")
   { 
     var optionArray = ["select|Select","bsc production|Bsc Production","diploma in production|Diploma in Production"];
   }
   else if (c1.value == "computer science & information technnology")
   { 
     var optionArray = ["select|Select","bsc comp science|Bsc Comp Science","diploma in comp science|Diploma in Comp Science"];
   }
   else if (c1.value == "education")
   { 
     var optionArray = ["select|Select","bsc education|Bsc Education","diploma in education|Diploma in education"];
   }
   else if (c1.value == "theology")
   { 
     var optionArray = ["select|Select","ba theology |BA Theology","diploma in theology|Diploma in Theology"];
   }
   else if (c1.value == "pharmacy")
   { 
     var optionArray = ["select|Select","bsc pharmacy|Bsc Pharmacy","diploma in pharmacy|Diploma in Pharmacy"];
   }



   for(var option in optionArray)
   {
     var pair = optionArray[option].split("|");
     var newOption = document.createElement("option");
     newOption.value = pair[0];
     newOption.innerHTML = pair[1];
   c2.options.add(newOption);

   }

}


document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(this);

  // Perform form validation
  const password = formData.get('password'); // Make sure 'password' matches the actual name or ID of your password input field
  const pincode = formData.get('pincode'); // Make sure 'name2' matches the actual name or ID of your pincode input field
  const mobilenum = formData.get('mobilenum'); // Make sure 'Mobile no. name3' matches the actual name or ID of your phone input field
  const dob = formData.get('dob'); // Make sure 'dob' matches the actual name or ID of your date of birth input field
  const namemain = formData.get('namemain'); // Add this line for name validation
  
  // Validate name (no symbols or numbers)
  if (!/^[a-zA-Z\s]+$/.test(namemain)) {
    alert('Name should only contain alphabets and spaces');
    return;
  }

  if (password.length < 7) {
    alert('Password must be at least 7 characters long');
    return;
  }

  if (pincode.length !== 6) {
    alert('Pincode must be exactly 6 characters');
    return;
  }

  if (mobilenum.length !== 10) {
    alert('Phone number must be exactly 10 characters');
    return;
  }

  // Add additional validation for Date of Birth
  const dobDate = new Date(dob);
  const maxAllowedDate = new Date('01-01-2004');

  if (dobDate >= maxAllowedDate) {
    alert('Date of Birth cannot be after 2003-01-01');
    return;
  }

  // Send the POST request to a fake server
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // assuming the server returns JSON
    })
    .then(data => {
      // Handle the response from the fake server
      alert('Your details have been submitted!');
      console.log(data); // log the server response
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});



