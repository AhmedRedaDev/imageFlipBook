// or if you're using a script tag and page-flip.browser.js:
const pageFlip = new St.PageFlip(document.getElementById("canvasBookExample"), {
  width: 400, // required parameter - base page width
  height: 600, // required parameter - base page height
  showCover: true,
});
pageFlip.loadFromImages([
  "https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236__340.jpg",
  "https://cdn.pixabay.com/photo/2015/03/04/12/59/bells-flower-658751__340.jpg",
  "https://cdn.pixabay.com/photo/2014/04/10/11/27/flower-320874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/04/12/23/23/wild-flower-2226095__340.jpg",
  "https://cdn.pixabay.com/photo/2015/05/15/14/47/woman-768702__340.jpg",
  "https://cdn.pixabay.com/photo/2015/02/23/20/49/flowers-646637__340.jpg",
  "https://cdn.pixabay.com/photo/2016/07/12/17/30/flower-1512646__340.jpg",
  "https://cdn.pixabay.com/photo/2020/03/10/15/54/dandelion-4919334__340.jpg",
  "https://cdn.pixabay.com/photo/2020/04/29/16/10/vase-5109481__340.jpg",
  "https://cdn.pixabay.com/photo/2014/02/10/00/32/rose-263234__340.jpg",
  "https://cdn.pixabay.com/photo/2020/03/10/15/54/dandelion-4919334__340.jpg",
  "https://cdn.pixabay.com/photo/2016/03/09/09/30/flowers-1245828__340.jpg",
  "https://cdn.pixabay.com/photo/2012/03/03/23/59/flowers-21708__340.jpg",
  "https://cdn.pixabay.com/photo/2015/01/07/10/24/aster-591311__340.jpg",
]);
