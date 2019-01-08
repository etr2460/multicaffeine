const rootNode = document.getElementById("root");
const queryString = location.search.substr(1);

const broadcasts = queryString.split("&").filter(string => string);

const wrapperClass = broadcasts.length < 3 ? "two" : "four";

if (broadcasts.length === 0) {
  var helpDiv = document.createElement("div");
  helpDiv.innerHTML =
    "Welcome to Multi Caffeine<br /><br />Add up to 4 usernames to the end of the URL in the format: ?ESL&Caffeine&kaph&Ohmwrecker to view multiple broadcasts at once";
  helpDiv.setAttribute("class", "help");
  rootNode.appendChild(helpDiv);
} else {
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
}
