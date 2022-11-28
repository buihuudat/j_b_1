const payProductButton = $(".pay-product-button");
const productPayCount = $("#product-pay-count");

payProductButton.map((i, e) => {
  let count = Number($(e).children("#product-pay-count").text());
  $(e)
    .children("#pay-product-btn-left")
    .click(() => {
      $(e)
        .children("#product-pay-count")
        .text(count > 1 ? (count -= 1) : count);
    });
  $(e)
    .children("#pay-product-btn-right")
    .click(() => {
      $(e)
        .children("#product-pay-count")
        .text((count += 1));
    });
});
