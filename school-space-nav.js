(() => {
  const script = document.currentScript;
  const school = (script?.dataset.school || "").toUpperCase();
  const spaces = {
    FALH: [
      { label: "3D", path: "school-data/FALH/3D/index.html" },
      { label: "360", path: "https://vinaysailor-dev.github.io/FALH/", external: true },
      { label: "CAD", path: "school-data/FALH/CAD/falh%20cad.html" },
      { label: "Layout", path: "school-data/FALH/Layout/SVG%20CRATE%20-viewer.html" },
      { label: "Data", path: "school-data/FALH/Data/data.html" }
    ],
    FSK: [
      { label: "CAD", path: "school-data/FSK/CAD/FSK_KEYPLAN_canvas.html" },
      { label: "Data", path: "school-data/FSK/Data/data.html" }
    ]
  };
  const links = spaces[school];
  if (!script || !links) return;

  const root = new URL("../../../", location.href);
  const current = new URL(location.href).pathname.toLowerCase();
  const nav = document.createElement("nav");
  nav.className = "school-space-nav";
  nav.setAttribute("aria-label", `${school} section navigation`);

  const style = document.createElement("style");
  style.textContent = `
    .school-space-nav{position:fixed;top:8px;left:50%;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:4px;max-width:calc(100vw - 16px);overflow-x:auto;padding:5px;border:1px solid #ffffff50;border-radius:999px;background:#122f61ed;box-shadow:0 5px 18px #0d22463b;backdrop-filter:blur(10px);scrollbar-width:none}
    .school-space-nav::-webkit-scrollbar{display:none}
    .school-space-nav a{flex:none;display:inline-flex;align-items:center;justify-content:center;min-height:30px;padding:0 11px;border-radius:999px;color:#fff;text-decoration:none;font:700 11px/1 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;transition:background .15s ease,color .15s ease}
    .school-space-nav a:hover{color:#852020;background:#f8d9d6}
    .school-space-nav a[aria-current="page"]{color:#173b76;background:#fff}
    .school-space-nav a.home{color:#ffe1de}
    .school-space-nav a.home:hover{color:#852020;background:#f8d9d6}
    @media(max-width:520px){.school-space-nav{top:5px;gap:2px;padding:4px}.school-space-nav a{min-height:28px;padding:0 9px;font-size:10px}}
  `;
  document.head.appendChild(style);

  const home = document.createElement("a");
  home.className = "home";
  home.href = new URL(`index.html#${school.toLowerCase()}`, root).href;
  home.textContent = school;
  home.setAttribute("aria-label", `Back to ${school} school page`);
  nav.appendChild(home);

  links.forEach(item => {
    const link = document.createElement("a");
    link.href = new URL(item.path, root).href;
    link.textContent = item.label;
    if (item.external) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    if (new URL(link.href).pathname.toLowerCase() === current) {
      link.setAttribute("aria-current", "page");
    }
    nav.appendChild(link);
  });
  document.body.appendChild(nav);
})();
