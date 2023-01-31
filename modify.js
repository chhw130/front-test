let modImgData = "";
let modTitleData = "";
let modContentData = "";
const modal = document.querySelector("#modal");

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
    console.log(exModal);
    exModal === modal ? closeAreaHandler() : false;
  });

  // 모달 내부 수정하기 버튼 클릭
  function modBtnHandler() {}
  modBtn.addEventListener("click", modBtnHandler);

  if (modal.style.display == "none") {
    window.removeEventListener();
    console.log("11111");
  }
};

// fetch("http://43.201.103.199/post/71", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "수정한 글 제목입니다",
//     content: "수정한 글 작성입니다",
//     image:
//       "https://img.freepik.com/premium-photo/small-tricolor-kitten-meows-floorroom_457211-10960.jpg?w=1060",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
