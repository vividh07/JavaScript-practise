function getData(){
    let data = document.getElementById('content').value
    document.getElementById('text').innerHTML = data
    let words = data.split(" ");
    let numberOfWords = words.length;
    console.log("Number of words:", numberOfWords);
}
