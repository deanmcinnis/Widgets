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

async function getData() {
    var response = await fetch("testdata.json");
    var myData = response.json();
    console.log("myData: ", myData);
    createHTML(myData);
  }


function createHTML(Data) {
    var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
    console.log("here in createhtml");

};