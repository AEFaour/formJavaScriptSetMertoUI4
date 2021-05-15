const metroInputName = document.getElementById("metro-input-name");
const metroInputEmail = document.getElementById("metro-input-email");
const metroInputAge = document.getElementById("metro-input-age");
const metroInputJob = document.getElementById("metro-input-job");
const metroSelectNotice = document.getElementById("metro-select-notice");
const metroInputNotice = document.getElementById("metro-input-notice");
const metroSelectChoice = document.getElementById("metro-select-choice");
const metroTextareaComment = document.getElementById("metro-textarea-comment");

const metroBtnSubmit = document.getElementById("metro-btn-submit");

let logEntries = {};

function formIntoJson() {



    logEntries[metroInputName.name] = metroInputName.value;
    logEntries[metroInputEmail.name] = metroInputEmail.value;
    logEntries[metroInputAge.name] = metroInputAge.value;
    logEntries[metroInputJob.name] = metroInputJob.value;
    logEntries[metroSelectNotice.name] = metroSelectNotice.value;
    logEntries[metroInputNotice.name] = metroInputNotice.value;
    logEntries[metroSelectChoice.name] = metroSelectChoice.value;
    logEntries[metroTextareaComment.name] = metroTextareaComment.value;


    let dataJson = JSON.stringify(logEntries, null, 2);

    console.log(dataJson);

    document.getElementById("myJson").innerHTML = ` Data : <br> ${dataJson} <br>`;
    let blob = new Blob([dataJson], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    //url.replace("C:\Users\Stagiaire\Desktop\Projet14May\javascript");

    a.href = url;
    a.download = "aston.json";


    a.innerHTML = `<h5 class="text-center">You can Download aston.json here!</h>`;


    document.getElementById("myJson").appendChild(a);

    console.dir(a);
    console.log(url);
    console.dir(a.download);
    console.dir(blob);
    return dataJson;

}


console.log(formIntoJson());

metroBtnSubmit.addEventListener('click', formIntoJson);