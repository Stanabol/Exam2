let xhr = new XMLHttpRequest();
let arr = [];
function SearchPrint() {
    let cleare = document.getElementById("clear");
    let search = document.getElementById("title").value;
    console.log(search);
    let year = document.getElementById("year").value;
    // let rating = document.getElementById("rating").value;
    xhr.open('GET', `http://www.omdbapi.com/?s=${search}&y=${year}&apikey=bab07359`);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        } else { // если всё прошло гладко, выводим результат
            // console.log(xhr.response);
            let res = JSON.parse(xhr.response);
            console.log(res);
            arr = res.Search.slice();
            // makeList();
            console.log(arr);
            let div = document.createElement("div");
            let ul = document.createElement("ul");
            cleare.innerHTML = "";
            for (let i = 0; i < arr.length; i++) {
                let li = document.createElement("li");
                let h2 = document.createElement("h2")
                let img = document.createElement("img");
                let p = document.createElement("p");
                h2.textContent = arr[i].Title;
                img.src = arr[i].Poster;
                p.textContent = arr[i].Year;
                ul.appendChild(li);
                li.appendChild(img)
                li.appendChild(p);
                li.appendChild(h2);
            }
            div.appendChild(ul);
            cleare.appendChild(div);
            // document.body.appendChild(div);
        }
    };
    // function makeList() {
}
