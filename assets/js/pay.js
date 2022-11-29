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

const city = $("#city");
const ward = $("#ward");
const district = $("#district");

let codeWard = 1;
let wards = [];
let citys = [];
let districtss = [];
var wardShow = "";
var districtShow = "";

async function resData(url) {
  const response = await fetch(url);
  var data = await response.json();
  data.forEach((e) => {
    var city = "";
    city += `<option value=${e.code}> ${e.name}</option>`;
    $("#city").append(city);
  });
  citys = new Array(data);
}
const uri = "https://provinces.open-api.vn/api/?depth=3";
resData(uri);

let codeCity = 1;
$(city).change(() => {
  codeCity = $(city).val();
  citys[0].forEach((e) => {
    if (e.code == codeCity) {
      wards = e.districts;
    }
  });
  wards.forEach((e) => {
    wardShow += `<option value=${e.code}> ${e.name}</option>`;
  });
  $("#ward").html(wardShow);
});

$(ward).change(() => {
  codeWard = $(ward).val();
  wards.forEach((e) => {
    if (e.code == codeWard) {
      districtss = e.wards;
    }
  });
  districtss.map((e) => {
    districtShow += `<option value=${e.code}> ${e.name}</option>`;
  });
  $("#district").html(districtShow);
});

const btnOrder = $(".btn-order");

btnOrder.click(() => {
  if (ward.val() == null) {
    alert("Vui lòng chọn quận");
  } else if (district.val() == null) {
    alert("Vui lòng chọn huyện");
  }
});
