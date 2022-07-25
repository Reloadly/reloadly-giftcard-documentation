var myHeaders = new Headers();
myHeaders.append("Accept", "application/com.reloadly.giftcards-v1+json");
myHeaders.append("Authorization", "Bearer eyJraXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://giftcards.reloadly.com/accounts/balance", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));