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
    integrationID: "c807857c-69e0-47d3-b205-a04804fd8f9b", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "a0d8420b-576c-4569-b5dc-3c7da53f55d9", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
