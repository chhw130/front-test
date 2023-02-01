const goBack = document.querySelector("#goBack");
// const goBack2 = document.querySelector("#goBack2");
const newImg = document.querySelector("#newImg");
const writeBtn = document.querySelector("#writeBtn");
const newTitles = document.querySelector("#newTitles");
const newContents = document.querySelector("#newContents");
const inputForm = document.querySelector("#inputForm");

let imgData = "";
let titleData = "";
let contentData = "";

function goBackHandler() {
  location.reload();
}

goBack.addEventListener("click", goBackHandler);
goBack.addEventListener("click", goBackHandler);

newTitles.addEventListener("change", (event) => {
  titleData = event.target.value;
  if (titleData.length > 3) {
    // console.log("valid")
    // writeBtn.disabled = false;
  } else {
    // console.log("unvalid")
    writeBtn.disabled = true;
  }
});

newContents.addEventListener("change", (event) => {
  contentData = event.target.value;
  if (contentData.length > 3) {
    // console.log("valid")
    writeBtn.disabled = false;
  } else {
    // console.log("unvalid")
    writeBtn.disabled = true;
  }
});

const addImgHandler = () => {
  fetch(
    "https://api.unsplash.com/photos/random?client_id=O7HkjXaX9lt1gg6L429iqP77MPYMlzGc7ZnC4-9pWX8"
  )
    .then((response) => response.json())
    .then((result) => {
      imgData = result.urls.raw;
    });
  newImg.style.backgroundColor = "grey";
};
newImg.addEventListener("click", addImgHandler);

// const submitHandler = (event) =>{
//     event.preventDefault();
//     if(titleData > 3 && contentData > 3){
//         fetch('http://43.201.103.199/post',{
//             method : 'POST',
//             headers : {
//                 "Content-type" : "application/json; charset=UTF-8"
//             },
//             body : JSON.stringify({
//                     title : titleData,
//                     content : contentData,
//                     image : imgData,
//             }),
//         })
//         .then((response) => response.json())
//         .then((result) => console.log(result));
//     }else{
//         //경고문 만들기
//     }

// }

const submitHandler = (event) => {
  event.preventDefault();
  fetch("http://43.201.103.199/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: titleData,
      content: contentData,
      image: imgData,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));

  setTimeout("location.reload()", 1200); //데이터 post가 되고 나서 2초뒤에 새로고침
};

inputForm.addEventListener("submit", submitHandler);
