
            module = [];
            module[1] = 
                {
                    idModule: 2, 
                    nameModule: "Initial Page", 
                    viewName: "welcome"
                };      
            module[2] = 
                {
                    idModule: 2, 
                    nameModule: "2. Make an API call access an API from PHP", 
                    viewName: "welcome"
                };
                module[3] = 
                {
                    idModule: 3, 
                    nameModule: "Using the data", 
                    viewName: "using-data"
                };      


            function loadModule(idModule) 
                {
                    //console.log(JSON.stringify(module[1]));
                    titleElement = "module-title";
                    titleValue = module[idModule].nameModule;
                    viewName = module[idModule].viewName;
                    $("#" +  titleElement).html(titleValue); 
                    document.title = titleValue;
                    loadView(viewName);     
                }
            function loadView(viewName, fileExtension="php") 
                {
                    $("#cardBody").load("Views/" + viewName + "." + fileExtension , function(){/*do something assync*/});
                }

                $( document ).ready(function() {
                    console.clear();
                    loadModule(3);
                });
        