const modeToggle = document.getElementById("modeToggle");
const body = document.body;

function updateButtonText() {
  if(body.classList.contains("dark")){
    modeToggle.textContent = "มืด";
  } else {
    modeToggle.textContent = "สว่าง";
  }
}

// โหลดครั้งแรก
if(localStorage.getItem("theme") === "dark"){
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}
updateButtonText();

modeToggle.addEventListener("click", ()=>{
  modeToggle.classList.add("toggle-animate");
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else {
    localStorage.setItem("theme","light");
  }
  updateButtonText();
  setTimeout(()=> modeToggle.classList.remove("toggle-animate"), 300);
});
