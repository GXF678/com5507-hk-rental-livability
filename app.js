const DATA = window.DEMO_DATA;

const MODES = {
  balanced: {
    label: "均衡",
    weights: { commute: 0.45, rent: 0.4, dining: 0.15 },
  },
  budget: {
    label: "预算",
    weights: { commute: 0.25, rent: 0.6, dining: 0.15 },
  },
  commute: {
    label: "通勤",
    weights: { commute: 0.65, rent: 0.25, dining: 0.1 },
  },
  food: {
    label: "餐饮",
    weights: { commute: 0.3, rent: 0.3, dining: 0.4 },
  },
};

const state = {
  schoolId: DATA.schools[0].id,
  mode: "balanced",
  budget: 25000,
  selectedStation: null,
  mobileView: "map",
};

const elements = {
  schoolSelect: document.querySelector("#school-select"),
  modeControl: document.querySelector("#mode-control"),
  budgetRange: document.querySelector("#budget-range"),
  budgetValue: document.querySelector("#budget-value"),
  weightSummary: document.querySelector("#weight-summary"),
  selectedSchoolLabel: document.querySelector("#selected-school-label"),
  recommendationName: document.querySelector("#recommendation-name"),
  recommendationScore: document.querySelector("#recommendation-score"),
  recommendationRent: document.querySelector("#recommendation-rent"),
  recommendationCommute: document.querySelector("#recommendation-commute"),
  budgetCandidates: document.querySelector("#budget-candidates"),
  map: document.querySelector("#station-map"),
  mapTooltip: document.querySelector("#map-tooltip"),
  mapCaption: document.querySelector("#map-caption"),
  rankingList: document.querySelector("#ranking-list"),
  rankingCount: document.querySelector("#ranking-count"),
  detailTitle: document.querySelector("#detail-title"),
  detailSubtitle: document.querySelector("#detail-subtitle"),
  detailTags: document.querySelector("#detail-tags"),
  rentScale: document.querySelector("#rent-scale"),
  rentSummary: document.querySelector("#rent-summary"),
  commuteRoute: document.querySelector("#commute-route"),
  commuteFacts: document.querySelector("#commute-facts"),
  diningBars: document.querySelector("#dining-bars"),
  weightVisual: document.querySelector("#weight-visual"),
  metaSummary: document.querySelector("#meta-summary"),
  dataAsOf: document.querySelector("#data-asof"),
  printButton: document.querySelector("#print-button"),
};

const fmtHKD = (value) =>
  value == null
    ? "--"
    : `HK$ ${Number(value).toLocaleString("en-HK", { maximumFractionDigits: 0 })}`;

