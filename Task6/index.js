function getData(){
    let data = document.getElementById('content').value
    let newData = data.replaceAll("is",'an');
    document.getElementById('text').innerHTML = newData
}
