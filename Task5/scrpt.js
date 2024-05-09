function getData(){
    let data = document.getElementById('content').value
    console.log(`${data.length}`)
    let words = data.split(" ");
    let newWord = words.join("")
    document.getElementById('text').innerHTML = newWord
}
