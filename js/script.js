const menuButton = document.querySelector(".menu-button");
    var menu = document.querySelector(".menu");
    menuButton.addEventListener('click', function () {
    
    if(menu.classList.contains("open")){
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
});

window.watsonAssistantChatOptions = {
    integrationID: "36e33cf1-bd27-4992-b7b6-87650242d968", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "c3b48686-5726-4e3e-98d5-e0674ad378a0", // The ID of your service instance.
    onLoad: function (instance) { instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
  