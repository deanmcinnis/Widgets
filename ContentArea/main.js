
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
  var response = await fetch("testdata.json");
  var myData = await response.json();
  console.log("myData: ", myData);
  createHTML(myData);
}







function createHTML(jsonData) {
   var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
//console.log("in function");
//console.log("json data = ",jsonData);
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
};

