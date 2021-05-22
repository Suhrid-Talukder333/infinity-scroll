const count = 10;
const key = "FweRK-j93w4Fsdvi0Ki6ucRE_fthHQATkHRC0LN1Ri0";

const getImage = async () => {
  try {
    const data = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`
    );
    const jsonData = await data.json();
    console.log(jsonData);
  } catch {
    alert("Fetch Error");
  }
};

getImage();
