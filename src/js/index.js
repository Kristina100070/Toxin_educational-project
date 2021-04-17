import "../pages/style.css"; 
import "../components/utils/dropdown/dropdown";
let someStr = 'Изменил, сохранил, собрал'; 
console.log(someStr);


//счетчик дропдауна
const dropdownResult = document.getElementById('button-guest');

const dropdownContainer = document.querySelector(".dropdown__items");

dropdownResult.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContainer.classList.toggle('dropdown__items_open');
    console.log('присвоить уникальный айдишник');
});



dropdownContainer.addEventListener('click', (e) => {
    e.preventDefault();
    //контаинсом проверить где сработало событие
    const counterButton = e.target.closest('.item__counter_button');
const box = counterButton.parentElement;
let inputHidden = box.lastElementChild.value;
let arr = [];

    const counterValue = box.querySelector('.item__counter_value');
  
    if (counterButton) {
    
      if (counterButton.value === '-') {
        if (counterValue.textContent < 1) {
            counterButton.previousElementSibling.disebled = true;
           }
          let count = counterValue.innerHTML--;
          inputHidden = count;
          //dropdownResult.textContent = `${count} гостя`
          
          return count
      }
     if (counterButton.value === '+') {
      let count = counterValue.innerHTML++;
      inputHidden = count;
     
      return count
      }
    
    }
    
})


$(document).on('click','.js-button__search', function(e){
    e.preventDefault();

    window.location.href='http://localhost:8080/room-details.html'
});

