var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var submitBtn=document.getElementById("submitBtn");
var webSites=[];
var inputsDelet=document.getElementsByClassName("form-control")
if(JSON.parse( localStorage.getItem("webSitelist"))!=null){
webSites=JSON.parse( localStorage.getItem("webSitelist"))
display()
var search=document.getElementById("search")
}
submitBtn.onclick=function(){
    addSite();
    display();
    reset();
    
}
function addSite(){
   
  var webSite={
        siteName:siteName.value,
        siteUrl:siteUrl.value,
    }
    webSites.push(webSite)
    localStorage.setItem("webSitelist",JSON.stringify(webSites) )
    
}
 function display()
{
    var displaytable=""
for(var i=0;i<webSites.length;i++){
    displaytable+=`
    <tr>
    <td> ${webSites[i].siteName}</td>
    <td> <button class="btn btn-primary  me-3 " onclick="visit(${i})" >visit</button><button onclick="delet(${i})" class="btn btn-danger ">delet</button></td>
    </tr>
    `
}
document.getElementById("tableBody").innerHTML=displaytable
}
function reset(){
    for(var i=0;i<inputsDelet.length;i++){
        inputsDelet[i].value=""
    }
}
function delet(index){
    webSites.splice(index,1)
    display()
    localStorage.setItem("webSitelist",JSON.stringify(webSites))
}
function visit(index){
    // window.location.href = `${webSites[index].siteUrl}`;
   
     location.replace(`${webSites[index].siteUrl}`)
}
search.onkeyup=function(){
     doSearch(this.value)
    
}
function doSearch(textSearch)
{
    var displaytable=""
    for(var i=0;i<webSites.length;i++){
        if( webSites[i].siteName.includes(textSearch))
        {
        displaytable+=`
        <tr>
        <td> ${webSites[i].siteName}</td>
        <td> <button class="btn btn-primary  me-3 " onclick="visit(${i})" >visit</button><button onclick="delet(${i})" class="btn btn-danger ">delet</button></td>
        </tr>
        `
        
    }
    }
    document.getElementById("tableBody").innerHTML=displaytable 
}
const nameAlert=document.getElementById('nameAlert');
const urlAlert=document.getElementById('urlAlert');
var nameregex=/([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)+$/
siteName.onkeyup= function(){
    
    if(nameregex.test(siteName.value)){
    submitBtn.removeAttribute('disabled');
    siteName.classList.add('is-valid')
    siteName.classList.remove('is-invalid')
    nameAlert.classList.add('d-none')

    }else{
     submitBtn.disabled='true'
    siteName.classList.add('is-invalid')
    siteName.classList.remove('is-valid')
    nameAlert.classList.remove('d-none')
    
    }
}
var urlregex=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
siteUrl.onkeyup= function(){
   
    if(urlregex.test(siteUrl.value)){
     submitBtn.removeAttribute('disabled');
    siteUrl.classList.add('is-valid')
    siteUrl.classList.remove('is-invalid')
    urlAlert.classList.add('d-none')

    }else{
     submitBtn.disabled='true'
    siteUrl.classList.add('is-invalid')
    siteUrl.classList.remove('is-valid')
    urlAlert.classList.remove('d-none')
    
    }
}
// if(urlregex.test(siteUrl.value)&&nameregex.test(siteName.value)){
//     submitBtn.removeAttribute('disabled');
// }else{
//     submitBtn.disabled='true'
//}

