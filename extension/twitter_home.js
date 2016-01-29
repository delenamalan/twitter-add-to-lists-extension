var dashboard = document.getElementsByClassName("DashboardProfileCard module")[0];

var module = document.createElement("div");
module.className = "module roaming-module wtf-module js-wtf-module has-content";

var flexModule = document.createElement("div");
flexModule.className = "flex-module";

var flexHeader = document.createElement("div");
flexHeader.className = "flex-module-header";

var listsH3 = document.createElement("h3");
listsH3.textContent = "Your Lists";

if (dashboard.nextSibling) {
    dashboard.parentNode.insertBefore(module, dashboard.nextSibling);
} else {
    dashboard.parentNode.appendChild(module);
}

module.appendChild(flexModule);
flexModule.appendChild(flexHeader);
flexHeader.appendChild(listsH3);

