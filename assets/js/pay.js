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

async function resData(url) {
  const response = await fetch(url);
  var data = await response.json();
  data.map((e) => {
    var city = "";
    city += `<option value=${e.code}> ${e.name}</option>`;
    $("#city").append(city);
  });
  citys.push(...data);
}
const uri = "https://provinces.open-api.vn/api/?depth=3";
resData(uri);

let codeCity = 1;
$(city).change(() => {
  codeCity = $(city).val();
  citys.forEach((e) => {
    if (e.code == codeCity) {
      wards = new Array(e.districts);
    }
  });

  wards[0].forEach((e) => {
    var wardShow = "";
    wardShow += `<option value=${e.code}> ${e.name}</option>`;
    $("#ward").append(wardShow);
  });
});

$(ward).change(() => {
  codeWard = $(ward).val();
  wards[0].forEach((e) => {
    if (e.code == codeWard) {
      districtss = new Array(e.wards);
    }
  });
  districtss[0].map((e) => {
    var district = "";
    district += `<option value=${e.code}> ${e.name}</option>`;
    $("#district").append(district);
  });
});
