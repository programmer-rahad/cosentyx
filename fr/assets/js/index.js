// Javascript

+(function () {
  const $ = (selector, areAll) => {
    const all = document.querySelectorAll(selector);

    const single = document.querySelector(selector);

    return areAll ? all : single;
  };

  // Program Overview

  !(function () {
    const poItems = $("#program-overview .po-item.left", true);

    const titles = $("#program-overview h3", true);

    const h2 = $("#program-overview h2");

    if (!h2) return;

    const setMargin = () => {
      setTimeout(() => {
        titles.forEach((title) =>
          title.insertAdjacentHTML("afterend", "<span></span>")
        );

        poItems.forEach((item, index) => {
          const offset = item.offsetLeft;

          const spanOffset = titles[index].nextElementSibling.offsetLeft;

          titles[index].style.transform = `translateX(${
            offset - spanOffset
          }px)`;
        });

        const offset = poItems[0].offsetLeft;

        const h2Offset = h2.offsetLeft;

        h2.style.transform = `translateX(${offset - h2Offset}px)`;

        const h1 = $("#program-overview .container h1");

        if (window.innerWidth >= 1200) {
          const container = $("#program-overview .container");

          const h3 = $(".po-header h3");

          h1.style.transform = `translateX(${
            h3.offsetLeft - container.offsetLeft - 13.5
          }px)`;
        } else {
          h1.style.transform = `translateX(0)`;
        }
      }, 250);
    };

    setMargin();

    window.addEventListener("resize", setMargin);
  })();
	//index	!(function () {		var body = $("body");		if(body.classList.contains('gate')){						localStorage.removeItem("popup-continue");		}	})();
  // Home Popup

  !(function () {
    const popupBox = $("#popup-box");

    const closeBtn = $("#popup-box a.popup-continue");

    if (!popupBox) return;

    var body = document.body;

    body.scrollTop = 0;

    document.documentElement.scrollTop = 0;

    if (!getCookie("popup-continue")) {
      setTimeout(() => {
        popupBox.style.display = "block";

        body.style.overflow = "hidden";
      }, 500);
    } else {
      setTimeout(() => {
        const heading = $("header.video-header .hb-content h2");

        heading.classList.add("animate");
      }, 320);
    }

    const closePopup = (e) => {
      e.preventDefault();

      setCookie("popup-continue", 1);

      popupBox.style.display = "none";

      body.style.overflow = "auto";

      setTimeout(() => {
        const heading = $("header.video-header .hb-content h2");

        heading.classList.add("animate");
      }, 320);
    };

    closeBtn.addEventListener("click", closePopup);

    window.addEventListener(
      "keyup",

      (e) => e.key === "Escape" && closePopup(e)
    );
  })();

  // Home Video Popup

  !(function () {
    const button = $(".home-video-popup");

    if (!button) return;

    const videoName = "video-1.mp4";

    button.addEventListener("click", function () {
      event.preventDefault();

      const div = document.createElement("div");

      div.className = "hvp-video";

      div.innerHTML = `

        <span>&times;</span>

        <video src="assets/videos/${videoName}" controls autoplay>

        Your browser does not support the video tag.

        </video>

      `;

      document.body.append(div);

      const setSpanPosition = () => {
        setTimeout(function () {
          if (!$(".hvp-video video")) return;

          const marginRight = $(".hvp-video video").offsetLeft;

          const span = $(".hvp-video > span");

          span.style.marginRight = marginRight + "px";
        }, 250);
      };

      setSpanPosition();

      window.addEventListener("resize", setSpanPosition);

      const closeHomeVideoPopup = () => {
        const div = document.querySelector(".hvp-video");

        div.addEventListener("click", function (e) {
          if (e.target.nodeName === "SPAN") {
            this.remove();
          }
        });
      };

      closeHomeVideoPopup();
    });
  })();

  // Middle Tab Content

  !(function () {
    const para = $("p.mtcb-para");

    const mtContent = $("#mt-content");

    if (!para) return;

    const setPara = () => {
      if (window.innerWidth > 575) {
        mtContent.firstElementChild.append(para);
      } else {
        mtContent.insertAdjacentElement("afterend", para);
      }
    };

    setPara();

    window.addEventListener("resize", setPara);
  })();

  // Mobile Navigation

  !(function () {
    const humbergerIcon = $(".toggle-bar");

    const closeIcon = $(".mobile-menu i.fa-times");

    const menu = $(".mobile-menu");

    if (!humbergerIcon) return;

    humbergerIcon.addEventListener("click", () => {
      menu.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      menu.style.display = "none";
    });
  })();
})();

