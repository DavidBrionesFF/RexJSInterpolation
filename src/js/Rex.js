var RexRootElement = document.getElementsByTagName('Rex')[0];

var ApplicationContext = {
    elementRoot: RexRootElement,
    configuration: JSON.parse(RexRootElement.getAttribute('configuration')),
    elementTitle: document.getElementsByTagName('title')[0]
};

ApplicationContext.elementTitle.text = ApplicationContext.configuration.appTitle

ApplicationContext.elementRoot.innerHTML = ApplicationContext.elementRoot.innerHTML
    .replace(/\{{+([A-Za-z0-9\s\W]{1,})\}}/gim, (sub, replace)=> {
        return ApplicationContext.configuration.data[replace];
    });

