(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight current nav link
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav.main a[href]").forEach(function (a) {
    var href = (a.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (href && href === path) a.classList.add("active");
    if (path === "" && href === "index.html") a.classList.add("active");
  });

  // Contact form → mailto
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || "";
      var company = (form.querySelector('[name="company"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var phone = (form.querySelector('[name="phone"]') || {}).value || "";
      var interest = (form.querySelector('[name="interest"]') || {}).value || "";
      var message = (form.querySelector('[name="message"]') || {}).value || "";

      var subject = encodeURIComponent("Maxlong inquiry — " + (interest || "General") + (company ? " (" + company + ")" : ""));
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Interest: " + interest + "\n\n" +
        message
      );
      window.location.href = "mailto:ceo@maxlongusa.com?subject=" + subject + "&body=" + body;
    });
  }

  // Prefill interest from ?interest=
  var params = new URLSearchParams(location.search);
  var interestParam = params.get("interest");
  if (interestParam && form) {
    var sel = form.querySelector('[name="interest"]');
    if (sel) {
      var found = false;
      Array.prototype.forEach.call(sel.options, function (opt) {
        if (opt.value === interestParam || opt.text === interestParam) {
          sel.value = opt.value;
          found = true;
        }
      });
      if (!found) {
        var opt = document.createElement("option");
        opt.value = interestParam;
        opt.textContent = interestParam;
        opt.selected = true;
        sel.appendChild(opt);
      }
    }
  }
})();
