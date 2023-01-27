

fetch("http://43.201.103.199/posts")
.then((response) => response.json())
.then((datas) => 
    {
        let apiContents = datas.data.posts
        
        

        for(apiContent of apiContents){
            const apiData = apiContent
            const liHandler = (event) =>{
                container.style.display = "none"
                const imgDetail = document.createElement("img")
                imgDetail.setAttribute("class", "contentImg")
                imgDetail.setAttribute('src', apiData.image)
                container3.appendChild(imgDetail)
            }

            // console.log(apiContent)
            const li = document.createElement("li")
            const liDiv = document.createElement("div")
            const liTitle = document.createElement("a") 
            const liContent = document.createElement("a")
            const liImg = document.createElement("img")
            
            li.setAttribute('class', "mainPageContent")
            li.addEventListener("click", liHandler)

            liDiv.setAttribute('class', "liDiv")

            liTitle.innerText = `Title : ${apiData.title}`
            liContent.innerText = `Content : ${apiData.content}`

            //사진 속성 추가하고 링크넣기
            liImg.setAttribute('class', "contentImg")
            liImg.setAttribute('src', apiData.image)


            document.querySelector("#itemList").appendChild(li)
            li.appendChild(liImg)
            li.appendChild(liDiv) 
            liDiv.appendChild(liTitle)
            liDiv.appendChild(liContent)
            
        }
        // console.log(newData)
    })
