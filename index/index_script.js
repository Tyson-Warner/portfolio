const toggle = document.getElementById("darkmode-toggle");
const root = document.documentElement;

toggle.addEventListener("change", () => {
  const styles = getComputedStyle(root);
  const c1 = styles.getPropertyValue("--color-main1").trim();
  const c2 = styles.getPropertyValue("--color-main2").trim();

  // swap them
  root.style.setProperty("--color-main1", c2);
  root.style.setProperty("--color-main2", c1);

  // optional: save the user preference
  localStorage.setItem("darkModeChecked", toggle.checked ? "1" : "0");
});

// restore saved preference
if (localStorage.getItem("darkModeChecked") === "1") {
  toggle.checked = true;
  const styles = getComputedStyle(root);
  const c1 = styles.getPropertyValue("--color-main1").trim();
  const c2 = styles.getPropertyValue("--color-main2").trim();
  root.style.setProperty("--color-main1", c2);
  root.style.setProperty("--color-main2", c1);
}
