let count = 1;
const textShowProduct = $("#product-show-count");
const btnShowProduct = $(".show-product-button button");

$(btnShowProduct[0]).click(() => {
  if (count <= 1) {
    count = 1;
  } else {
    count -= 1;
  }
  $("#product-show-count").text(count);
});
$(btnShowProduct[1]).click(() => {
  count += 1;
  $("#product-show-count").text(count);
});

const showProductUser = $(".show-feedback-user");
const productReview = $("#btn-showmore").text(
  "Xem " + (showProductUser.length - 3) + " đánh giá khác"
);
const showMoreReview = $("#btn-showmore");

showMoreReview.click(() => {
  console.log($(showProductUser[3]).hasClass("hidden"));
  if ($(showProductUser[3]).hasClass("hidden")) {
    showProductUser.removeClass("hidden");
    productReview.text("Ẩn bớt");
    flag = 0;
  } else {
    productReview.text(
      "Xem " + (showProductUser.length - 3) + " đánh giá khác"
    );
    showProductUser.map((i, e) => {
      if (i > 2) {
        $(showProductUser[i]).addClass("hidden");
      }
    });
  }
});
showProductUser.map((i, e) => {
  if (i > 2) {
    $(showProductUser[i]).addClass("hidden");
  }
});

const writeReview = $("#btn-writefb");
const formReview = $(".form-reviews");
const cancelForm = $(".cancelForm");
writeReview.click(() => {
  formReview.removeClass("hidden");
});

cancelForm.click(() => {
  formReview.addClass("hidden");
});
