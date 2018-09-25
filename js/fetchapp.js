// http://api.petfinder.com/my.method?key=12345&arg1=foo

// Promise.all([ fetchData('http://api.petfinder.com/breed.list?key=de0b855a21fffe3092ffa55ef2dfb18c.json')
// ]);


const select = document.querySelector('#breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(response) {
  if (xhr.readyState === 4 && 200) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
}

xhr.open('GET','http://api.petfinder.com/breed.list?key=de0b855a21fffe3092ffa55ef2dfb18c.jsonp');
$.ajax({
  url: 'http://api.petfinder.com/breed.list?format=json&key=de0b855a21fffe3092ffa55ef2dfb18c&animal="dog"',
  headers: {
      'URL': 'http://api.petfinder.com',
      'Access-Control-Allow-Origin': 'http://api.petfinder.com',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
      'Authorization': '3bce7822214549c5cb517ff8baccfb8b',
      'Cache-Control': 'no-cache',
      'Postman-Token': 'c1972bc8-4159-49b8-aefe-9e5caeb09a56',
      'Content-Type':'application/jsonp'
  },
  method: 'GET',
  dataType: 'jsonp'
});
xhr.send();





// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------




// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------




// ------------------------------------------
//  POST DATA
// ------------------------------------------

/*
GET: /breed.list?format=json&amp;key=de0b855a21fffe3092ffa55ef2dfb18c&amp;animal=dog HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: api.petfinder.com
X-Amz-Date: 20180925T001401Z
Authorization: AWS4-HMAC-SHA256 Credential=/20180925/us-east-1/execute-api/aws4_request, SignedHeaders=access-control-allow-origin;cache-control;content-type;host;postman-token;x-amz-date, Signature=759ff4469053ffba12ca89347c4dcb7011eeece3a905cb49f0b1e2c1ec9b1d82
Cache-Control: no-cache
Postman-Token: 7bef8098-2b8f-4aee-ad47-8395d2878fb5
*/