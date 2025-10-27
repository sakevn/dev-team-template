// Structure: group name => array of folder objects {name, path}
// Adjust paths if your folder names are different. Paths are relative to this HTML file.
const data = {
  "Bài 1-5": [
    {
      name: "2.bai2-import-export-js",
      path: "./2.bai2-import-export-js/",
    },
    { name: "4.review-function-js", path: "./4.review-function-js/" },
    {
      name: "5.review-function-js - arrow function",
      path: "./5.review-function-js - arrow function/",
    },
    { name: "6.review-oop-js", path: "./6.review-oop-js/" },
  ],
  "Bài 6-10": [
    { name: "7.review-array-js", path: "./7.review-array-js/" },
    { name: "8.reactjs-tuhoc.cc", path: "./8.reactjs-tuhoc.cc/" },
    {
      name: "9. Destructuring in Function",
      path: "./9. Destructuring in Function/",
    },
    { name: "10. Review - Spread", path: "./10. Review - Spread/" },
  ],
  "Props & State (14.x)": [
    { name: "14.0 props-start", path: "./14.0 props-start/" },
    { name: "14.1 props-part1", path: "./14.1 props-part1/" },
    { name: "14.2 props-part2", path: "./14.2 props-part2/" },
    { name: "14.6 props-part6", path: "./14.6 props-part6/" },
    { name: "14.7 props-part7", path: "./14.7 props-part7/" },
  ],
  "Hooks & Advanced": [
    { name: "16.1 two way binding", path: "./16.1 two way binding/" },
    { name: "17.0 CSS start project", path: "./17.0 CSS start project/" },
    {
      name: "18.1 refs - portals - useState",
      path: "./18.1 refs - portals - useState/",
    },
    { name: "19.useReducer", path: "./19.useReducer/" },
  ],
  "Full list (alphabetical sample)": [
    { name: "11.jsx", path: "./11.jsx/" },
    {
      name: "12.tao-ungdung-coban-react",
      path: "./12.tao-ungdung-coban-react/",
    },
    {
      name: "13.react.js Render Hình Ảnh",
      path: "./13.react.js Render Hinh Anh/",
    },
  ],
};

const groupsEl = document.getElementById("groups");
const itemsEl = document.getElementById("items");
const titleEl = document.getElementById("title");

function renderGroups() {
  groupsEl.innerHTML = "";
  Object.keys(data).forEach((g, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = g;
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".group button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderItems(g);
    });
    if (i === 0) btn.classList.add("active");
    li.appendChild(btn);
    groupsEl.appendChild(li);
  });
}

function renderItems(group) {
  titleEl.textContent = group;
  itemsEl.innerHTML = "";
  const arr = data[group] || [];
  if (arr.length === 0) {
    itemsEl.innerHTML = '<div style="color:var(--muted)">Không có folder</div>';
    return;
  }
  arr.forEach((f) => {
    const c = document.createElement("div");
    c.className = "card";
    const a = document.createElement("a");
    // Use target _blank so folder opens in new tab/window. Browsers may show file listing.
    a.href = f.path;
    a.textContent = f.name;
    a.setAttribute("title", f.path);
    a.setAttribute("target", "_blank");
    c.appendChild(a);
    itemsEl.appendChild(c);
  });
}

// filter
const filterInput = document.getElementById("filter");
filterInput.addEventListener("input", () => {
  const q = filterInput.value.trim().toLowerCase();
  if (!q) {
    // if empty, show currently active group
    const active = document.querySelector(".group button.active");
    return renderItems(active ? active.textContent : Object.keys(data)[0]);
  }
  titleEl.textContent = `Kết quả tìm: "${q}"`;
  itemsEl.innerHTML = "";
  const flat = Object.values(data).flat();
  const matches = flat.filter((f) => f.name.toLowerCase().includes(q));
  if (matches.length === 0) {
    itemsEl.innerHTML = '<div style="color:var(--muted)">Không tìm thấy</div>';
    return;
  }
  matches.forEach((f) => {
    const c = document.createElement("div");
    c.className = "card";
    const a = document.createElement("a");
    a.href = f.path;
    a.textContent = f.name;
    a.setAttribute("target", "_blank");
    a.setAttribute("title", f.path);
    c.appendChild(a);
    itemsEl.appendChild(c);
  });
});

// init
renderGroups();
renderItems(Object.keys(data)[0]);
