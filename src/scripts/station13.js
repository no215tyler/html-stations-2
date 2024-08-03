function changeBackgroundColor(e) {
  const boolFlg = document.getElementById("check");
  const textElem = document.getElementById("text");
  if (boolFlg.checked) {
    textElem.setAttribute("style", "background-color: red;");
  } else {
    textElem.setAttribute("style", "background-color: transparent;");
  }
}
