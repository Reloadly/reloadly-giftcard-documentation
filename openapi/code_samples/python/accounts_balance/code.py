import requests

url = "https://giftcards.reloadly.com/accounts/balance"

payload={}
headers = {
  'Accept': 'application/com.reloadly.giftcards-v1+json',
  'Authorization': 'Bearer eyJraXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)