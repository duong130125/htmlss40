function displayLocalStorageValues() {
    let localStorageValuesList = document.getElementById("localStorageValues");
    localStorageValuesList.innerHTML = ""; 
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let listItem = document.createElement("li");
        listItem.textContent = key + ": " + value;
        localStorageValuesList.appendChild(listItem);
    }
}
displayLocalStorageValues();