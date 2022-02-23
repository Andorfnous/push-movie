`use strict`;

//htmlから操作したい要素を取得
const btn = document.getElementById("btn");
const mojiResult = document.getElementById("textResult");
const dougaResult = document.getElementById("movieResult")

const btn2 = document.getElementById("btn2");
const mojiResult2 = document.getElementById("textResult2");
const movieUrl = document.getElementById("textbox");

btn2.addEventListener("click", function(){



const emotion2 = document.getElementById("emotionAdd");
const degree2 = document.getElementById("degreeAdd");

alert("動画を登録したよ");

//各感情の配列に対して、テキストボックスに入れられたURLで置き換える
if(emotion2.value === "dog"){
    //YoutubeのURLの「watch?v=」の部分をembed/に置き換えないと埋め込まれないので、置き換える。
    const url = movieUrl.value.replace("watch?v=", "embed/");
    dogArray.splice(degree2.value-1, 1, url);
} else if(emotion2.value === "sad"){
    const url = movieUrl.value.replace("watch?v=", "embed/");
    sadArray.splice(degree2.value-1, 1, url);
}else if(emotion2.value === "angry"){
    const url = movieUrl.value.replace("watch?v=", "embed/");
    angryArray.splice(degree2.value-1, 1, url);
  }else if (emotion2.value === "fun"){
    const url = movieUrl.value.replace("watch?v=", "embed/");
    funArray.splice(degree2.value-1, 1, url);
  } else{
    const url = movieUrl.value.replace("watch?v=", "embed/");
    strangeArray.splice(degree2.value-1, 1, url);
  }
})

//ボタンを押されたときに実行する関数
btn.addEventListener("click", function(){

//新しく動画を出力しているときに、前回表示したテキストと動画を消去する。
mojiResult.innerText = "";
dougaResult.innerText = "";

//HTMLからプルダウンで選ばれた要素を変数に代入
const emotion = document.getElementById("emotion");
const degree = document.getElementById("degree");

//「そんなあなたにはこの動画がオススメだよ」という文言を表示
const resultText = document.createElement("h2");
resultText.innerText = "そんなあなたにはこの動画がオススメだよ";
mojiResult.appendChild(resultText);

if(emotion.value === "dog"){
    const pushMovie = document.createElement("iframe")
    pushMovie.src = dogArray[degree.value-1];
    pushMovie.title = "YouTube video player";
    pushMovie.width = 560;
    pushMovie.height = 315;
    pushMovie.frameborder = 0;
    pushMovie.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    dougaResult.appendChild(pushMovie);
} else if(emotion.value === "sad"){
    const pushMovie = document.createElement("iframe")
    pushMovie.src = sadArray[degree.value-1];
    pushMovie.title = "YouTube video player";
    pushMovie.width = 560;
    pushMovie.height = 315;
    pushMovie.frameborder = 0;
    pushMovie.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    dougaResult.appendChild(pushMovie);
} else if(emotion.value === "angry"){
    const pushMovie = document.createElement("iframe")
    pushMovie.src = angryArray[degree.value-1];
    pushMovie.title = "YouTube video player";
    pushMovie.width = 560;
    pushMovie.height = 315;
    pushMovie.frameborder = 0;
    pushMovie.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    dougaResult.appendChild(pushMovie);
} else if(emotion.value === "fun"){
    const pushMovie = document.createElement("iframe")
    pushMovie.src = funArray[degree.value-1];
    pushMovie.title = "YouTube video player";
    pushMovie.width = 560;
    pushMovie.height = 315;
    pushMovie.frameborder = 0;
    pushMovie.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    dougaResult.appendChild(pushMovie);
} else {
    const pushMovie = document.createElement("iframe")
    pushMovie.src = strangeArray[degree.value-1];
    pushMovie.title = "YouTube video player";
    pushMovie.width = 560;
    pushMovie.height = 315;
    pushMovie.frameborder = 0;
    pushMovie.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    dougaResult.appendChild(pushMovie);
}

})

const dogArray = ["https://www.youtube.com/embed/88npQhcm9qk","https://www.youtube.com/embed/rtGS-NaCjgA","https://www.youtube.com/embed/G2hOYMc8GgY","https://www.youtube.com/embed/lT0dL6v3Hh0","https://www.youtube.com/embed/LZ7y_UL5m7o"];
const sadArray = ["https://www.youtube.com/embed/AByB7YwoQmo","https://www.youtube.com/embed/pNgk76VpyIM","https://www.youtube.com/embed/W2JoM2U4bAM","https://www.youtube.com/embed/dbTavyCmSjQ","https://www.youtube.com/embed/hZAae5cX4QU",""];
const angryArray = ["https://www.youtube.com/embed/j8ShocFxWp0","https://www.youtube.com/embed/GOR1b_ddOYc","https://www.youtube.com/embed/8BISq-VPdto","https://www.youtube.com/embed/yJEKBnz5dsg","https://www.youtube.com/embed/30roBDlCA7k"];
const funArray = ["https://www.youtube.com/embed/0-jgPdXw-A8","https://www.youtube.com/embed/AzKV1spJfF4","https://www.youtube.com/embed/q2u1BF99KFE","https://www.youtube.com/embed/_rLokBO1S68","https://www.youtube.com/embed/RFJ9utjO1Vc"];
const strangeArray = ["https://www.youtube.com/embed/-YqutuJnSnE", "https://www.youtube.com/embed/PgKgEVUVLok","https://www.youtube.com/embed/xdHE1Hm2E70","https://www.youtube.com/embed/PhaY8g-6K9Y","https://www.youtube.com/embed/zviql2kSgus"];
