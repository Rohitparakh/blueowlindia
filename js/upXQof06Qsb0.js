!function(e){"use strict";var t=function(e){var t,n,i={},a=e.data("model-cid");return o&&a?(t=elementorFrontend.config.elements.data[a],n=elementorFrontend.config.elements.keys[t.attributes.widgetType||t.attributes.elType],jQuery.each(t.getActiveControls(),(function(e){-1!==n.indexOf(e)&&(i[e]=t.attributes[e])}))):i=e.data("settings")||{},i},o=!1,n=function(t,o,n,a){e(t).closest(".elementor-widget-wrap").addClass("e-swiper-container"),e(t).closest(".elementor-widget").addClass("e-widget-swiper"),"undefined"==typeof Swiper?new elementorFrontend.utils.swiper(t,a).then((function(e){i(t,o,n,e)})):(a=new Swiper(t,a),i(t,o,n,a))},i=function(e,t,n,i){"yes"===n.pause_on_hover&&(e.on("mouseover",(function(){i.autoplay.stop()})),e.on("mouseout",(function(){i.autoplay.start()}))),o&&t.resize((function(){})),r(i,".pp-swiper-slider","swiper")},a=function(e,o){var i=t(e),a=e.find(".swiper-container-wrap"),r=e.find(".pp-swiper-slider");e=JSON.parse(r.attr("data-slider-settings"));n(r,a,i,e)},r=function(t,o,n){void 0===n&&(n="swiper"),["ppe-tabs-switched","ppe-toggle-switched","ppe-accordion-switched","ppe-popup-opened"].forEach((function(i){void 0!==i&&e(document).on(i,(function(a,r){0<(r="ppe-popup-opened"==i?e(".pp-modal-popup-"+r):r).find(o).length&&setTimeout((function(){"swiper"===n?t.update():"gallery"===n&&r.find(".pp-image-gallery").eq(0).isotope("layout")}),100)}))}))},d=function(e,t){var o=e.data("id"),n=(e=e.find(".pp-image-hotspots"),e=JSON.parse(e.attr("data-tooltip-options")),"pp-tooltip pp-tooltip-"+o),i=e.arrow,a=e.always_open,r=e.trigger,d=e.distance,p=e.animation,c=e.width,s=(o=e.size,e.zindex);""!==o&&void 0!==o&&(n+=" pp-tooltip-size-"+o),t(".pp-hot-spot-wrap[data-tooltip]").each((function(){var e=t(this).data("tooltip-position");t(this).pptooltipster({trigger:r,animation:p,minWidth:0,maxWidth:c,ppclass:n,position:e,arrow:"yes"===i,distance:d,interactive:!0,positionTracker:!0,zIndex:s}),"yes"===a&&(t(this).pptooltipster(),t(this).pptooltipster("show"))}))},p=function(e,t){var o=e.find(".pp-image-comparison").eq(0);e=o.data("settings");o.twentytwenty({default_offset_pct:e.visible_ratio,orientation:e.orientation,before_label:e.before_label,after_label:e.after_label,move_slider_on_hover:e.slider_on_hover,move_with_handle_only:e.slider_with_handle,click_to_move:e.slider_with_click,no_overlay:e.no_overlay})},c=function(e,t){var o=e.find(".pp-counter").eq(0),n=o.data("target"),i=e.find(".pp-counter-number").data("separator"),a=""!==(e=e.find(".pp-counter-number").data("separator-char"))?"("+e+"ddd).dd":"(,ddd).dd";void 0!==elementorFrontend.waypoint&&elementorFrontend.waypoint(o,(function(){t(n).each((function(){var e=t(this).data("to"),o=t(this).data("speed"),n=new Odometer({el:this,value:0,duration:o,format:"yes"===i?a:""});n.render(),setInterval((function(){n.update(e)}))}))}),{offset:"80%",triggerOnce:!0})},s=function(e,t){var o=0;e.find(".swiper-slide").each((function(){t(this).height()>o&&(o=t(this).height())})),e.find(".pp-info-box-content-wrap").css("min-height",o)},l=function(e,o){var n=t(e),a=e.find(".swiper-container-wrap"),r=e.find(".pp-info-box-carousel"),d=void 0!==r.attr("data-slider-settings")?JSON.parse(r.attr("data-slider-settings")):"",p=n.equal_height_boxes;o(r).closest(".elementor-widget-wrap").addClass("e-swiper-container"),o(r).closest(".elementor-widget").addClass("e-widget-swiper"),"undefined"==typeof Swiper?new elementorFrontend.utils.swiper(r,d).then((function(t){"yes"===p&&t.on("slideChange",(function(){s(e,o)})),i(r,a,n,t)})):(d=new Swiper(r,d),"yes"===p&&s(e,o),i(r,a,n,d))},f=function(e,o){var i,a,r,d=e.data("id"),p=t(e),c=p.feed_layout;"carousel"===c?(i=e.find(".swiper-container-wrap"),a=e.find(".swiper-container").eq(0),e=JSON.parse(a.attr("data-slider-settings")),n(a,i,p,e)):"masonry"===c&&(r=o("#pp-instafeed-"+d).imagesLoaded((function(){r.masonry({itemSelector:".pp-feed-item",percentPosition:!0})})))},m=function(e,o){var n=e.find(".pp-image-scroll-container"),i=n.find(".pp-image-scroll-overlay"),a=n.find(".pp-image-scroll-vertical"),r=(e=t(e),n.find(".pp-image-scroll-image img")),d=e.direction_type,p=e.reverse,c=(e=e.trigger_type,null);function s(){r.css("transform",("vertical"==d?"translateY":"translateX")+"( -"+c+"px)")}function l(){r.css("transform",("vertical"==d?"translateY":"translateX")+"(0px)")}function f(){c="vertical"==d?r.height()-n.height():r.width()-n.width()}"scroll"==e?(n.addClass("pp-container-scroll"),"vertical"==d?a.addClass("pp-image-scroll-ver"):n.imagesLoaded((function(){i.css({width:r.width(),height:r.height()})}))):("yes"===p&&n.imagesLoaded((function(){n.addClass("pp-container-scroll-instant"),f(),s()})),"vertical"==d&&a.removeClass("pp-image-scroll-ver"),n.mouseenter((function(){n.removeClass("pp-container-scroll-instant"),f(),("yes"===p?l:s)()})),n.mouseleave((function(){("yes"===p?s:l)()})))},u=function(e,o){var n=e.find(".pp-accordion-tab-title"),i=(e=t(e)).accordion_type,a=e.toggle_speed;n.each((function(){o(this).hasClass("pp-accordion-tab-active-default")&&(o(this).addClass("pp-accordion-tab-show pp-accordion-tab-active"),o(this).next().slideDown(a))})),n.unbind("click"),n.on("click keypress",(function(e){var t;e.preventDefault(),1!=e.which&&13!=e.which&&32!=e.which&&null!=e.which||(e=(t=o(this)).parent(),o(document).trigger("ppe-accordion-switched",[e]),"accordion"===i?t.hasClass("pp-accordion-tab-show")?(t.closest(".pp-accordion-item").removeClass("pp-accordion-item-active"),t.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),t.attr("aria-expanded","false"),t.next().slideUp(a)):(t.closest(".pp-advanced-accordion").find(".pp-accordion-item").removeClass("pp-accordion-item-active"),t.closest(".pp-advanced-accordion").find(".pp-accordion-tab-title").removeClass("pp-accordion-tab-show pp-accordion-tab-active"),t.closest(".pp-advanced-accordion").find(".pp-accordion-tab-title").removeClass("pp-accordion-tab-active-default"),t.closest(".pp-advanced-accordion").find(".pp-accordion-tab-content").slideUp(a),t.toggleClass("pp-accordion-tab-show pp-accordion-tab-active"),t.closest(".pp-advanced-accordion").find(".pp-accordion-tab-title").attr("aria-expanded","false"),t.closest(".pp-accordion-item").toggleClass("pp-accordion-item-active"),t.hasClass("pp-accordion-tab-title")&&t.attr("aria-expanded","true"),t.next().slideToggle(a)):t.hasClass("pp-accordion-tab-show")?(t.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),t.next().slideUp(a)):(t.addClass("pp-accordion-tab-show pp-accordion-tab-active"),t.next().slideDown(a)))})),h(),o(window).on("hashchange",(function(){h()}))};function h(){var t;location.hash&&0<e(location.hash).length&&(t=e(location.hash+".pp-accordion-tab-title"))&&0<t.length&&(location.href="#",e("html, body").animate({scrollTop:t.parents(".pp-accordion-item").offset().top-50+"px"},500,(function(){t.parents(".pp-accordion-item").hasClass("pp-accordion-item-active")||t.trigger("click")})))}var g=function(e){var t="pp-tooltip pp-tooltip-"+e.data("id"),o=e.find(".pp-button[data-tooltip]").data("tooltip-position"),n=elementorFrontend.config.breakpoints;window.innerWidth<=n.lg&&window.innerWidth>=n.md&&(o=e.find(".pp-button[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<n.md&&(o=e.find(".pp-button[data-tooltip]").data("tooltip-position-mobile")),e.find(".pp-button[data-tooltip]").pptooltipster({trigger:"hover",animation:"fade",ppclass:t,side:o,interactive:!0,positionTracker:!0})},v=function(e,t){t(document).ready((function(){"undefined"!==twttr&&twttr.widgets.load()}))},w=function(e,o){var n=e.find(".pp-image-accordion").eq(0),i=(e=(i=t(e)).accordion_action,i.disable_body_click),a=(n=n.attr("id"),o("#"+n+" .pp-image-accordion-item"));"on-hover"===e?a.hover((function(){a.css("flex","1"),a.removeClass("pp-image-accordion-active"),o(this).addClass("pp-image-accordion-active"),a.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),o(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),o(this).css("flex","3")}),(function(){a.css("flex","1"),a.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),a.removeClass("pp-image-accordion-active")})):"on-click"===e&&(a.click((function(e){e.stopPropagation(),a.css("flex","1"),a.removeClass("pp-image-accordion-active"),o(this).addClass("pp-image-accordion-active"),a.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),o(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),o(this).css("flex","3")})),o("#"+n).click((function(e){e.stopPropagation()})),"yes"!==i&&o("body").click((function(){a.css("flex","1"),a.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),a.removeClass("pp-image-accordion-active")})))},y=function(e,t){void 0!==e&&e.find("select:not([multiple])").each((function(){var e=t(this);(e.next().hasClass("chosen-container")?e.next():e).wrap("<span class='pp-gf-select-custom'></span>")}))},b=function(e,o){var n=e.data("id"),i=e.find(".pp-pricing-table-tooptip[data-tooltip]"),a=t(e),r="pp-tooltip pp-tooltip-"+n,d=a.tooltip_arrow,p=a.tooltip_trigger,c=a.tooltip_animation,s=(n=a.tooltip_size,a.tooltip_zindex),l=elementorFrontend.config.breakpoints;""!==n&&void 0!==n&&(r+=" pp-tooltip-size-"+n),i.each((function(){var t=o(this).data("tooltip-position"),n=o(this).data("tooltip-width"),i=o(this).data("tooltip-distance");window.innerWidth<=l.lg&&window.innerWidth>=l.md&&(t=e.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<l.md&&(t=e.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-mobile")),o(this).pptooltipster({trigger:p,animation:c,minWidth:n,ppclass:r,side:t,arrow:"yes"===d,distance:i,interactive:!0,positionTracker:!0,zIndex:s})}))},_=function(e,o){var n,i,a,r=t(e),d=e.find(".pp-content-reveal-content-wrapper"),p=e.find(".pp-content-reveal-content"),c=e.find(".pp-content-reveal-saparator"),s=e.find(".pp-content-reveal-button-inner"),l=e.find(".pp-content-reveal-buttons-wrapper"),f=p.outerHeight(),m=d.data("scroll-top"),u=d.data("visibility"),h=d.data("content-height"),g=1e3*d.data("speed"),v=d.data("lines"),w=e.find(".pp-content-reveal-content p").css("line-height");e=p.css("padding-top");"reveal"===r.default_content_state&&c.hide(),"lines"==u?("0"==v?n=d.outerHeight():(n=parseInt(w,10)*v+parseInt(e,10),"unreveal"===r.default_content_state&&d.css("height",n+"px")),e=p.find("> *"),a=i=0,e.each((function(e){if(i<v){var t=(r=this,c=window.getComputedStyle(r),(s=document.createElement(r.nodeName)).setAttribute("style","margin:0px;padding:0px;font-family:"+c.fontFamily+";font-size:"+c.fontSize),s.innerHTML="test",r=(s=r.parentNode.appendChild(s)).clientHeight,s.parentNode.removeChild(s),r),n=o(this).outerHeight()/t,r=window.getComputedStyle(this);if(1<n&&isFinite(n)){var d=0,p=1;for(p=1;p<=n;p++)i<v&&(a+=t,i++,d++);d===n&&(a+=parseInt(r.marginTop)+parseInt(r.marginBottom))}else a+=o(this).outerHeight(!0),i++}var c,s})),p.outerHeight(!0)-1<=a&&(l.hide(),c.hide())):("unreveal"===r.default_content_state&&d.css("height",h+"px"),n=h),s.on("click",(function(){c.slideToggle(g),o(this).toggleClass("pp-content-revealed"),s.hasClass("pp-content-revealed")?d.animate({height:f+"px"},g):(d.animate({height:n+"px"},g),"yes"==m&&o("html, body").animate({scrollTop:d.offset().top-50+"px"}))}))},k=function(e){var t,o,n,i,a,r;e.data("pp-wrapper-link")&&(t=e.data("pp-wrapper-link"),o=e.data("id"),n=t.url,i=t.is_external?"_blank":"_self",a=t.nofollow?"nofollow":"",r=document.createElement("a"),e.on("click.onPPWrapperLink",(function(){r.id="pp-wrapper-link-"+o,r.href=n,r.target=i,r.rel=a,r.style.display="none",document.body.appendChild(r);var e=document.getElementById(r.id);e.click();var t=setTimeout((function(){document.body.removeChild(e),clearTimeout(t)}))})))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.isEditMode()&&(o=!0),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-hotspots.default",d),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-comparison.default",p),elementorFrontend.hooks.addAction("frontend/element_ready/pp-counter.default",c),elementorFrontend.hooks.addAction("frontend/element_ready/pp-logo-carousel.default",a),elementorFrontend.hooks.addAction("frontend/element_ready/pp-info-box-carousel.default",l),elementorFrontend.hooks.addAction("frontend/element_ready/pp-instafeed.default",f),elementorFrontend.hooks.addAction("frontend/element_ready/pp-team-member-carousel.default",a),elementorFrontend.hooks.addAction("frontend/element_ready/pp-scroll-image.default",m),elementorFrontend.hooks.addAction("frontend/element_ready/pp-advanced-accordion.default",u),elementorFrontend.hooks.addAction("frontend/element_ready/pp-content-ticker.default",a),elementorFrontend.hooks.addAction("frontend/element_ready/pp-buttons.default",g),elementorFrontend.hooks.addAction("frontend/element_ready/pp-twitter-timeline.default",v),elementorFrontend.hooks.addAction("frontend/element_ready/pp-twitter-tweet.default",v),elementorFrontend.hooks.addAction("frontend/element_ready/pp-image-accordion.default",w),elementorFrontend.hooks.addAction("frontend/element_ready/pp-gravity-forms.default",y),elementorFrontend.hooks.addAction("frontend/element_ready/pp-pricing-table.default",b),elementorFrontend.hooks.addAction("frontend/element_ready/pp-content-reveal.default",_),elementorFrontend.hooks.addAction("frontend/element_ready/global",k),o&&parent.document.addEventListener("mousedown",(function(e){var t=parent.document.querySelectorAll(".elementor-element--promotion");if(0<t.length)for(var o=0;o<t.length;o++)if(t[o].contains(e.target)){var n,i,a=parent.document.querySelector("#elementor-element--promotion__dialog");0<=t[o].querySelector(".icon > i").classList.toString().indexOf("ppicon")?(a.querySelector(".dialog-buttons-action").style.display="none",null===a.querySelector(".pp-dialog-buttons-action")?(n=document.createElement("a"),i=document.createTextNode("Upgrade to PowerPack Pro"),n.setAttribute("href","https://powerpackelements.com/upgrade/?utm_medium=pp-elements-lite&utm_source=pp-editor-icons&utm_campaign=pp-pro-upgrade"),n.setAttribute("target","_blank"),n.classList.add("dialog-button","dialog-action","dialog-buttons-action","elementor-button","elementor-button-success","pp-dialog-buttons-action"),n.appendChild(i),a.querySelector(".dialog-buttons-action").insertAdjacentHTML("afterend",n.outerHTML)):a.querySelector(".pp-dialog-buttons-action").style.display=""):(a.querySelector(".dialog-buttons-action").style.display="",null!==a.querySelector(".pp-dialog-buttons-action")&&(a.querySelector(".pp-dialog-buttons-action").style.display="none"));break}}))}))}(jQuery);