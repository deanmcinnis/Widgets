var x = location.origin;
console.log(x);


/*
  
   
   myRequest.onload = function() {
        if (myRequest.status >= 200 && myRequest.status < 400) {
            var myData = JSON.parse(myRequest.responseText);
            createHTML(myData);
        } else {
            console.log("We connected to the server but had an error");
        }
    };
    
    myRequest.onerror = function() {
        console.log("Connection error");
        alert(`Error ${myRequest.status}: ${myRequest.statusText}`);
    }
    myRequest.send();
    */
//async function getData() {
//  var response = await fetch(window.location.origin + "/api/orders",
 //   {
 //     method: "GET",
 //     headers: {
  //      "Accept": "application/json",
  //      "Content-Type": "application/json",
 //     },
//    });

//console.log("in this main area now");

async function getData() {
    var response = await fetch("testdata.json");
    var myData = await response.json();
    console.log("myData: ", myData);
   console.log("fieldtype: ",myData.questions[0].fieldtype);
    createHTML(myData);
    
  };

 // Handelbars.registerHelper("calculateAge", funtion() {
 //   return "testing 123";
 // };

function createHTML(jsonData) {
    var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
  //  console.log("here in createhtml");

};