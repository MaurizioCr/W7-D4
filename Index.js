// const apikey='zl7AO53gK6lCFAAG3H0ZdNqHi4wodq8DyjROlZuDpwW40z4H8hQgPtFp'
// fetch('https://api.pexels.com/v1/dog', {
//     headers: {
//         'Authorization': apikey
//       }
// })
//       .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         else{
//             throw new Error('General Error');
//         }
//       })
//       .then(images => {
//         displayBooks(images);
//         console.log(images)
//       })
//       .catch(error => {
//         console.log(error)
//       });
//       function displayBooks(images) {
//         const container = document.getElementById('imageContainer');
        
//         images.forEach(image => {
//           const imageCard = document.createElement('div');
//           container.classList.add('col-12', 'col-md-6', 'col-lg-4', 'xl-3');
//           container.innerHTML = `<div class="card mb-5">
//           <img src="${image.url} class="card-img-top" alt="Copertina libro">
//           <div class="card-body">
//             <h5 class="card-title">ciao</h5>
//             <p class="card-text">Prezzo:prova</p>
//             <button class="btn btn-danger" id="remove" onclick="removeCard(this)">Scarta</button>
//           </div>
//         </div>
//       `;
//       container.appendChild(imageCard);
//     });
//   }
const apiKey = 'zl7AO53gK6lCFAAG3H0ZdNqHi4wodq8DyjROlZuDpwW40z4H8hQgPtFp'; 

function loadImages() {
  const url = 'https://api.pexels.com/v1/search?query=dogs';

  fetchImages(url);
}

function loadSecondaryImages() {
  const secondaryQuery = 'https://api.pexels.com/v1/search?query=cats'; 
  const url = `https://api.pexels.com/v1/search?query=${secondaryQuery}`;

  fetchImages(url);
}

function fetchImages(url) {
    fetch(url, {
      headers: {
        'Authorization': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      data.photos.forEach(photo => {
        const card = createCard(photo);
        imageContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching images:', error));
  }
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';


function createCard(photo) {
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');

  const cardContent = `
    <div class="card">
      <img src="${photo.src.medium}" class="card-img-top" alt="Image">
      <div class="card-body">
        <p class="card-text">ID: ${photo.id}</p>
        <p class="card-text">Photographer: ${photo.photographer}</p>
        <a href="${photo.photographer_url}" target="_blank" class="btn btn-primary">Photographer Profile</a>
        <button class="btn btn-danger mt-2" onclick="hideCard(this)">Hide</button>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  return card;
}

function searchImages() {
  const searchQuery = document.getElementById('searchInput').value;
  const url = `https://api.pexels.com/v1/search?query=${searchQuery}`;

  fetchImages(url);
}

function hideCard(button) {
  const card = button.closest('.col-md-4');
  card.style.display = 'none';
}
