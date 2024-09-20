document.querySelector('button').addEventListener('click',getArt)

function getArt () {
  let art = document.querySelector('input').value
  
  //search for art number i.e search for 129884 to get Starry Night 
  
  const trimArt = art;
  const encodedName = encodeURIComponent(trimArt);  // Encode the contributor's name
  const url = `https://api.artic.edu/api/v1/artworks/${encodedName}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const imageId = data.data.image_id;
      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
      
      document.querySelector('img').src = imageUrl;
      document.querySelector('#title').innerText = data.data.title;
      document.querySelector('#artist').innerText = data.data.artist_display;
      document.querySelector('#medium').innerText = data.data.medium;
      document.querySelector('#desc').innerText = data.data.short_description;

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
  }