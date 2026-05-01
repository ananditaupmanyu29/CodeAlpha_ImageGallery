let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item img");

function filterImages(category, event){
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filters button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item=>{
        if(category === "all" || item.classList.contains(category)){
            item.style.display="block";
        } else {
            item.style.display="none";
        }
    });
}

function openLightbox(index){
    currentIndex = index;
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src = images[index].src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function changeImage(step){
    currentIndex += step;
    if(currentIndex < 0) currentIndex = images.length - 1;
    if(currentIndex >= images.length) currentIndex = 0;

    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";

    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }
    if(!/^[0-9]{10}$/.test(phone)){
        document.getElementById("phoneError").innerText = "Enter valid 10-digit number";
        valid = false;
    }
    if(!email.includes("@")){
        document.getElementById("emailError").innerText = "Enter valid email with @";
        valid = false;
    }
    if(valid){
        alert("Form Submitted Successfully!");
    }
});
