

let searchQuery = ""
const clientId = '51d64c8655ac46de89787c7d9419e642';
const clientSecret = '012746bf0b5e4c61b28bb7dee1cbe746';
let toKen = ""


function xookmyoan(){

  field1Value = document.getElementById("Username").value;
  field2Value = document.getElementById("prompt").value;
  searchQuery = field2Value;
  
  var errorMessage = document.getElementById("errorMessage");

  if (field1Value === "" || field2Value === "" ) {
    errorMessage.innerHTML = "Please fill in both fields.";
    return false;
  } 

  document.getElementById("input").style.display = "none";
  document.getElementById("output").style.display = "flex";
  console.log(field2Value)
  workAPI()
}





const getToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve bearer token');
    }

    const data = await response.json();
    const access_token= data.access_token;
    return access_token
  } catch (error) {
    console.error('Error:', error.message);
  }
};





function workAPI(){
  getToken()
  .then((result) => {
    const token = result;
    return token; // Return the value for subsequent chaining
  })
  .then((token) => {
    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(field2Value)}&type=album`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const randomNumber = Math.floor(Math.random()*10)
    document.getElementById("kjk").setAttribute('href', data.albums.items[randomNumber].external_urls.spotify);
    const imageUrl = data.albums.items[randomNumber].images[0].url; // Replace with the correct path to the image URL

    document.getElementById("xook").style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
  })
  .catch((error) => {
    // Handle any errors that occur during the Promise chain
    console.error(error);
  });


  
}