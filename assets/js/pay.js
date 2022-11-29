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
city.html("<option value='0'>Chọn tỉnh/TP</option>");
ward.html("<option value='0'>Chọn quận/huyên</option>");
district.html("<option value='0'>Chọn xã</option>");

let codeWard = 0;
let wards = [];
let citys = [];
let districtss = [];
var wardShow = "";
var districtShow = "";

async function resData(url) {
  const response = await fetch(url);
  var data = await response.json();
  data.forEach((e) => {
    var cityShow = "";
    cityShow += `<option value=${e.code}> ${e.name}</option>`;
    city.append(cityShow);
  });
  citys = new Array(data);
}
const uri = "https://provinces.open-api.vn/api/?depth=3";

$(city).click(() => resData(uri));

let codeCity = 1;
$(city).change(() => {
  codeCity = $(city).val();
  citys[0].forEach((e) => {
    if (e.code == codeCity) {
      wards = e.districts;
      wardShow = "";
      districtShow = "";
    }
  });
  wards.forEach((e) => {
    wardShow += `<option value=${e.code}> ${e.name}</option>`;
  });
  ward.html(wardShow);
});

$(ward).change(() => {
  codeWard = $(ward).val();
  wards.forEach((e) => {
    if (e.code == codeWard) {
      districtss = e.wards;
      districtShow = "";
    }
  });
  districtss.forEach((e) => {
    districtShow += `<option value=${e.code}> ${e.name}</option>`;
  });
  district.html(districtShow);
});

const btnOrder = $(".btn-order");

btnOrder.click((e) => {
  let err = false;
  // e.preventDefault();
  if (city.val() == 0) {
    alert("Vui lòng chọn Tỉnh/TP");
    err = true;
  } else if (ward.val() == 0) {
    alert("Vui lòng chọn quận/huyện");
    err = true;
  } else if (district.val() == 0) {
    alert("Vui lòng chọn xã");
    err = true;
  }

  if (err) {
    e.preventDefault();
    return;
  }

  alert(`Thank you, ${$("#namePay").val()}`);

  // name.val("");
});
