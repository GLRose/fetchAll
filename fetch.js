const api_url = "https://www.osrsbox.com/osrsbox-db/items-complete.json";
async function getItem() {
  const response = await fetch(api_url);
  const data = await response.json();
  const itemLength = Object.keys(data).length;

  const text = document.getElementById("input1").value;
  let needle = text;

  //search function
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key].name == needle) {
        console.log("found");
        console.log(data[key].name);
        //turning our data to html element
        var node = document.createTextNode(needle);
        document.body.appendChild(node);
        //space
        var space = document.createTextNode("  ");
        document.body.appendChild(space);
        //cost
        needle = data[key].cost;
        var node = document.createTextNode(needle);
        document.body.appendChild(node);
      }
    }
  }
}
location.reload;

function removeText() {
  var elem = document.getElementById("node");
  elem.parentNode.removeChild(elem);
  return false;
}
