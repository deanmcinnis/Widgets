
var x = location.origin;
console.log(x);


/*
    var myRequest = new XMLHttpRequest();
   // myRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
   myRequest.open('GET', '127.0.0.1\\C:\Users\dean\Desktop\go-workspace\src\Widgets\ContentArea\testdata.json'); 
   myRequest.responseType = 'json' ;
  
   
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
async function getData() {
  var response = await fetch("http://localhost:8080/C:\Users\dean\Desktop\go-workspace\src\Widgets\ContentArea\testdata.json", {
    mode: 'no-cors'}).then(function(response) {
        console.log(response.type); // "opaque"
        });







  var myMode = response.mode; // returns "cors" by default
  console.log(myMode);
  response.setRequestHeader("Access-Control-Allow-Origin", "*");
   var myData = response.json();
  console.log("myData: ", myData);
};

function createHTML(Data) {
    var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(Data);

    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
};

