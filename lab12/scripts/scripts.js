const query = getQueryStr();
const key = "-";
const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=5&q=${query}&videoCategoryId=42`;

function getQueryStr() {
    const choices = ["like", "neutral"];
    const allInputs = document.querySelectorAll("input[type='radio']:checked");

    const keywords = [];

    allInputs.forEach(input => {
        const value = input.value;
        const name = input.name; 
        if (choices.includes(value)) {
            const keywordId = name.replace("preference-", "");
            let keyword = keywordId.replace(/&/g, "|"); 
            keywords.push(keyword);
        }
    });

    return keywords.join(" | ");
}

async function loadVideo(){
    const query = getQueryStr();
    const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=5&q=${query}&videoCategoryId=42`;

    videoDiv.innerHTML = ""; 
    const response = await fetch(url); 
    const mydata = await response.json(); 

    for (const item of mydata.items){
        const myVideoEle = document.createElement("iframe");
        myVideoEle.setAttribute("allow", "autoplay");
        myVideoEle.setAttribute("loading","lazy");
        myVideoEle.setAttribute("src", `https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1`);
        videoDiv.appendChild(myVideoEle);
    } 
    return mydata;
}


const videoDiv = document.getElementById("videos"); 
const preferenceForm = document.getElementById("survey"); 

preferenceForm.addEventListener("submit", function(e){
    e.preventDefault();
    videoDiv.scrollIntoView();
});

preferenceForm.addEventListener("change", function(e){
    let myPromise = loadVideo();
});


preferenceForm.addEventListener("submit", function(e){
    e.preventDefault();
    videoDiv.scrollIntoView(); // automatically scroll to the video section
});

const threshold = 300;

window.addEventListener("scroll", function(){
    for(myframe of document.querySelectorAll("iframe")){ //loops iframe
        let myOffset = window.scrollY - myframe.offsetTop; // calculate the distence between the top of the iframe and the top of the viewport
        if(myOffset>(0-threshold) && myOffset < threshold){ // checks if the iframe is in the viewport
            myframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*'); // tell to start playing
            myframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*'); // tell to stop playing
        }
    }
});
