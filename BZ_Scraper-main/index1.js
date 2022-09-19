const api_url = 
//"https://docs.google.com/spreadsheets/d/e/2PACX-1vRr4u7kpUQg16Ae-G3PshSCuChLJaM2T6AkWLfLCWVROddd0D-digPDDJ8yJTuujPzIJX43M3BxMLDG/pub?output=csv";
// "https://docs.google.com/spreadsheets/d/e/2PACX-1vQOZ5pT8riOQkdZwIAGNirQb26Lgvrffoq4MzXjUerfMJtwXFCSYemXkX-yd9o2zyD9Yksv2hqFPpsL/pub?output=csv";
"https://docs.google.com/spreadsheets/d/1oB7ZM7soS3tVzT0WfeXYSoyRGn3YmqB0KUdxnktcGMo/edit#gid=0"
  var data;
  var arr = [] ;
  var arr1 = [];
  // Defining async function
  function include(arr1, obj) {
    return arr.indexOf(obj);
  }
    async function getapi(url) {     
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        data = await response.text();
        let data1 = data.split("\n");
        for(let i =0;i<data1.length;i++){
        arr[i] = data1[i].split(",")[0];
        arr1[i] = data1[i].split(",")[1];
        }     
    var x = document.getElementsByClassName("cursor leaderboard-hackername rg_5");
    var x1,x2;
    // for(let i =0;i<x.length;i++){
    //     var x1 = x[i].href.split("/");
    //     console.log(include(arr,x1[x1["length"]-1]));
    //     }
    // console.log(arr1);
    const val = []
    for(let i =0;i<x.length;i++)
    {
    x1 = x[i].href;
    x2 = x1.split("/")
    // console.log(typeof(x2[x2["length"]-1]))
    // console.log(x2[x2["length"]-1],x2);
    // x[i].classList.remove("rg_5");
    var f = include(arr1,x2[x2["length"]-1]);
    val[i] = x2[x2["length"]-1];
    if(f!=-1){
        x[i].style.color = "green ";
        x[i].text =  arr1[f]  ;
    }
    else{   
        x[i].style.color = "red ";
        x[i].text = "...........";
    }
    // if(i%2==0){
    //   element = document.createElement("div");
    //   element.textContent = x2[x2["length"]-1]; 
    //   v11[i/2].appendChild(element);
    // }
    // else{
    //   element = document.createElement("div");
    //   element.textContent = x2[x2["length"]-1]; 
    //   v12[i/2].appendChild(element);
    // }
    }
    var v1 = document.getElementsByClassName("row padding-small top bottom leaderboard-row");

    for(let i=0;i<v1.length;i++)
    {
      element = document.createElement("div");
      element.classList.add("span-flex-3");
      element.classList.add("text-center");
      element.textContent = val[i]; 
      v1[i].appendChild(element);
    }
      const n = x.length;
      while(x.length>0)
      {
          // console.log(x);
          x[0].classList.remove("rg_5");
      }
      var v1 = document.getElementsByClassName("span-flex-4");
      var element = document.createElement("div");
      element.innerText = "Roll Number";
      v1[0].appendChild(element);
  }   
  getapi(api_url);
  let currentPage = location.href;

// listen for changes
setInterval(function()
{
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        if(currentPage.split("/")[4] == 'bzklh1923-p1-contest')
        getapi(api_url);
        if(currentPage.split("/")[4] == 'bzcmrcet2024-p1-contest')
        getapi(api_url);
        if(currentPage.split("/")[4] == 'klu-y20-1')
        getapi(api_url);
        // do your thing..
    }
}, 500);
// var v2 = document.getElementsByClassName("row padding-small top bottom leaderboard-row")
// for(let i=0;i<v2.length;i++){ element = document.createElement("div");element.textContent = "abbc"; v2[i].appendChild(element);}
