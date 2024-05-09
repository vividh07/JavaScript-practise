function getData(){
    let data = document.getElementById('content').value
    let newWord = data.toLowerCase();
    document.getElementById('text').innerHTML = newWord
}
