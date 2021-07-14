$(document).ready(function () {
  let langAr = true;

  // TOGGLE NAV

  $(".hidden-file-input").on("change", function (e) {
    var file = $(this)[0].files[0];
    $(this).siblings(".input-file-label").text(file.name);
  });
  //
  $(".join-merchant-btn").click(function (e) {
    e.preventDefault();
    $(".ui.modal.join-merchant-modal").modal({ centered: true }).modal("show");
  });
  //
  $(".recruitment-btn").click(function (e) {
    e.preventDefault();
    $(".ui.modal.recruitment-modal").modal({ centered: true }).modal("show");
  });
  //
  $(".contact-us-btn").click(function (e) {
    e.preventDefault();
    $(".ui.modal.contact-us-modal").modal("show");
  });

  //
  $(".toggle_btn").click(function (e) {
    $(".nav-list").toggleClass("active");
  });

  // TOGGLE LANGUAGE
  $(".nav-toggle-lang").click(function (e) {
    console.log(this);
    var isRtl = $("html").attr("lang") == "ar";
    console.log(isRtl);
    $(this).toggleClass("eng");
    isRtl ? $("html").attr("lang", "en") : $("html").attr("lang", "ar");
    langAr = !langAr;
    //
  });

  // SCROLLING
  $(".nav-list .nav-list-link , .list-link").click(function (e) {
    e.preventDefault();
    // $(this).parent().addClass("active").siblings().removeClass("active");
    const id = $(this).attr("href");
    const target = $(id)[0];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
    $(this).parents(".nav-list").removeClass("active");
  });

  // GO TO TOP FUNC
  $(".go-top").click(function (e) {
    e.preventDefault();
    const id = $(this).attr("href");
    $(id)[0].scrollIntoView({ behavior: "smooth" });
  });

  // OBSERVER HOME
  const home = document.querySelector(".home-hero");

  const obsHome = function (intries) {
    const [entry] = intries;
    if (!entry.isIntersecting) $(".go-top").fadeIn();
    else $(".go-top").fadeOut();
  };

  new IntersectionObserver(obsHome, {
    root: null,
    threshold: 0.5,
  }).observe(home);

  //SET DATE
  $(".date").text(new Date().getFullYear());

  // $(".loader").fadeOut(1000);
  // $(".city-dropdown").dropdown();
  console.log(langAr);
  //
  $(".ui.form.signup-form-wrapper").form({
    fields: {
      name: {
        identifier: "name",
        rules: [
          {
            type: "empty",
            prompt: ` ${auth.pleaseEnter} {name}`,
            // prompt: ` ${
            //   langAr
            //     ? ` ${auth.pleaseEnter} {name}`
            //     : `${Object.keys(auth)[1]} {name}`
            // }`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },
      facilityName: {
        identifier: "facilityName",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },

      reasoncontact: {
        identifier: "reason-contact",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[8]",
            prompt: `برجاء ادخال عدد احرف بين 8 و 250 حرف`,
          },
        ],
      },
      region: {
        identifier: "region",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },
      specialization: {
        identifier: "specialization",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },

      email: {
        identifier: "email",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "email",
            prompt: `${auth.vaildEmail}`,
          },
        ],
      },
      password: {
        identifier: "password",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[6]",
            prompt: `${auth.minPassword}`,
          },
        ],
      },
      Password2: {
        identifier: "ConfirmPassword",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "match[password]",
            prompt: `${auth.passwordMatch}`,
          },
        ],
      },
      phone: {
        identifier: "Phonenumber",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[8]",
            prompt: `${auth.phoneMin} {ruleValue}`,
          },
          {
            type: "maxLength[11]",
            prompt: `${auth.phoneMax} {ruleValue}`,
          },
        ],
      },
      companyName: {
        identifier: "companyName",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },
      companyField: {
        identifier: "companyField",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[3]",
            prompt: `{name} ${auth.min3}`,
          },
        ],
      },
      citydropdown: {
        identifier: "citydropdown",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseSelect} {name}`,
          },
        ],
      },
      commercialNum: {
        identifier: "commercialNum",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[8]",
            prompt: `${auth.phoneMin} {ruleValue}`,
          },
          {
            type: "maxLength[11]",
            prompt: `${auth.phoneMax} {ruleValue}`,
          },
        ],
      },
      taxNum: {
        identifier: "taxNum",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[14]",
            prompt: "min {name} 14",
          },
          {
            type: "maxLength[14]",
            prompt: "max {name} 14",
          },
        ],
      },
      nationalId: {
        identifier: "nationalId",
        depends: "isCompnyOwner",
        rules: [
          {
            type: "empty",
            prompt: `${auth.pleaseEnter} {name}`,
          },
          {
            type: "minLength[14]",
            prompt: "min {name} 14",
          },
          {
            type: "maxLength[14]",
            prompt: "max {name} 14",
          },
        ],
      },
    },
    on: "change",
    inline: true,
    transition: "swing down",
    duration: 800,
  });
});