const fmtNumber = (value, digits = 0) =>
  value == null
    ? "--"
    : Number(value).toLocaleString("zh-HK", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function computeScores(stations, mode) {
  return stations
    .map((station) => ({
      ...station,
      score: station.scores[mode],
      overBudget: station.rent.medianRent > state.budget,
    }))
    .sort((a, b) => b.score.overall - a.score.overall);
}

function getSchool() {
  return DATA.schools.find((school) => school.id === state.schoolId) || DATA.schools[0];
}

function getScoredStations() {
  return computeScores(getSchool().stations, state.mode);
}

function renderSchoolOptions() {
  elements.schoolSelect.innerHTML = DATA.schools
    .map(
      (school) =>
        `<option value="${school.id}">${school.name} · ${school.short}</option>`,
    )
    .join("");
  elements.schoolSelect.value = state.schoolId;
}

function renderSummary(stations) {
  const top = stations[0];
  const budgetCount = stations.filter((station) => !station.overBudget).length;
  elements.selectedSchoolLabel.textContent = getSchool().name;
  elements.recommendationName.textContent = top.name;
  elements.recommendationScore.textContent = top.score.overall;
  elements.recommendationRent.textContent = top.rent.lowRentSample
    ? `${fmtHKD(top.rent.medianRent)}*`
    : fmtHKD(top.rent.medianRent);
  elements.recommendationCommute.textContent = `${top.commute.totalMinutes} 分钟`;
  elements.budgetCandidates.textContent = `${budgetCount} / ${stations.length}`;
}

function projectStation(station) {
  const minLng = 113.95;
  const maxLng = 114.29;
  const minLat = 22.25;
  const maxLat = 22.47;
  const x = 64 + ((station.lng - minLng) / (maxLng - minLng)) * 632;
  const y = 60 + ((maxLat - station.lat) / (maxLat - minLat)) * 380;
  return { x, y };
}

function mapColor(score) {
  if (score >= 72) return "#2e7d6d";
  if (score >= 48) return "#d6a43e";
  return "#c85f4a";
}

const LABEL_OFFSETS = {
  KET: { dx: -18, dy: 20, anchor: "end" },
  HKU: { dx: -18, dy: -9, anchor: "end" },
  SYP: { dx: -2, dy: -28, anchor: "middle" },
  SHW: { dx: 4, dy: 31, anchor: "middle" },
  CEN: { dx: 19, dy: -8, anchor: "start" },
  KOT: { dx: 0, dy: -28, anchor: "middle" },
  SKM: { dx: -17, dy: -10, anchor: "end" },
  PRE: { dx: 0, dy: 28, anchor: "middle" },
  SSP: { dx: -17, dy: 10, anchor: "end" },
  MOK: { dx: 18, dy: -10, anchor: "start" },
  HUH: { dx: 18, dy: 9, anchor: "start" },
  HOM: { dx: 18, dy: -9, anchor: "start" },
  TKW: { dx: 18, dy: 9, anchor: "start" },
  TST: { dx: 18, dy: 9, anchor: "start" },
  TAW: { dx: 0, dy: -28, anchor: "middle" },
  SHT: { dx: 18, dy: -8, anchor: "start" },
  FOT: { dx: 18, dy: -8, anchor: "start" },
  UNI: { dx: 18, dy: -8, anchor: "start" },
  TAP: { dx: 0, dy: -28, anchor: "middle" },
  TWO: { dx: 0, dy: 28, anchor: "middle" },
  HAH: { dx: 18, dy: -8, anchor: "start" },
  POA: { dx: 18, dy: -8, anchor: "start" },
  TKO: { dx: 18, dy: 9, anchor: "start" },
  SIH: { dx: -18, dy: -8, anchor: "end" },
  TUM: { dx: -18, dy: 9, anchor: "end" },
  TIS: { dx: -18, dy: -8, anchor: "end" },
  YUL: { dx: 18, dy: -8, anchor: "start" },
};

function renderMap(stations) {
  const selected = stations.find((station) => station.name === state.selectedStation);
  const points = stations
    .map((station) => {
      const { x, y } = projectStation(station);
      const selectedClass = station.name === state.selectedStation ? " is-selected" : "";
      const overBudgetClass = station.overBudget ? " is-over-budget" : "";
      const label = LABEL_OFFSETS[station.code] || {
        dx: x > 610 ? -16 : 16,
        dy: -2,
        anchor: x > 610 ? "end" : "start",
      };
      const labelX = x + label.dx;
      const labelY = y + label.dy;
      const showScore = station.name === state.selectedStation;
      return `
        <g class="station-marker${selectedClass}${overBudgetClass}"
           data-station="${station.name}" role="button" tabindex="0"
           aria-label="${station.name}，综合得分 ${station.score.overall}">
          <circle class="station-ring" cx="${x}" cy="${y}" r="22"></circle>
          <circle class="station-focus" cx="${x}" cy="${y}" r="16"></circle>
          <circle class="station-core" cx="${x}" cy="${y}" r="10"
                  fill="${mapColor(station.score.overall)}"></circle>
          <text class="station-label" x="${labelX}" y="${labelY}"
                text-anchor="${label.anchor}">${station.name}</text>
          ${
            showScore
              ? `<text class="station-score-label" x="${labelX}" y="${labelY + 13}"
                       text-anchor="${label.anchor}">${station.score.overall} · ${station.code}</text>`
              : ""
          }
        </g>
      `;
    })
    .join("");

  const focusLine = selected
    ? (() => {
        const { x, y } = projectStation(selected);
        return `<line x1="${x}" y1="${y}" x2="694" y2="68"
                      stroke="#df6d56" stroke-width="1" stroke-dasharray="3 5" opacity="0.75"></line>
                <circle cx="694" cy="68" r="4" fill="#df6d56"></circle>
                <text x="684" y="58" text-anchor="end" fill="#5a6864" font-size="10">${selected.name}</text>`;
      })()
    : "";

  elements.map.innerHTML = `
    <title id="map-title">${getSchool().name}候选站点生活圈地图</title>
    <desc id="map-desc">站点颜色表示综合得分，虚线圆表示约一公里半径。</desc>
    <path class="map-region" d="M73 293 L126 242 L198 258 L240 225 L320 242 L376 211 L454 232 L541 218 L620 256 L686 317 L655 373 L581 389 L513 365 L438 394 L354 412 L276 384 L205 398 L129 366 Z"></path>
    <path class="map-region secondary" d="M538 153 L607 158 L654 191 L631 231 L559 216 L515 190 Z"></path>
    <path class="map-region secondary" d="M183 130 L251 144 L289 181 L248 214 L182 194 L145 161 Z"></path>
    <path class="map-region secondary" d="M315 100 L376 116 L401 153 L366 180 L309 164 L286 128 Z"></path>
    <text class="map-region-label" x="114" y="330">香港岛</text>
    <text class="map-region-label" x="318" y="300">九龙</text>
    <text class="map-region-label" x="397" y="168">新界东</text>
    <text class="map-region-label" x="170" y="164">新界西</text>
    <text class="map-water-label" x="596" y="422">维多利亚港东侧</text>
    ${focusLine}
    ${points}
  `;
  elements.mapCaption.textContent = `${getSchool().name} · ${stations.length} 个预设站点`;
}

function renderRanking(stations) {
  elements.rankingCount.textContent = `${stations.length} 站`;
  elements.rankingList.innerHTML = stations
    .map(
      (station, index) => `
      <button class="rank-item${station.name === state.selectedStation ? " is-selected" : ""}"
              type="button" data-station="${station.name}">
        <span class="rank-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="rank-copy">
          <span class="rank-title-row">
            <span class="rank-title">${station.name}</span>
            <span class="rank-code">${station.code}</span>
            ${
              station.poi.lowSample
                ? '<span class="rank-status">餐饮样本不足</span>'
                : ""
            }
            ${
              station.overBudget
                ? '<span class="rank-status over">超预算</span>'
                : ""
            }
            ${
              station.rent.lowRentSample
                ? '<span class="rank-status over">租金样本不足</span>'
                : ""
            }
          </span>
          <span class="rank-meta">
            <span>${fmtHKD(station.rent.medianRent)}</span>
            <span>${station.commute.totalMinutes} min</span>
            <span>${station.rent.nAnalysis} 条学生样本</span>
          </span>
          <span class="mini-components" aria-hidden="true">
            ${miniBar("rent", station.score.rent)}
            ${miniBar("commute", station.score.commute)}
            ${miniBar("dining", station.score.dining ?? 0)}
          </span>
        </span>
        <span class="rank-score">${station.score.overall}<small>SCORE</small></span>
      </button>
    `,
    )
    .join("");
}

function miniBar(type, score) {
  return `<span class="mini-bar ${type}"><span style="width:${clamp(score, 0, 100)}%"></span></span>`;
}

function renderDetail(station, stations) {
  elements.detailTitle.textContent = station.name;
  elements.detailSubtitle.textContent =
    `${station.lines.replaceAll(" / ", " · ")} · ${station.nameEn} · 综合得分 ${station.score.overall}`;
  elements.detailTags.innerHTML = [
    `<span class="detail-tag">${station.commute.totalMinutes} min MTR</span>`,
    `<span class="detail-tag">${fmtHKD(station.rent.medianRent)}</span>`,
    station.commute.connector
      ? '<span class="detail-tag alert">需出站接驳</span>'
      : '<span class="detail-tag">校园铁接驳</span>',
    station.poi.lowSample
      ? '<span class="detail-tag alert">餐饮低样本</span>'
      : '<span class="detail-tag">POI 样本可用</span>',
    station.rent.lowRentSample
      ? '<span class="detail-tag alert">租金低样本</span>'
      : '<span class="detail-tag">租金样本可用</span>',
  ].join("");

  renderRent(station, stations);
  renderCommute(station);
  renderDining(station, stations);
}

function renderRent(station, stations) {
  const quantiles = station.rent.quantiles;
  const maxScale = Math.max(
    40000,
    ...stations.map((item) => item.rent.quantiles[4] || item.rent.medianRent),
  );
  const percent = (value) => clamp((value / maxScale) * 100, 0, 100);
  const labels = [
    [quantiles[1], "P25"],
    [quantiles[2], "中位"],
    [quantiles[3], "P75"],
  ];
  elements.rentScale.innerHTML = `
    <div class="rent-track">
      <div class="rent-box" style="left:${percent(quantiles[1])}%;width:${percent(
        quantiles[3] - quantiles[1],
      )}%"></div>
      ${labels
        .map(
          ([value, label], index) => `
            <span class="rent-marker${index === 1 ? " median" : ""}"
                  style="left:${percent(value)}%"></span>
            <span class="rent-marker-label" style="left:${percent(value)}%">${label}</span>
          `,
        )
        .join("")}
    </div>
  `;
  elements.rentSummary.innerHTML = `
    <div><span>月租中位数</span><strong>${fmtHKD(station.rent.medianRent)}</strong></div>
    <div><span>实用尺租</span><strong>HK$ ${fmtNumber(station.rent.medianPsf, 1)}</strong></div>
    <div><span>≤15k 占比</span><strong>${Math.round(
      station.rent.affordableShare * 100,
    )}%</strong></div>
    <div><span>学生租住样本</span><strong>${station.rent.nAnalysis} 条</strong></div>
  `;
  if (station.rent.lowRentSample) {
    elements.rentSummary.insertAdjacentHTML(
      "beforeend",
      '<p class="sample-warning">该站可识别的学生租住样本少于 10 条，租金维度不参与综合评分。</p>',
    );
  }
}

function renderCommute(station) {
  elements.commuteRoute.innerHTML = `
    <div class="route-line">
      <span class="route-node">${station.code}</span>
      <span class="route-track">
        <span>${station.commute.totalMinutes} min · ${station.commute.transfers} 次换乘</span>
      </span>
      <span class="route-node destination">${getSchool().short}</span>
    </div>
    ${
      station.commute.connector
        ? '<span class="connector-warning">出站后仍需步行或巴士接驳，当前时间只计港铁段</span>'
        : '<span class="connector-warning" style="color:#2e7d6d;background:#d8ebe4">港铁后可直接步行至校园参考点</span>'
    }
  `;
  elements.commuteFacts.innerHTML = `
    <div><span>港铁段</span><strong>${station.commute.mtrMinutes} min</strong></div>
    <div><span>成人票价</span><strong>${fmtHKD(station.commute.fare)}</strong></div>
    <div><span>首 / 末班</span><strong>${station.commute.firstTrain || "--"} / ${
      station.commute.lastTrain || "--"
    }</strong></div>
  `;
}

function renderDining(station, stations) {
  if (station.poi.lowSample) {
    elements.diningBars.innerHTML = `
      <div class="low-sample-message">
        该站 POI 样本不足，不参与餐饮便利排名。现有 ${station.poi.total} 个节点仅作为背景信息。
      </div>
    `;
    return;
  }

  const metrics = [
    {
      label: "餐厅密度",
      value: station.poi.restaurantDensity,
      max: Math.max(...stations.map((item) => item.poi.restaurantDensity || 0)),
      unit: "/km²",
    },
    {
      label: "快餐密度",
      value: station.poi.fastFoodDensity,
      max: Math.max(...stations.map((item) => item.poi.fastFoodDensity || 0)),
      unit: "/km²",
    },
    {
      label: "超市密度",
      value: station.poi.supermarketDensity,
      max: Math.max(...stations.map((item) => item.poi.supermarketDensity || 0)),
      unit: "/km²",
    },
    {
      label: "平价餐饮代理",
      value: station.poi.cheapShare * 100,
      max: Math.max(...stations.map((item) => (item.poi.cheapShare || 0) * 100)),
      unit: "%",
    },
  ];

  elements.diningBars.innerHTML = metrics
    .map(
      (metric) => `
        <div class="dining-row">
          <span>${metric.label}</span>
          <div class="dining-track">
            <div class="dining-fill" style="width:${clamp(
              (metric.value / metric.max) * 100,
              4,
              100,
            )}%"></div>
          </div>
          <strong>${fmtNumber(metric.value, metric.unit === "%" ? 0 : 1)} ${metric.unit}</strong>
        </div>
      `,
    )
    .join("");
}

function renderWeights() {
  const weights = MODES[state.mode].weights;
  const order = [
    ["通勤", weights.commute, "commute"],
    ["租金", weights.rent, "rent"],
    ["餐饮", weights.dining, "dining"],
  ];
  elements.weightVisual.innerHTML = order
    .map(
      ([label, weight, className]) => `
        <div class="weight-row">
          <span>${label}</span>
          <div class="weight-track">
            <div class="weight-fill ${className}" style="width:${weight * 100}%"></div>
          </div>
          <strong>${Math.round(weight * 100)}%</strong>
        </div>
      `,
    )
    .join("");
  elements.weightSummary.textContent =
    `通勤 ${Math.round(weights.commute * 100)} · 租金 ${Math.round(
      weights.rent * 100,
    )} · 餐饮 ${Math.round(weights.dining * 100)}`;
}

function updateDynamicCopy() {
  elements.budgetValue.textContent = fmtHKD(state.budget);
  elements.dataAsOf.textContent = `截至 ${DATA.meta.asOf}`;
  elements.metaSummary.textContent =
    `${fmtNumber(DATA.meta.rentalRows)} 条原始租房 · ${fmtNumber(
      DATA.meta.rentalEligible,
    )} 条合格住宿 · ${fmtNumber(
      DATA.meta.rentalStudentProxy,
    )} 条学生租住样本 · ${fmtNumber(DATA.meta.poiNodes)} 个 POI · ${
      DATA.meta.schoolCount
    } 所学校`;
}

function update() {
  const stations = getScoredStations();
  if (!stations.some((station) => station.name === state.selectedStation)) {
    state.selectedStation = stations[0].name;
  }
  const selected = stations.find((station) => station.name === state.selectedStation) || stations[0];

  renderSummary(stations);
  renderMap(stations);
  renderRanking(stations);
  renderDetail(selected, stations);
  renderWeights();
  updateDynamicCopy();
}

function setMobileView(view) {
  state.mobileView = view;
  document.body.dataset.mobileView = view;
  document.querySelectorAll(".mobile-tab").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function selectStation(name) {
  state.selectedStation = name;
  update();
  if (window.matchMedia("(max-width: 640px)").matches) {
    setMobileView("detail");
    document.querySelector("#evidence").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

elements.schoolSelect.addEventListener("change", (event) => {
  state.schoolId = event.target.value;
  state.selectedStation = null;
  update();
});

elements.modeControl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  elements.modeControl.querySelectorAll("[data-mode]").forEach((item) => {
    const active = item.dataset.mode === state.mode;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  update();
});

elements.budgetRange.addEventListener("input", (event) => {
  state.budget = Number(event.target.value);
  update();
});

elements.rankingList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-station]");
  if (button) selectStation(button.dataset.station);
});

elements.map.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-station]");
  if (marker) selectStation(marker.dataset.station);
});

