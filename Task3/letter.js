function getData(){
    let data = document.getElementById('content').value
    let words = data.split(" ");
    let newWord = words.slice(0 , 4).join(" ");
    document.getElementById('text').innerHTML = newWord
}