// Jquery
function videoEmbedded(objetId, targetId, entry_id){
    $("#"+objetId).click(function (e) {
        kWidget.embed({
            "targetId": targetId,
            "wid": "_2076321",
            "uiconf_id": 44956231,
            "flashvars": {},
            "cache_st": 1623172479,
            "entry_id": entry_id
        });
    });
    var staticBackdropElt = document.getElementById('staticBackdrop');
    if(staticBackdropElt != null){
        document.getElementById('staticBackdrop').addEventListener('hidden.bs.modal', function (event) {
            kWidget.destroy(targetId);
        });
    }
}
!(function () {
    videoEmbedded("video_cindy", "kaltura_player_1623174018", "1_ikmkkr2r");
    videoEmbedded("video_naomi", "kaltura_player_1623174343", "1_xb46mgez");
    videoEmbedded("video_rene", "kaltura_player_1623262111", "1_5cf3er8y");
    videoEmbedded("video_main", "kaltura_player_1623174634", "1_acot5vtv");
    
  if (typeof $ === "function") {
    // Magnifiq Popup

    !(function () {
      const btn = $(".video-play");

      if (!btn.length) return;

      btn.magnificPopup({
        type: "iframe",
      });
    })();

    // Form Validation

    valideForm();

    function valideForm() {
      $("form.province-licence").submit(function (e) {
        $(".error-text").hide();

        var valideSwitch = valideFormSwitch();

        var select_province_valid = valideSwitch[0];

        var license_number_valid = valideSwitch[1];

        if (!select_province_valid) {
          $(".error-province").show();

          $(".error-text.error-province").css("opacity", 1);
        }

        if (license_number_valid) {
          return true;
        } else {
          $(".error-licence").show();

          $(".error-text.error-licence").css("opacity", 1);
        }

        return false;
      });
    }

    function valideFormSwitch() {
      var select_province_valid = true;

      var license_number_valid = false;

      var select_province = $("#select_province").val();

      var license_number = $("#medical_license_number").val();

      switch (select_province) {
        case "AB": //D 6 digits - P 4 or 5 digits - N 5 or 6 digits
          if (
            license_number.length >= 4 &&
            license_number.length <= 6 &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "SK": //D 6 digits - P 4 or 5 digits - N 7 digits
          if (
            license_number.length >= 4 &&
            license_number.length <= 7 &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "BC": //D 5 digits - P 5 digits - N 5 or 7 digits
          if (
            (license_number.length == 5 || license_number.length == 7) &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "MB": //D 5 digits - P 5 digits - N 6 digits
          if (
            (license_number.length == 5 || license_number.length == 6) &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "ON": //D 5 digits - P 6 digits - N 7 or 8 digits
          if (
            license_number.length >= 5 &&
            license_number.length <= 8 &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "QC": //D 5 digits - P 6 digits - N 6 or 7 digits
          if (
            license_number.length >= 5 &&
            license_number.length <= 7 &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "NB": //D 8 digits - P 4 digits - N 6 digits | The first two numbers indicate the year in which the physician was first registered. 2 digits-5 digits (##-#####) could also just use 5 digits, with the leading digit always being 0 (0####)
          if (
            ([4, 6].includes(license_number.length) &&
              !isNaN(license_number)) ||
            (license_number.length == 8 &&
              /[a-zA-Z]/.test(license_number.charAt(0)) &&
              license_number.charAt(1) == "-" &&
              !isNaN(license_number.substring(2)))
          ) {
            license_number_valid = true;
          }

          break;

        case "NL": //D 6 digits - P 5 or 6 digits - N 5 digits | Leading letter, space, and 5 digits (A#####)
          //var count_numbers = license_number.replace(/[^0-9]/g, "").length;

          //var count_letters = license_number.replace(/[^a-zA-Z]/g, "").length;

          if (
            (license_number.length >= 5 &&
              license_number.length <= 6 &&
              !isNaN(license_number)) ||
            (license_number.length == 6 &&
              /[a-zA-Z]/.test(license_number.charAt(0)) &&
              !isNaN(license_number.substring(1)))
          ) {
            license_number_valid = true;
          }

          break;

        case "NS": //D 6 digits - P 3 or 4 or 5 digits - N 5 or 6 digits | and all begin with one or more zeros (0#####)
          if (
            license_number.length >= 3 &&
            license_number.length <= 6 &&
            !isNaN(license_number)
          ) {
            license_number_valid = true;
          }

          break;

        case "PI": //D 3 or 4 or 5 digits - P x digits - N 6 digits
          //var count_numbers = license_number.replace(/[^0-9]/g, "").length;

          //var count_letters = license_number.replace(/[^a-zA-Z]/g, "").length;

          if (
            ([3, 4, 6].includes(license_number.length) &&
              !isNaN(license_number)) ||
            (license_number.length == 5 &&
              /[a-zA-Z]/.test(license_number.charAt(0)) &&
              !isNaN(license_number.substring(1)))
          ) {
            license_number_valid = true;
          }

          break;

        case "NT": //D x digits - P 9 or 5 digits - N 9 or 4 or 5 digits
          if (
            license_number.length == 4 ||
            license_number.length == 5 ||
            license_number.length == 9
          ) {
            license_number_valid = true;
          }

          break;

        case "NU": //D x digits - P x digits - N 3 or 4 digits
          if (license_number.length >= 3 && license_number.length <= 4) {
            license_number_valid = true;
          }

          break;

        case "YT": //D x digits - P 9 or 8 digits - N x or x digits
          if (license_number.length >= 8 && license_number.length <= 9) {
            license_number_valid = true;
          }

          break;

        default:
          select_province_valid = false;

          break;
      }

      return [select_province_valid, license_number_valid];
    }
  }

  //switch lang
  var other_lang = window.location.href;
  other_lang = other_lang.replace("/fr/", "/en/");
  $(".language-switcher a").attr("href", other_lang);
})();

function setCookie(nom, valeur) {
  window.localStorage.setItem(nom, valeur);
}

function getCookie(nom) {
  return window.localStorage.getItem(nom);
}
function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    }
    else  // If another browser, return 0
    {
        alert('otherbrowser');
    }

    return false;
}