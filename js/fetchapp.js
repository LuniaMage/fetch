// http://api.petfinder.com/my.method?key=12345&arg1=foo

// Promise.all([ fetchData('http://api.petfinder.com/breed.list?key=de0b855a21fffe3092ffa55ef2dfb18c.json')
// ]);


// function fetchData(url) {
//   return fetch(url)
//   .then(checkStatus) 
//   .then(res => res.json())
//   .then(data => console.log(data));
// }

const select = document.querySelector('#breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------



function fetchData(url) {
    const configGet = {
      method: GET /breed.list/ HTTP/1.1
      host: api.petfinder.com,
      x-api-key: de0b855a21fffe3092ffa55ef2dfb18c,
      authorization: 3bce7822214549c5cb517ff8baccfb8b,
      Content-Type: application/json,
      Access-Control-Allow-Origin: 'api.petfinder.com',
      Cache-Control: no-cache,
      Postman-Token: 28064c77-f09d-4ce4-9061-f534680bf6d1
    };
      
      return fetch(url,configGet)
        .then(response => console.log(response));
  }

   
// }
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------




// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------




// ------------------------------------------
//  POST DATA
// ------------------------------------------