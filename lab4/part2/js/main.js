const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];
function updateDisplayedImage(Image){
        displayedImage.setAttribute("src", Image.getAttribute("src"));
        displayedImage.setAttribute("alt", Image.getAttribute("alt") );
}
function toggleDarkMode() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");     
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }   
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }   
}
const baseURL = "./images/";
for (const image of images) {
    const filename = image.filename;
    const alt = image.alt;
    //console.log(`filename: ${filename}, alt: ${alt}`);
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", baseURL + filename);
    imageElement.setAttribute("alt", alt);
    imageElement.setAttribute("tabindex", "0");

    imageElement.addEventListener("click", () => updateDisplayedImage(imageElement));
    imageElement.addEventListener("focus", () => {
        displayedImage.setAttribute("src", baseURL + filename);
        displayedImage.setAttribute("alt", alt);
    }); 
    thumbBar.appendChild(imageElement);
   
  }
  btn.addEventListener("click", toggleDarkMode);