const myObserver = new ResizeObserver(entries => {
  doIt()
});

const app = document.getElementById("app");

myObserver.observe(app);

// main function that modifies the webpage
function doIt() {
  if(typeof document.getElementsByClassName("siteframe-index")[0] !== "undefined"){
    document.getElementsByClassName("siteframe-index")[0].style.height = window.innerHeight.toString() + "px";
  }
}
