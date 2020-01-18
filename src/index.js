const divDropContent = document.getElementById('dropdown-genera')
const divPlantContent = document.getElementById('dropdown-plants')
const genusButton = document.getElementById('button-genera')
const plantButton =  document.getElementById('button-plant')



fetch("http://localhost:3000/families")
.then((resp) => {
  return resp.json()
})
.then((familyArray) => {
  familyArray.forEach((family) => {
    familyNameOnDrp(family)
    plantNameOnDrp(family)
  })

//------------------Genus Name ----------------------------------------//
  genusButton.addEventListener("click", (evt) => {
//line 17 can be rewritten as evt.target.nextElementSibling.className.includes("show")
    if (divDropContent.className.includes("show")){
     divDropContent.classList.remove("show")
   } else {
     divDropContent.classList.add("show")
   }
 }) // end of addEventListener

//================PLant Name ==========================================//
  plantButton.addEventListener("click", (evt) => {

    if (divPlantContent.className.includes("show")){
      divPlantContent.classList.remove("show")
    } else {
      divPlantContent.classList.add("show")
    }

  }) // end of addEventListener of plant button

})  // end of first fetch


//====================genusName addEventListener ====================//
function familyNameOnDrp(family){
    const genusName = document.createElement("a")
    genusName.innerText = family.name
    divDropContent.appendChild(genusName)

    genusName.addEventListener("click", (evt) => {
      console.log("click me");
    })
}





//====================plantName addEventListener ====================//
function plantNameOnDrp(family){
  family.plants.forEach((plantObj) => {
    const plantName = document.createElement("a")
    plantName.innerText = plantObj.name
    divPlantContent.appendChild(plantName)
  })
}
