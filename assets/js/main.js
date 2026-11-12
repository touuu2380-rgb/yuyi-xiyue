(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("click", function (event) {
    if (!nav || !nav.classList.contains("open")) return;
    if (nav.contains(event.target) || (toggle && toggle.contains(event.target))) return;
    nav.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });

  var form = document.querySelector(".inquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = (form.querySelector("[name=name]") || {}).value || "";
      var company = (form.querySelector("[name=company]") || {}).value || "";
      var phone = (form.querySelector("[name=phone]") || {}).value || "";
      var product = (form.querySelector("[name=product]") || {}).value || "";
      var message = (form.querySelector("[name=message]") || {}).value || "";
      var lines = [
        "来自网站的询盘留言：",
        "姓名：" + name,
        "公司：" + company,
        "电话：" + phone,
        "意向产品：" + product,
        "留言：",
        message
      ];
      var subject = encodeURIComponent("网站询盘" + (name ? " - " + name : ""));
      var body = encodeURIComponent(lines.join("\n"));
      var tip = form.querySelector(".form-tip");
      if (tip) {
        tip.classList.add("show");
        tip.textContent = "正在尝试打开邮件程序。若未能自动打开，请直接发送至 touuu2380@gmail.com，或拨打 151 9209 8306 与张悦联系。";
      }
      window.location.href = "mailto:touuu2380@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
