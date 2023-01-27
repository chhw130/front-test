

// fetch("http://43.201.103.199/",{
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json",
//     },
//     body : JSON.stringify({
//         "title" : "Test",
//         "content" : "I am testing!",
//         "image" : "https://img.freepik.com/premium-photo/small-tricolor-kitten-meows-floorroom_457211-10960.jpg?w=1060"
//     }),
// })

let title = "타이틀"
let content = "콘텐츠"
let image = "ㅁㄴ아ㅣ룹힏ㅈ"

fetch('http://43.201.103.199/post',{
    method : 'POST',
    body : JSON.stringify({
            title : title,
            content : content,
            image : image
    }),
})
.then((response) => response.json())
.then((result) => console.log(result));



// fetch('http://43.201.103.199/post/:30')
// .then((response) => response.json())
// .then((result) => console.log(result));