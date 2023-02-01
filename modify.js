const modal = document.querySelector("#modal");
const modTitle = document.querySelector("#modTitle");
const modContent = document.querySelector("#modContent");

let modImgData = "";
let modTitleData = "";
let modContentData = "";

const modTitleHandler = (e) => {
  modTitleData = e.target.value;
};
const modContentHandler = ({ target }) => {
  modContentData = target.value;
  console.log(modContentData);
};

modTitle.addEventListener("change", modTitleHandler);
modContent.addEventListener("change", modContentHandler);

const modHandler = () => {
  modal.style.display = "flex";

  const modBtn = document.querySelector("#modBtn");

  //모달 나가는 함수
  function closeAreaHandler() {
    modal.style.display = "none";
  }
  // x버튼 클릭시 모달 나가기

  const closeArea = document.querySelector(".close-area");
  closeArea.addEventListener("click", closeAreaHandler);

  // 모달 창 외부 클릭시 모달 나가기
  window.addEventListener("click", (e) => {
    const exModal = e.target;
    exModal === modal ? closeAreaHandler() : false;
  });

  // 모달 내부 수정하기 버튼 클릭
  function modBtnHandler() {
    fetch(`http://43.201.103.199/post/${apiId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: modTitleData,
        content: modContentData,
        // image:
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  modBtn.addEventListener("click", modBtnHandler);
};

mod.addEventListener("click", modHandler);
