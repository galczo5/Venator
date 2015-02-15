images = $("body").find(".preview-link");
i = 0;
j = images.size();

$(".next-image").click(function () {
    i++;
    i = i % j;
    setImage(i);
});

$(".prev-image").click(function () {
   i--;
   if(i < 0) i = j - 1;

   setImage(i);
});

function setImage(i) {
  img = images[i];
  $("#image-preview").prop("src", img.src);
  $("#image-link").prop("href", img.src);
}
