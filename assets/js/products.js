const r1 = $(".selector-row.r1 input");
const r2 = $(".selector-row.r2 input");
const r3 = $(".selector-row.r3 input");
const r4 = $(".selector-row.r4 input");
const r5 = $(".selector-row.r5 input");

r1.map((i, e) => {
  $(r1[i]).change(() => {
    if ($(r1[i]).is(":checked")) {
      $(r1).prop("checked", false);
      $(r1[i]).prop("checked", true);
    }
  });
});
r2.map((i, e) => {
  $(r2[i]).change(() => {
    if ($(r2[i]).is(":checked")) {
      $(r2).prop("checked", false);
      $(r2[i]).prop("checked", true);
    }
  });
});
r3.map((i, e) => {
  $(r3[i]).change(() => {
    if ($(r3[i]).is(":checked")) {
      $(r3).prop("checked", false);
      $(r3[i]).prop("checked", true);
    }
  });
});
r4.map((i, e) => {
  $(r4[i]).change(() => {
    if ($(r4[i]).is(":checked")) {
      $(r4).prop("checked", false);
      $(r4[i]).prop("checked", true);
    }
  });
});
r5.map((i, e) => {
  $(r5[i]).change(() => {
    if ($(r5[i]).is(":checked")) {
      $(r5).prop("checked", false);
      $(r5[i]).prop("checked", true);
    }
  });
});

// code kiểu tàu khựa =))))
