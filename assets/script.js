const defaultBtn = document.getElementById("default-btn");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
customBtn.addEventListener("click", function(){
    defaultBtn.click();
});
defaultBtn.addEventListener("change", function() {
    if (defaultBtn.value) {
        customTxt.innerHTML = defaultBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customTxt.innerHTML = "No photo uploaded, yet.";
    }
     
});



function addNewProduct (){
    const cost = document.getElementById("productCost").value;
    const Description =document.getElementById("productDescription").value;
    const photo = document.getElementById("default-btn").value;
    let results = photo + Description + cost;
    let display = document.getElementById("result").textContent;
    display.textContent = results

}
