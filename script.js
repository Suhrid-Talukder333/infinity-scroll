const imageContainer = document.getElementById("image-container");
const loading = document.getElementById("loader");

let photos = [];

const count = 10;
const key = "FweRK-j93w4Fsdvi0Ki6ucRE_fthHQATkHRC0LN1Ri0";

let loadImage = true;

const displayPhotos = () => {
  photos.forEach((item) => {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", item.links.html);
    linkElement.setAttribute("target", "_blank");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.urls.regular);
    imgElement.setAttribute("alt", item.alt_description);
    imgElement.setAttribute("title", item.alt_description);
    linkElement.appendChild(imgElement);
    imageContainer.appendChild(linkElement);
  });
};

const getImage = async () => {
  loadImage = false;
  loading.hidden = false;
  try {
    const data = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`
    );
    const jsonData = await data.json();
    photos = jsonData;
    displayPhotos();
    loading.hidden = true;
    loadImage = true;
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1500 &&
    loadImage
  ) {
    getImage();
  }
});

getImage();