elements.map.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const marker = event.target.closest("[data-station]");
  if (!marker) return;
  event.preventDefault();
  selectStation(marker.dataset.station);
});

elements.map.addEventListener("pointerover", (event) => {
  const marker = event.target.closest("[data-station]");
  if (!marker) return;
  const station = getScoredStations().find((item) => item.name === marker.dataset.station);
  if (!station) return;
  const rect = elements.map.getBoundingClientRect();
  const markerRect = marker.getBoundingClientRect();
  elements.mapTooltip.hidden = false;
  elements.mapTooltip.innerHTML = `
    <strong>${station.name} · ${station.score.overall}</strong>
    ${fmtHKD(station.rent.medianRent)} · ${station.commute.totalMinutes} 分钟
  `;
  elements.mapTooltip.style.left = `${markerRect.left - rect.left + markerRect.width / 2}px`;
  elements.mapTooltip.style.top = `${markerRect.top - rect.top}px`;
});

elements.map.addEventListener("pointerout", (event) => {
  if (event.target.closest("[data-station]")) {
    elements.mapTooltip.hidden = true;
  }
});

document.querySelectorAll(".mobile-tab").forEach((button) => {
  button.addEventListener("click", () => setMobileView(button.dataset.view));
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    document
      .querySelector(`#${button.dataset.jump}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

elements.printButton.addEventListener("click", () => window.print());

renderSchoolOptions();
setMobileView("map");
update();
