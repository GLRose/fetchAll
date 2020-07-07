const api_url = "https://www.osrsbox.com/osrsbox-db/items-complete.json";
async function getItem() {
  const response = await fetch(api_url);
  const data = await response.json();
  const itemLength = Object.keys(data).length;

  const text = document.getElementById("input1").value;
  const needle = text;

  //search function
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key].name == needle) {
        console.log("found");
        console.log(data[key].name);
        break;
      }
    }
  }
}
location.reload;
