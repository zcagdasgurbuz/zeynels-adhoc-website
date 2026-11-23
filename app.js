"use strict";

const gpuFilter = document.querySelector("#gpu-filter");
const resultCount = document.querySelector("#results-count");
const comparisonRows = [...document.querySelectorAll(".comparison-table tbody tr")];

gpuFilter.addEventListener("change", () => {
  let visible = 0;
  for (const row of comparisonRows) {
    row.hidden = gpuFilter.value !== "all" && row.dataset.gpu !== gpuFilter.value;
    if (!row.hidden) visible += 1;
  }
  resultCount.textContent = gpuFilter.value === "all"
    ? `Showing all ${visible} configurations`
    : `Showing ${visible} ${visible === 1 ? "configuration" : "configurations"}`;
});
