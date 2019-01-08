const rootNode = document.getElementById("root");
const queryString = location.search.substr(1);

const broadcasts = queryString.split("&");

const wrapperClass = broadcasts.length < 3 ? "two" : "four";

broadcasts.map(broadcast => {
  var wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("class", "wrapper " + wrapperClass);
  var iframe = document.createElement("iframe");
  iframe.setAttribute("id", broadcast + "-iframe");
  iframe.setAttribute("frameBorder", "0");
  iframe.setAttribute("src", "https://preview.caffeine.tv/" + broadcast);
  wrapperDiv.appendChild(iframe);
  rootNode.appendChild(wrapperDiv);
});
