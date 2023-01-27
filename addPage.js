const newImg = document.querySelector("#newImg")
const writeBtn = document.querySelector("#writeBtn")
const newTitles = document.querySelector("#newTitles")
const newContents = document.querySelector("#newContents")
const inputForm = document.querySelector("#inputForm")

let titleData = ""
let contentData = ""
let imgData = "imgdata"



newTitles.addEventListener("change", (event) =>{
    titleData = event.target.value
    if(titleData.length > 3) {
        // console.log("valid")
        // writeBtn.disabled = false;

    }else{
        // console.log("unvalid")
        writeBtn.disabled = true;

    }
})  

newContents.addEventListener("change", (event)=>{
    contentData = event.target.value
    if(contentData.length > 3) {
        // console.log("valid")
        writeBtn.disabled = false;

    }else{
        // console.log("unvalid")
        writeBtn.disabled = true;
}})






         //form 제출
    
const submitHandler = (event) =>{  
    event.preventDefault();
    if(titleData > 3 && contentData > 3){
        fetch(`http://43.201.103.199/post`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/sjon"
            },
            body : JSON.stringify({
                "title" : titleData,
                "content" : contentData,
                "image" : imgData,
            }),
        })
        .then((response) => response.json())
        .then((result) => console.log(result))
    }else{
        //경고문 만들기
    }

    
}

const addImgHandler= () =>{
    newImg.style.backgroundColor = "grey"
    // fetch("https://api.unsplash.com/photos/random/?client_id=O7HkjXaX9lt1gg6L429iqP77MPYMlzGc7ZnC4-9pWX8")
    // .then((response) => response.json())
    // .then((data) => imgData = data.urls.raw)
    
    
}
newImg.addEventListener("click", addImgHandler)

inputForm.addEventListener("submit", submitHandler)