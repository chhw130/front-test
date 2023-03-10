const del = document.querySelector("#del");
const detailData = document.querySelector("#detailData");
let apiContents = "";
let apiId = "";

fetch("http://43.201.103.199/posts")
  .then((response) => response.json())
  .then((datas) => {
    apiContents = datas.data.posts;
    console.log(apiContents);

    for (apiContent of apiContents) {
      const apiData = apiContent;

      // console.log(apiContent)
      const li = document.createElement("li");
      const liDiv = document.createElement("div");
      const liTitle = document.createElement("h2");
      const liContent = document.createElement("a");
      const liImg = document.createElement("img");

      liDiv.setAttribute("class", "liDiv");

      liTitle.innerText = `${apiData.title}`;
      liContent.innerText = `Content : ${apiData.content}`;

      //사진 속성 추가하고 링크넣기
      liImg.setAttribute("class", "contentImg");
      liImg.setAttribute("src", apiData.image);

      document.querySelector("#itemList").appendChild(li);
      li.appendChild(liImg);
      li.appendChild(liDiv);
      liDiv.appendChild(liTitle);
      liDiv.appendChild(liContent);

      const liHandler = (event) => {
        container.style.display = "none";
        container3.style.display = "flex";
        const imgDetail = document.createElement("img");
        imgDetail.setAttribute("class", "patchImg");
        imgDetail.setAttribute("src", apiData.image);

        fetch(`http://43.201.103.199/post/${apiData.postId}`) //
          .then((res) => res.json())
          .then((res) => {
            const commentsList = document.querySelector("#commentsList");
            const commentDatas = res.data.comments;

            for (commentData of commentDatas) {
              const commentList = document.createElement("li");
              const commentDelBtn = document.createElement("button");

              commentDelBtn.innerText = "삭제";
              commentList.setAttribute("class", "mainPageContent");
              commentList.innerText = commentData.content;
              commentList.appendChild(commentDelBtn);
              commentsList.appendChild(commentList);

              commentDelBtn.addEventListener("click", commentDelBtnHandler);
              function commentDelBtnHandler({ target }) {
                fetch(
                  `http://43.201.103.199/comment/${commentData.commentId}`,
                  {
                    method: "DELETE",
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    location.reload();
                  });
              }
            }
          });
        detailData.appendChild(imgDetail);
        detailData.appendChild(liTitle);
        detailData.appendChild(liContent);

        console.log(event.target);

        // 삭제버튼 구현 //

        const deleteHandler = () => {
          fetch(`http://43.201.103.199/post/${apiId}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => console.log(data));

          setTimeout("location.reload()", 500);
        };

        del.addEventListener("click", deleteHandler);
      };
      li.setAttribute("class", "mainPageContent");
      li.addEventListener("click", liHandler);
    }
  });

// setTimeout("console.log(apiContents)", 2000);
