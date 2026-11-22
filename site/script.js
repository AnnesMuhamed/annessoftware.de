// Annes Software & Apps – kleine Helfer, kein Tracking, keine Cookies.
(function () {
  // Jahr im Footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobiles Menü
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Sanftes Einblenden beim Scrollen
  var items = document.querySelectorAll(".card, .project, .steps li, .checks li");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  // Kontaktformular: öffnet das E-Mail-Programm, speichert nichts.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name;
      var msg = form.elements.nachricht;
      var ok = true;
      [name, msg].forEach(function (field) {
        var empty = !field.value.trim();
        field.setAttribute("aria-invalid", String(empty));
        if (empty) ok = false;
      });
      if (!ok) { (name.value.trim() ? msg : name).focus(); return; }

      var firma = form.elements.firma.value.trim();
      var thema = form.elements.thema.value;
      var subject = "Projektanfrage: " + thema + (firma ? " – " + firma : "");
      var body = msg.value.trim() + "\n\n—\n" + name.value.trim() + (firma ? "\n" + firma : "");
      window.location.href = "mailto:kontakt@annessoftware.de?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
