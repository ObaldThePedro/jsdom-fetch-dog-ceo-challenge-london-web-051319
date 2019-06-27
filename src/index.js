console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json))
  }

  function fetchDogBreeds(){
    return fetch(breedUrl)
    .then(breedsData => breedsData.json())
    .then(json => renderDogBreeds(json))
  }
  
   function renderDogs(dogsArray) {
      const div = document.querySelector("#dog-image-container")
      dogsArray.message.forEach(dog => {
        const img = document.createElement("img")
        img.src = `${dog}`
        div.appendChild(img)
      })
  }
  function renderDogBreeds(breedsArray){
    let dropdown = document.getElementById("breed-dropdown");
    const ul = document.getElementById("dog-breeds");
    let breeds = breedsArray.message;
    let breeds_keys = Object.keys(breeds);
    
    const renderBreeds = () => {
      while(ul.hasChildNodes())
      {
        ul.removeChild(ul.firstChild);
      }
      let option_selected = getSelectedTextValue(dropdown);
      let new_array = breeds_keys.filter(breed => breed[0] === option_selected);
      
    new_array.forEach(breed =>
    {
      const li = document.createElement("li")
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener("click", function(){
        if(li.style.color === 'black')
        {li.style.color = 'red';}
        else{
        li.style.color = 'black'
        }
      })
    })
    }
    renderBreeds();
    dropdown.addEventListener('change',(e) =>
    {

      renderBreeds();
   
  })
  }

  function getSelectedTextValue(dropdown)
  {
    let selectedText = dropdown.options[dropdown.selectedIndex].innerHTML; 
    return selectedText;
  }
  document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
    fetchDogBreeds();
  })