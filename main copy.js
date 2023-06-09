import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <h1> Hello all</h1>
  <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">

<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- This site is optimized with the Yoast SEO plugin v20.0 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Autana Muebles</title>
	<meta name="description" content="SOMOS DISTRIBUIDORES Ofrecemos una variada gama de Móviles. Somos mayoristas, sin intermediarios lo que nos permite conseguir los precios mas convenientes del Mercado. En 2HANDTEK Tenemos como misión atender a Distribuidores, orientando la gestión comercial hacia las relaciones B2B. Por lo tanto asesoramos previamente, tratamos al cliente de manera individual y entregamos un producto tecnológico acorde a sus requerimientos." />
	<link rel="canonical" href="https://2handtek.com/" />
	<meta property="og:locale" content="es_ES" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Home - Líderes en Distribución" />
	<meta property="og:description" content="FABRICACIÓN DE MUEBLES, Ofrecemos una variada gama de muebles. Por lo tanto asesoramos previamente, tratamos al cliente de manera individual y entregamos un producto tecnológico acorde a sus requerimientos." />
	<meta property="og:url" content="https://www.autanamuebles.cl" />
	<meta property="og:site_name" content="Líderes en Distribución" />
	<meta property="article:modified_time" content="2023-02-21T23:05:57+00:00" />
	<meta property="og:image" content="https://2handtek.com/wp-content/uploads/2023/01/portfolio-3-300x300.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:label1" content="Tiempo de lectura" />
	<meta name="twitter:data1" content="4 minutos" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://2handtek.com/","url":"https://2handtek.com/","name":"Home - Líderes en Distribución","isPartOf":{"@id":"https://2handtek.com/#website"},"about":{"@id":"https://2handtek.com/#organization"},"primaryImageOfPage":{"@id":"https://2handtek.com/#primaryimage"},"image":{"@id":"https://2handtek.com/#primaryimage"},"thumbnailUrl":"https://2handtek.com/wp-content/uploads/2023/01/portfolio-3-300x300.jpg","datePublished":"2018-11-26T12:45:27+00:00","dateModified":"2023-02-21T23:05:57+00:00","description":"SOMOS DISTRIBUIDORES Ofrecemos una variada gama de Móviles. Somos mayoristas, sin intermediarios lo que nos permite conseguir los precios mas convenientes del Mercado. En 2HANDTEK Tenemos como misión atender a Distribuidores, orientando la gestión comercial hacia las relaciones B2B. Por lo tanto asesoramos previamente, tratamos al cliente de manera individual y entregamos un producto tecnológico acorde a sus requerimientos.","breadcrumb":{"@id":"https://2handtek.com/#breadcrumb"},"inLanguage":"es","potentialAction":[{"@type":"ReadAction","target":["https://2handtek.com/"]}]},{"@type":"ImageObject","inLanguage":"es","@id":"https://2handtek.com/#primaryimage","url":"https://2handtek.com/wp-content/uploads/2023/01/portfolio-3.jpg","contentUrl":"https://2handtek.com/wp-content/uploads/2023/01/portfolio-3.jpg","width":1500,"height":1500,"caption":"iPhone 14 Pro Max"},{"@type":"BreadcrumbList","@id":"https://2handtek.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Portada"}]},{"@type":"WebSite","@id":"https://2handtek.com/#website","url":"https://2handtek.com/","name":"Líderes en Distribución de móviles","description":"Tenemos los Mejores Precios","publisher":{"@id":"https://2handtek.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://2handtek.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"es"},{"@type":"Organization","@id":"https://2handtek.com/#organization","name":"2HANDTEK","url":"https://2handtek.com/","logo":{"@type":"ImageObject","inLanguage":"es","@id":"https://2handtek.com/#/schema/logo/image/","url":"https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png","contentUrl":"https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png","width":223,"height":112,"caption":"2HANDTEK"},"image":{"@id":"https://2handtek.com/#/schema/logo/image/"}}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel="alternate" type="application/rss+xml" title="Líderes en Distribución &raquo; Feed" href="https://2handtek.com/?feed=rss2" />
<link rel="alternate" type="application/rss+xml" title="Líderes en Distribución &raquo; Feed de los comentarios" href="https://2handtek.com/?feed=comments-rss2" />
<script>
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/2handtek.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.1.1"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
</script>
<style>
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='astra-theme-css-css' href='http://2handtek.com/wp-content/themes/astra/assets/css/minified/frontend.min.css?ver=4.0.2' media='all' />
<style id='astra-theme-css-inline-css'>
		#ast-scroll-top {
			display: none;
			position: fixed;
			text-align: center;
			cursor: pointer;
			z-index: 99;
			width: 2.1em;
			height: 2.1em;
			line-height: 2.1;
			color: #ffffff;
			border-radius: 2px;
			content: "";
		}
		@media (min-width: 769px) {
			#ast-scroll-top {
				content: "769";
			}
		}
		#ast-scroll-top .ast-icon.icon-arrow svg {
			margin-left: 0px;
			vertical-align: middle;
			transform: translate(0, -20%) rotate(180deg);
			width: 1.6em;
		}
		.ast-scroll-to-top-right {
			right: 30px;
			bottom: 30px;
		}
		.ast-scroll-to-top-left {
			left: 30px;
			bottom: 30px;
		}
	#ast-scroll-top{background-color:var(--ast-global-color-0);font-size:15px;font-size:0.88235294117647rem;}.ast-scroll-top-icon::before{content:"\e900";font-family:Astra;text-decoration:inherit;}.ast-scroll-top-icon{transform:rotate(180deg);}@media (max-width:921px){#ast-scroll-top .ast-icon.icon-arrow svg{width:1em;}}.ast-mobile-header-content > *,.ast-desktop-header-content > * {padding: 10px 0;height: auto;}.ast-mobile-header-content > *:first-child,.ast-desktop-header-content > *:first-child {padding-top: 10px;}.ast-mobile-header-content > .ast-builder-menu,.ast-desktop-header-content > .ast-builder-menu {padding-top: 0;}.ast-mobile-header-content > *:last-child,.ast-desktop-header-content > *:last-child {padding-bottom: 0;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search label,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search label {width: 100%;}.ast-desktop-header-content .main-header-bar-navigation .ast-submenu-expanded > .ast-menu-toggle::before {transform: rotateX(180deg);}#ast-desktop-header .ast-desktop-header-content,.ast-mobile-header-content .ast-search-icon,.ast-desktop-header-content .ast-search-icon,.ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-desktop-header-content {display: none;}.ast-main-header-nav-open.ast-header-break-point #ast-desktop-header .ast-desktop-header-content,.ast-main-header-nav-open.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content {display: block;}.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item .menu-item > .sub-menu {opacity: 1;visibility: visible;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation {width: unset;margin: unset;}.ast-mobile-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle,.ast-desktop-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle {left: calc( 20px - 0.907em);}.ast-mobile-header-content .ast-search-menu-icon,.ast-mobile-header-content .ast-search-menu-icon.slide-search,.ast-desktop-header-content .ast-search-menu-icon,.ast-desktop-header-content .ast-search-menu-icon.slide-search {width: 100%;position: relative;display: block;right: auto;transform: none;}.ast-mobile-header-content .ast-search-menu-icon.slide-search .search-form,.ast-mobile-header-content .ast-search-menu-icon .search-form,.ast-desktop-header-content .ast-search-menu-icon.slide-search .search-form,.ast-desktop-header-content .ast-search-menu-icon .search-form {right: 0;visibility: visible;opacity: 1;position: relative;top: auto;transform: none;padding: 0;display: block;overflow: hidden;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-mobile-header-content .ast-search-menu-icon .search-field,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-desktop-header-content .ast-search-menu-icon .search-field {width: 100%;padding-right: 5.5em;}.ast-mobile-header-content .ast-search-menu-icon .search-submit,.ast-desktop-header-content .ast-search-menu-icon .search-submit {display: block;position: absolute;height: 100%;top: 0;right: 0;padding: 0 1em;border-radius: 0;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation ul .sub-menu .menu-link {padding-left: 30px;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation .sub-menu .menu-item .menu-item .menu-link {padding-left: 40px;}.ast-mobile-popup-drawer.active .ast-mobile-popup-inner{background-color:;;}.ast-mobile-header-wrap .ast-mobile-header-content, .ast-desktop-header-content{background-color:;;}.ast-mobile-popup-content > *, .ast-mobile-header-content > *, .ast-desktop-popup-content > *, .ast-desktop-header-content > *{padding-top:0px;padding-bottom:0px;}.content-align-flex-start .ast-builder-layout-element{justify-content:flex-start;}.content-align-flex-start .main-header-menu{text-align:left;}.ast-mobile-popup-drawer.active .menu-toggle-close{color:#3a3a3a;}.ast-mobile-header-wrap .ast-primary-header-bar,.ast-primary-header-bar .site-primary-header-wrap{min-height:70px;}.ast-desktop .ast-primary-header-bar .main-header-menu > .menu-item{line-height:70px;}#masthead .ast-container,.site-header-focus-item + .ast-breadcrumbs-wrapper{max-width:100%;padding-left:35px;padding-right:35px;}@media (max-width:921px){#masthead .ast-mobile-header-wrap .ast-primary-header-bar,#masthead .ast-mobile-header-wrap .ast-below-header-bar{padding-left:20px;padding-right:20px;}}.ast-header-break-point .ast-primary-header-bar{border-bottom-width:0px;border-bottom-style:solid;}@media (min-width:922px){.ast-primary-header-bar{border-bottom-width:0px;border-bottom-style:solid;}}.ast-primary-header-bar{background-color:#ffffff;;background-image:none;;}@media (max-width:544px){.ast-primary-header-bar.ast-primary-header{background-color:rgba(31,31,27,0.16);;background-image:none;;}.ast-mobile-header-wrap .ast-primary-header-bar ,.ast-primary-header-bar .site-primary-header-wrap{min-height:47px;}}.ast-primary-header-bar{display:block;}@media (max-width:921px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}@media (max-width:544px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-fill{color:var(--ast-global-color-4);border:none;background:var(--ast-global-color-0);border-radius:0px;}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg{width:20px;height:20px;fill:var(--ast-global-color-4);}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu{color:var(--ast-global-color-4);}:root{--e-global-color-astglobalcolor0:#FF7A3D;--e-global-color-astglobalcolor1:#FF5100;--e-global-color-astglobalcolor2:#1E1810;--e-global-color-astglobalcolor3:#575250;--e-global-color-astglobalcolor4:#F8F5F4;--e-global-color-astglobalcolor5:#FFFFFF;--e-global-color-astglobalcolor6:#000000;--e-global-color-astglobalcolor7:#4B4F58;--e-global-color-astglobalcolor8:#F6F7F8;}
</style>
<link rel='stylesheet' id='astra-google-fonts-css' href='https://fonts.googleapis.com/css?family=Lato%3A400%7CMontserrat%3A700&#038;display=fallback&#038;ver=4.0.2' media='all' />
<link rel='stylesheet' id='astra-menu-animation-css' href='http://2handtek.com/wp-content/themes/astra/assets/css/minified/menu-animation.min.css?ver=4.0.2' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='http://2handtek.com/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1' media='all' />
<style id='joinchat-button-style-inline-css'>
.wp-block-joinchat-button{border:none!important;text-align:center}.wp-block-joinchat-button figure{display:table;margin:0 auto;padding:0}.wp-block-joinchat-button figcaption{font:normal normal 400 .6em/2em var(--wp--preset--font-family--system-font,sans-serif);margin:0;padding:0}.wp-block-joinchat-button .joinchat-button__qr{background-color:#fff;border:6px solid #25d366;border-radius:30px;box-sizing:content-box;display:block;height:200px;margin:auto;overflow:hidden;padding:10px;width:200px}.wp-block-joinchat-button .joinchat-button__qr canvas,.wp-block-joinchat-button .joinchat-button__qr img{display:block;margin:auto}.wp-block-joinchat-button .joinchat-button__link{align-items:center;background-color:#25d366;border:6px solid #25d366;border-radius:30px;display:inline-flex;flex-flow:row nowrap;justify-content:center;line-height:1.25em;margin:0 auto;text-decoration:none}.wp-block-joinchat-button .joinchat-button__link:before{background:transparent var(--joinchat-ico) no-repeat center;background-size:100%;content:"";display:block;height:1.5em;margin:-.75em .75em -.75em 0;width:1.5em}.wp-block-joinchat-button figure+.joinchat-button__link{margin-top:10px}@media (orientation:landscape)and (min-height:481px),(orientation:portrait)and (min-width:481px){.wp-block-joinchat-button.joinchat-button--qr-only figure+.joinchat-button__link{display:none}}@media (max-width:480px),(orientation:landscape)and (max-height:480px){.wp-block-joinchat-button figure{display:none}}

</style>
<style id='global-styles-inline-css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--ast-global-color-0: var(--ast-global-color-0);--wp--preset--color--ast-global-color-1: var(--ast-global-color-1);--wp--preset--color--ast-global-color-2: var(--ast-global-color-2);--wp--preset--color--ast-global-color-3: var(--ast-global-color-3);--wp--preset--color--ast-global-color-4: var(--ast-global-color-4);--wp--preset--color--ast-global-color-5: var(--ast-global-color-5);--wp--preset--color--ast-global-color-6: var(--ast-global-color-6);--wp--preset--color--ast-global-color-7: var(--ast-global-color-7);--wp--preset--color--ast-global-color-8: var(--ast-global-color-8);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;}body { margin: 0;--wp--style--global--content-size: var(--wp--custom--ast-content-width-size);--wp--style--global--wide-size: var(--wp--custom--ast-wide-width-size); }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }.wp-site-blocks > * { margin-block-start: 0; margin-block-end: 0; }.wp-site-blocks > * + * { margin-block-start: 24px; }body { --wp--style--block-gap: 24px; }body .is-layout-flow > *{margin-block-start: 0;margin-block-end: 0;}body .is-layout-flow > * + *{margin-block-start: 24px;margin-block-end: 0;}body .is-layout-constrained > *{margin-block-start: 0;margin-block-end: 0;}body .is-layout-constrained > * + *{margin-block-start: 24px;margin-block-end: 0;}body .is-layout-flex{gap: 24px;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: none;}.wp-element-button, .wp-block-button__link{background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-color{color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-color{color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-color{color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-color{color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-color{color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-color{color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-color{color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-color{color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-color{color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-background-color{background-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-background-color{background-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-background-color{background-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-background-color{background-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-background-color{background-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-background-color{background-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-background-color{background-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-background-color{background-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-background-color{background-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-border-color{border-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-border-color{border-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-border-color{border-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-border-color{border-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-border-color{border-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-border-color{border-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-border-color{border-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-border-color{border-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-border-color{border-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='wpforms-choicesjs-css' href='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/css/choices.min.css?ver=9.0.1' media='all' />
<link rel='stylesheet' id='wpforms-jquery-timepicker-css' href='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/jquery.timepicker/jquery.timepicker.min.css?ver=1.11.5' media='all' />
<link rel='stylesheet' id='wpforms-flatpickr-css' href='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/flatpickr/flatpickr.min.css?ver=4.6.9' media='all' />
<link rel='stylesheet' id='wpforms-base-css' href='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/css/wpforms-base.min.css?ver=1.7.9.1' media='all' />
<link rel='stylesheet' id='cookie-notice-front-css' href='http://2handtek.com/wp-content/plugins/cookie-notice/css/front.min.css?ver=6.1.1' media='all' />
<link rel='stylesheet' id='joinchat-css' href='http://2handtek.com/wp-content/plugins/creame-whatsapp-me/public/css/joinchat.min.css?ver=4.5.16' media='all' />
<style id='joinchat-inline-css'>
.joinchat{ --red:37; --green:211; --blue:102; }
</style>
<link rel='stylesheet' id='elementor-icons-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.17.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.10.1' media='all' />
<link rel='stylesheet' id='elementor-post-475-css' href='http://2handtek.com/wp-content/uploads/elementor/css/post-475.css?ver=1674876877' media='all' />
<link rel='stylesheet' id='font-awesome-5-all-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=3.10.1' media='all' />
<link rel='stylesheet' id='font-awesome-4-shim-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.10.1' media='all' />
<link rel='stylesheet' id='elementor-post-125-css' href='http://2handtek.com/wp-content/uploads/elementor/css/post-125.css?ver=1677020953' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.1.1' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-brands-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><!--[if IE]>
<script src='http://2handtek.com/wp-content/themes/astra/assets/js/minified/flexibility.min.js?ver=4.0.2' id='astra-flexibility-js'></script>
<script id='astra-flexibility-js-after'>
flexibility(document.documentElement);
</script>
<![endif]-->
<script id='cookie-notice-front-js-extra'>
var cnArgs = {"ajaxUrl":"https:\/\/2handtek.com\/wp-admin\/admin-ajax.php","nonce":"99ae4f47bf","hideEffect":"fade","position":"bottom","onScroll":"0","onScrollOffset":"100","onClick":"0","cookieName":"cookie_notice_accepted","cookieTime":"2592000","cookieTimeRejected":"2592000","globalCookie":"0","redirection":"0","cache":"0","refuse":"0","revokeCookies":"0","revokeCookiesOpt":"automatic","secure":"0"};
</script>
<script async src='http://2handtek.com/wp-content/plugins/cookie-notice/js/front.min.js?ver=2.4.6' id='cookie-notice-front-js'></script>
<script src='http://2handtek.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js'></script>
<script src='http://2handtek.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script src='http://2handtek.com/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.10.1' id='font-awesome-4-shim-js'></script>
<link rel="https://api.w.org/" href="https://2handtek.com/index.php?rest_route=/" /><link rel="alternate" type="application/json" href="https://2handtek.com/index.php?rest_route=/wp/v2/pages/125" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://2handtek.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://2handtek.com/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.1.1" />
<link rel='shortlink' href='https://2handtek.com/' />
<link rel="alternate" type="application/json+oembed" href="https://2handtek.com/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=https%3A%2F%2F2handtek.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://2handtek.com/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=https%3A%2F%2F2handtek.com%2F&#038;format=xml" />
<meta name="generator" content="Site Kit by Google 1.93.0" /><style>.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style><link rel="icon" href="https://2handtek.com/wp-content/uploads/2023/01/cropped-cropped-hero_logo-1-32x32.png" sizes="32x32" />
<link rel="icon" href="https://2handtek.com/wp-content/uploads/2023/01/cropped-cropped-hero_logo-1-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://2handtek.com/wp-content/uploads/2023/01/cropped-cropped-hero_logo-1-180x180.png" />
<meta name="msapplication-TileImage" content="https://2handtek.com/wp-content/uploads/2023/01/cropped-cropped-hero_logo-1-270x270.png" />
</head>

<body itemtype='https://schema.org/WebPage' itemscope='itemscope' class="home page-template-default page page-id-125 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.0.2 ast-single-post ast-mobile-inherit-site-logo ast-replace-site-logo-transparent ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header ast-full-width-primary-header cookies-not-set elementor-default elementor-kit-475 elementor-page elementor-page-125">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg>
<a
	class="skip-link screen-reader-text"
	href="#content"
	role="link"
	title="Ir al contenido">
		Ir al contenido</a>

<div
class="hfeed site" id="page">
			<header
		class="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead"		>
			<div id="ast-desktop-header" data-toggle-type="dropdown">
		<div class="ast-main-header-wrap main-header-bar-wrap ">
		<div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
						<div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
				<div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
											<div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
									<div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
											<div
				class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope"				>
					<span class="site-logo-img"><a href="https://2handtek.com/" class="custom-logo-link transparent-custom-logo" rel="home" itemprop="url" aria-label="Líderes en Distribución"><img width="207" height="104" src="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo-207x104.png" class="custom-logo" alt="" decoding="async" loading="lazy" srcset="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo-207x104.png 207w, https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png 223w" sizes="(max-width: 207px) 100vw, 207px" /></a></span>				</div>
			<!-- .site-branding -->
					</div>
								</div>
																									<div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
										<div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
			<div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Navegación del sitio" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  ast-menu-hover-style-underline  stack-on-mobile"><li id="menu-item-588" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-588"><a href="https://2handtek.com/" aria-current="page" class="menu-link">Home</a></li>
<li id="menu-item-590" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-590"><a href="https://2handtek.com/#portafolio" aria-current="page" class="menu-link">Portafolio</a></li>
<li id="menu-item-586" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-586"><a href="https://2handtek.com/#sobre-nosotros" aria-current="page" class="menu-link">Sobre Nosotros</a></li>
<li id="menu-item-589" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-589"><a href="https://2handtek.com/#servicios" aria-current="page" class="menu-link">Servicios</a></li>
<li id="menu-item-591" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-591"><a href="https://2handtek.com/#contacto" aria-current="page" class="menu-link">Contacto</a></li>
</ul></div></nav></div></div>		</div>
				<div class="ast-builder-layout-element ast-flex site-header-focus-item ast-header-button-1" data-section="section-hb-button-1">
			<div class="ast-builder-button-wrap ast-builder-button-size-"><a class="ast-custom-button-link" href="https://wa.me/34640134218" target="_self" ><div class=ast-custom-button>Escríbenos</div></a><a class="menu-link" href="https://wa.me/34640134218" target="_self" >Escríbenos</a></div>		</div>
									</div>
												</div>
					</div>
								</div>
			</div>
		<div class="ast-desktop-header-content content-align-flex-start ">
			</div>
</div> <!-- Main Header Bar Wrap -->
<div id="ast-mobile-header" class="ast-mobile-header-wrap " data-type="dropdown">
		<div class="ast-main-header-wrap main-header-bar-wrap" >
		<div class="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-primary-header-builder">
									<div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
													<div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
										<div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
											<div
				class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope"				>
					<span class="site-logo-img"><a href="https://2handtek.com/" class="custom-logo-link transparent-custom-logo" rel="home" itemprop="url" aria-label="Líderes en Distribución"><img width="207" height="104" src="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo-207x104.png" class="custom-logo" alt="" decoding="async" loading="lazy" srcset="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo-207x104.png 207w, https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png 223w" sizes="(max-width: 207px) 100vw, 207px" /></a></span>				</div>
			<!-- .site-branding -->
					</div>
									</div>
																									<div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
										<div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
						<div class="ast-button-wrap">
				<button type="button" class="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-fill"   aria-expanded="false">
					<span class="screen-reader-text">Main Menu</span>
					<span class="mobile-menu-toggle-icon">
						<span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg class='ast-mobile-svg ast-menu-svg' fill='currentColor' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z'></path></svg></span><span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg class='ast-mobile-svg ast-close-svg' fill='currentColor' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'></path></svg></span>					</span>
									</button>
			</div>
					</div>
									</div>
											</div>
						</div>
	</div>
		<div class="ast-mobile-header-content content-align-flex-start ">
				<div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
			<div class="ast-main-header-bar-alignment"><div class="main-header-bar-navigation"><nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="primary-site-navigation" aria-label="Navegación del sitio" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope"><div class="main-navigation ast-inline-flex"><ul id="ast-hf-menu-1" class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  ast-menu-hover-style-underline  stack-on-mobile"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-588"><a href="https://2handtek.com/" aria-current="page" class="menu-link">Home</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-590"><a href="https://2handtek.com/#portafolio" aria-current="page" class="menu-link">Portafolio</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-586"><a href="https://2handtek.com/#sobre-nosotros" aria-current="page" class="menu-link">Sobre Nosotros</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-589"><a href="https://2handtek.com/#servicios" aria-current="page" class="menu-link">Servicios</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-591"><a href="https://2handtek.com/#contacto" aria-current="page" class="menu-link">Contacto</a></li>
</ul></div></nav></div></div>		</div>
			</div>
</div>
		</header><!-- #masthead -->
			<div id="content" class="site-content">
		<div class="ast-container">
		

	<div id="primary" class="content-area primary">

		
					<main id="main" class="site-main">
				<article
class="post-125 page type-page status-publish ast-article-single" id="post-125" itemtype="https://schema.org/CreativeWork" itemscope="itemscope">
	
	
	<header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
			</header> <!-- .entry-header -->


<div class="entry-content clear"
	itemprop="text">

	
			<div data-elementor-type="wp-post" data-elementor-id="125" class="elementor elementor-125">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-567911d elementor-section-content-middle elementor-section-full_width elementor-section-height-full elementor-section-items-stretch elementor-section-height-default" data-id="567911d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;slideshow&quot;,&quot;background_slideshow_gallery&quot;:[{&quot;id&quot;:623,&quot;url&quot;:&quot;https:\/\/2handtek.com\/wp-content\/uploads\/2023\/01\/hero-bg-1.jpg&quot;},{&quot;id&quot;:594,&quot;url&quot;:&quot;https:\/\/2handtek.com\/wp-content\/uploads\/2023\/01\/BG.jpg&quot;},{&quot;id&quot;:1077,&quot;url&quot;:&quot;https:\/\/2handtek.com\/wp-content\/uploads\/2023\/01\/hero-bg-08.jpg&quot;},{&quot;id&quot;:1041,&quot;url&quot;:&quot;https:\/\/2handtek.com\/wp-content\/uploads\/2023\/01\/hero-bg-02.jpg&quot;}],&quot;background_slideshow_ken_burns&quot;:&quot;yes&quot;,&quot;animation&quot;:&quot;none&quot;,&quot;background_slideshow_loop&quot;:&quot;yes&quot;,&quot;background_slideshow_slide_duration&quot;:5000,&quot;background_slideshow_slide_transition&quot;:&quot;fade&quot;,&quot;background_slideshow_transition_duration&quot;:500,&quot;background_slideshow_ken_burns_zoom_direction&quot;:&quot;in&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b3743c8" data-id="b3743c8" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-0cfef53 elementor-widget elementor-widget-heading" data-id="0cfef53" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h5 class="elementor-heading-title elementor-size-default">BIENVENIDOS A 2HANDTEK</h5>		</div>
				</div>
				<div class="elementor-element elementor-element-82092e7 elementor-widget elementor-widget-heading" data-id="82092e7" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h1 class="elementor-heading-title elementor-size-default">Líderes en distribución</h1>		</div>
				</div>
				<div class="elementor-element elementor-element-f1f059f elementor-align-center elementor-widget elementor-widget-button" data-id="f1f059f" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a href="#portafolio" class="elementor-button-link elementor-button elementor-size-lg" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">Ver Más</span>
		</span>
					</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-e2fa0d5 elementor-view-default elementor-widget elementor-widget-icon" data-id="e2fa0d5" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<i aria-hidden="true" class="fas fa-long-arrow-alt-down"></i>			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-7d71124 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7d71124" data-element_type="section" id="portafolio" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8b03254" data-id="8b03254" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-2e78b54 elementor-widget elementor-widget-heading" data-id="2e78b54" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title elementor-size-default">Portafolio</h5>		</div>
				</div>
				<div class="elementor-element elementor-element-bf6fcd6 elementor-widget elementor-widget-heading" data-id="bf6fcd6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">EQUIPOS NUEVOS</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-81d440e elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="81d440e" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#2c2c2c;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-45394f6 elementor-widget elementor-widget-heading" data-id="45394f6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Tenemos una gran variedad de Productos</p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-44d0cdd elementor-section-stretched animated-fast elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="44d0cdd" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd0595f" data-id="cd0595f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-72998ff elementor-arrows-position-outside elementor-widget elementor-widget-image-carousel" data-id="72998ff" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;4&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;navigation&quot;:&quot;arrows&quot;,&quot;pause_on_interaction&quot;:&quot;no&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-image-carousel .swiper-container{position:static}.elementor-widget-image-carousel .swiper-container .swiper-slide figure{line-height:inherit}.elementor-widget-image-carousel .swiper-slide{text-align:center}.elementor-image-carousel-wrapper:not(.swiper-container-initialized) .swiper-slide{max-width:calc(100% / var(--e-image-carousel-slides-to-show, 3))}</style>		<div class="elementor-image-carousel-wrapper swiper-container" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch">
								<div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-3-300x300.jpg" alt="iPhone 14 Pro Max" /><figcaption class="elementor-image-carousel-caption">iPhone 14 Pro Max</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-1-300x300.jpg" alt="iPhone 14" /><figcaption class="elementor-image-carousel-caption">iPhone 14</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-2-300x300.jpg" alt="iPhone 14 Pro" /><figcaption class="elementor-image-carousel-caption">iPhone 14 Pro</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-4-300x300.jpg" alt="iPhone 13 Pro Max" /><figcaption class="elementor-image-carousel-caption">iPhone 13 Pro Max</figcaption></figure></div>			</div>
																<div class="elementor-swiper-button elementor-swiper-button-prev">
						<i aria-hidden="true" class="eicon-chevron-left"></i>						<span class="elementor-screen-only">Anterior</span>
					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next">
						<i aria-hidden="true" class="eicon-chevron-right"></i>						<span class="elementor-screen-only">Siguiente</span>
					</div>
									</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-367c95b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="367c95b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a787396" data-id="a787396" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-e446593 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e446593" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-35d1513" data-id="35d1513" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-cef4039 elementor-widget elementor-widget-heading" data-id="cef4039" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">EQUIPOS REACONDICIONADOS</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-a47ee2b elementor-widget elementor-widget-heading" data-id="a47ee2b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Nuestros Equipos han pasado por un control de calidad exhaustivo de 34 puntos de testing.</p>		</div>
				</div>
				<div class="elementor-element elementor-element-a645865 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="a645865" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-5451e24 elementor-widget elementor-widget-heading" data-id="5451e24" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Usado Grado A</p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-bca0023 elementor-section-stretched animated-fast elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="bca0023" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc84a20" data-id="dc84a20" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-6a586a1 elementor-arrows-position-outside elementor-widget elementor-widget-image-carousel" data-id="6a586a1" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;4&quot;,&quot;slides_to_show_mobile&quot;:&quot;2&quot;,&quot;navigation&quot;:&quot;arrows&quot;,&quot;pause_on_hover&quot;:&quot;no&quot;,&quot;pause_on_interaction&quot;:&quot;no&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-carousel-wrapper swiper-container" dir="rtl">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch">
								<div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-5-300x300.jpg" alt="iPhone 13 Pro Max 128GB" /><figcaption class="elementor-image-carousel-caption">iPhone 13 Pro Max 128GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-6-300x300.jpg" alt="iPhone 13 Pro 128GB" /><figcaption class="elementor-image-carousel-caption">iPhone 13 Pro 128GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-7-300x300.jpg" alt="iPhone 13 Pro de 512 GB" /><figcaption class="elementor-image-carousel-caption">iPhone 13 Pro de 512 GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-8-300x300.jpg" alt="iPhone 13 256GB" /><figcaption class="elementor-image-carousel-caption">iPhone 13 256GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-9-300x300.jpg" alt="iPhone 12 Pro 256 GB" /><figcaption class="elementor-image-carousel-caption">iPhone 12 Pro 256 GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-10-300x300.jpg" alt="iPhone 12 de 128 GB" /><figcaption class="elementor-image-carousel-caption">iPhone 12 de 128 GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-11-300x300.jpg" alt="iPhone 11 128 GB" /><figcaption class="elementor-image-carousel-caption">iPhone 11 128 GB</figcaption></figure></div><div class="swiper-slide"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="https://2handtek.com/wp-content/uploads/2023/01/portfolio-12-300x300.jpg" alt="iPhone 11 de 64 GB" /><figcaption class="elementor-image-carousel-caption">iPhone 11 de 64 GB</figcaption></figure></div>			</div>
																<div class="elementor-swiper-button elementor-swiper-button-prev">
						<i aria-hidden="true" class="eicon-chevron-left"></i>						<span class="elementor-screen-only">Anterior</span>
					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next">
						<i aria-hidden="true" class="eicon-chevron-right"></i>						<span class="elementor-screen-only">Siguiente</span>
					</div>
									</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-72897bd elementor-section-content-middle elementor-section-height-full elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="72897bd" data-element_type="section" id="sobre-nosotros" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<section class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7199241" data-id="7199241" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c4d0e0d elementor-widget elementor-widget-heading" data-id="c4d0e0d" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title elementor-size-default">Sobre Nosotros</h5>		</div>
				</div>
				<div class="elementor-element elementor-element-2a8eb2a elementor-widget elementor-widget-heading" data-id="2a8eb2a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">SOMOS DISTRIBUIDORES</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-2b6f784 elementor-widget elementor-widget-text-editor" data-id="2b6f784" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#818a91;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#818a91;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>Ofrecemos una variada gama de Móviles. Somos mayoristas, sin intermediarios lo que nos permite conseguir los precios mas convenientes del Mercado.</p><p>En 2HANDTEK Tenemos como misión atender a Distribuidores, orientando la gestión comercial hacia las relaciones B2B. Por lo tanto asesoramos previamente, tratamos al cliente de manera individual y entregamos un producto tecnológico acorde a sus requerimientos.</p><p>Nos atrevemos a hacer las cosas de forma diferente. Disfrutamos trabajando, aprendemos de los errores y celebramos los éxitos juntos.</p>						</div>
				</div>
					</div>
		</section>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-36db80a elementor-section-content-middle elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="36db80a" data-element_type="section" id="servicios" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-386ff2c" data-id="386ff2c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-b2e6e4c elementor-widget elementor-widget-heading" data-id="b2e6e4c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title elementor-size-default">Nuestros Servicios</h5>		</div>
				</div>
				<div class="elementor-element elementor-element-302b47b elementor-widget elementor-widget-heading" data-id="302b47b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Pensamos en Distribución</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-ad36ec5 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="ad36ec5" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-926a501 elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="926a501" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-image-box .elementor-image-box-content{width:100%}@media (min-width:768px){.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{display:flex}.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{text-align:right;flex-direction:row-reverse}.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper{text-align:left;flex-direction:row}.elementor-widget-image-box.elementor-position-top .elementor-image-box-img{margin:auto}.elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper{align-items:flex-start}.elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper{align-items:center}.elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper{align-items:flex-end}}@media (max-width:767px){.elementor-widget-image-box .elementor-image-box-img{margin-left:auto!important;margin-right:auto!important;margin-bottom:15px}}.elementor-widget-image-box .elementor-image-box-img{display:inline-block}.elementor-widget-image-box .elementor-image-box-title a{color:inherit}.elementor-widget-image-box .elementor-image-box-wrapper{text-align:center}.elementor-widget-image-box .elementor-image-box-description{margin:0}</style><div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">LOS MEJORES EQUIPOS</h4><p class="elementor-image-box-description">Contamos con una gran variedad de equipos Nuevos y Reacondicionados.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-86051f3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="86051f3" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-9e1a1a3 elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="9e1a1a3" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">EL MEJOR PRECIO</h4><p class="elementor-image-box-description">La estrecha relación entre nuestro departamento de compras y los fabricantes que han confiado la distribución de sus productos a 2HANDTEK nos permite lograr condiciones excepcionales.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-6114d9e elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="6114d9e" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-55266ed elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="55266ed" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">SOPORTE TÉCNICO</h4><p class="elementor-image-box-description">Contamos con un grupo de expertos, que brindan un servicio técnico integral buscando siempre satisfacer los requerimientos de nuestros clientes.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-ac7dcb3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="ac7dcb3" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-71f2d24 elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="71f2d24" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">LOS MEJORES PROVEEDORES</h4><p class="elementor-image-box-description">Contamos con proveedores en toda Europa que nos permite conseguir gran variedad de productos a buenos precios y ofrecerlos en todo el territorio nacional.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-ab7eeba elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="ab7eeba" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-4b20992 elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="4b20992" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><div class="elementor-image-box-content"><h4 class="elementor-image-box-title">LOGÍSTICA</h4><p class="elementor-image-box-description">Trabajamos con envios expres y reciben en 18-24 horas.</p></div></div>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9680ba5" data-id="9680ba5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-9d975a5 elementor-widget elementor-widget-heading" data-id="9d975a5" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">¡Vendemos Calidad!</h2>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-a0bc5c1 elementor-section-content-middle animated-fast elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="a0bc5c1" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;animation&quot;:&quot;bounceIn&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d601f84" data-id="d601f84" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-471ffbe elementor-widget elementor-widget-heading" data-id="471ffbe" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">¡Escríbenos qué producto buscas!  Si no lo tenemos, lo conseguimos.</h3>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-31b8d64" data-id="31b8d64" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-038616e elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="038616e" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a href="https://wa.me/34640134218" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-content-wrapper">
							<span class="elementor-button-icon elementor-align-icon-left">
				<i aria-hidden="true" class="fab fa-whatsapp"></i>			</span>
						<span class="elementor-button-text">WhatsApp</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-a6eb60d elementor-section-full_width elementor-section-height-full elementor-section-items-stretch elementor-section-stretched elementor-section-height-default" data-id="a6eb60d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f9dbca2" data-id="f9dbca2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-ad062ea elementor-widget__width-inherit elementor-aspect-ratio-169 elementor-widget elementor-widget-video" data-id="ad062ea" data-element_type="widget" data-settings="{&quot;video_type&quot;:&quot;hosted&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;play_on_mobile&quot;:&quot;yes&quot;,&quot;mute&quot;:&quot;yes&quot;,&quot;loop&quot;:&quot;yes&quot;,&quot;aspect_ratio&quot;:&quot;169&quot;}" data-widget_type="video.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-video .elementor-widget-container{overflow:hidden;transform:translateZ(0)}.elementor-widget-video .elementor-open-inline .elementor-custom-embed-image-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:50%}.elementor-widget-video .elementor-custom-embed-image-overlay{cursor:pointer;text-align:center}.elementor-widget-video .elementor-custom-embed-image-overlay:hover .elementor-custom-embed-play i{opacity:1}.elementor-widget-video .elementor-custom-embed-image-overlay img{display:block;width:100%}.elementor-widget-video .e-hosted-video .elementor-video{-o-object-fit:cover;object-fit:cover}.e-con-inner>.elementor-widget-video,.e-con>.elementor-widget-video{width:var(--container-widget-width);--flex-grow:var(--container-widget-flex-grow)}</style>		<div class="e-hosted-video elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
					<video class="elementor-video" src="https://2handtek.com/wp-content/uploads/2023/01/video_1.mp4" autoplay="" loop="" muted="muted" playsinline="" controlsList="nodownload"></video>
				</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-314b7e7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="314b7e7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8062b7" data-id="d8062b7" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-f04ea58 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f04ea58" data-element_type="section" id="contacto" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-218043c" data-id="218043c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<section class="elementor-section elementor-inner-section elementor-element elementor-element-645442c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="645442c" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-77e17fe" data-id="77e17fe" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
									</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-546703e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="546703e" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b242efc" data-id="b242efc" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-6f34556 elementor-widget elementor-widget-heading" data-id="6f34556" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h5 class="elementor-heading-title elementor-size-default">Contacto</h5>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-a50ae56 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a50ae56" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-96fcb9e" data-id="96fcb9e" data-element_type="column">
			<div class="elementor-widget-wrap">
									</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-08b1638 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="08b1638" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-be67494" data-id="be67494" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-461329e elementor-view-default elementor-widget elementor-widget-icon" data-id="461329e" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<i aria-hidden="true" class="fas fa-map-marker-alt"></i>			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d980084" data-id="d980084" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-d19f749 elementor-widget elementor-widget-heading" data-id="d19f749" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h6 class="elementor-heading-title elementor-size-default">Dirección</h6>		</div>
				</div>
				<div class="elementor-element elementor-element-b107a17 elementor-widget elementor-widget-heading" data-id="b107a17" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Calle Arrastaria 21, 28022
Madrid
</p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-1594f23 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1594f23" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-72588fa" data-id="72588fa" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-514da15 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="514da15" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-1687b35 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1687b35" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-718bf22" data-id="718bf22" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-147a14e elementor-view-default elementor-widget elementor-widget-icon" data-id="147a14e" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<i aria-hidden="true" class="fas fa-mail-bulk"></i>			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-155d2ce" data-id="155d2ce" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c6ab678 elementor-widget elementor-widget-heading" data-id="c6ab678" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h6 class="elementor-heading-title elementor-size-default">Email</h6>		</div>
				</div>
				<div class="elementor-element elementor-element-864b40a elementor-widget elementor-widget-heading" data-id="864b40a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">sales@2handtek.com
</p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-6da491a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6da491a" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-dedf111" data-id="dedf111" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-9059cfb elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="9059cfb" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-89656c2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="89656c2" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ed6dbfb" data-id="ed6dbfb" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-f74187e elementor-view-default elementor-widget elementor-widget-icon" data-id="f74187e" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<i aria-hidden="true" class="fas fa-phone-alt"></i>			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-29fcea6" data-id="29fcea6" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c8e0302 elementor-widget elementor-widget-heading" data-id="c8e0302" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h6 class="elementor-heading-title elementor-size-default">Teléfono</h6>		</div>
				</div>
				<div class="elementor-element elementor-element-d61b3c6 elementor-widget elementor-widget-heading" data-id="d61b3c6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">+34 640 13 42 18
</p>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f2f7aa1" data-id="f2f7aa1" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-33fb656 elementor-widget elementor-widget-heading" data-id="33fb656" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">

</p>		</div>
				</div>
				<div class="elementor-element elementor-element-3e97401 elementor-widget elementor-widget-heading" data-id="3e97401" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">

</p>		</div>
				</div>
				<div class="elementor-element elementor-element-50a83f2 elementor-widget elementor-widget-heading" data-id="50a83f2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">

</p>		</div>
				</div>
				<div class="elementor-element elementor-element-a832886 elementor-widget elementor-widget-heading" data-id="a832886" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<p class="elementor-heading-title elementor-size-default">Nuestro equipo está atento para atenderle.  Puede realizar la consulta que desee, a través de este formulario, vía Email o WhatsApp.</p>		</div>
				</div>
				<div class="elementor-element elementor-element-bda0a63 elementor-widget elementor-widget-wpforms" data-id="bda0a63" data-element_type="widget" data-widget_type="wpforms.default">
				<div class="elementor-widget-container">
			<div class="wpforms-container " id="wpforms-24"><form id="wpforms-form-24" class="wpforms-validate wpforms-form" data-formid="24" method="post" enctype="multipart/form-data" action="/" data-token="3cf04d712c00d9225663170f41bac134"><noscript class="wpforms-error-noscript">Por favor, activa JavaScript en tu navegador para completar este formulario.</noscript><div class="wpforms-field-container"><div id="wpforms-24-field_0-container" class="wpforms-field wpforms-field-name" data-field-id="0"><label class="wpforms-field-label" for="wpforms-24-field_0">Nombre y Apellidos <span class="wpforms-required-label">*</span></label><div class="wpforms-field-row wpforms-field-large"><div class="wpforms-field-row-block wpforms-first wpforms-one-half"><input type="text" id="wpforms-24-field_0" class="wpforms-field-name-first wpforms-field-required" name="wpforms[fields][0][first]" required><label for="wpforms-24-field_0" class="wpforms-field-sublabel after ">Nombre</label></div><div class="wpforms-field-row-block wpforms-one-half"><input type="text" id="wpforms-24-field_0-last" class="wpforms-field-name-last wpforms-field-required" name="wpforms[fields][0][last]" required><label for="wpforms-24-field_0-last" class="wpforms-field-sublabel after ">Apellidos</label></div></div></div><div id="wpforms-24-field_1-container" class="wpforms-field wpforms-field-email" data-field-id="1"><label class="wpforms-field-label" for="wpforms-24-field_1">Email <span class="wpforms-required-label">*</span></label><input type="email" id="wpforms-24-field_1" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][1]" required></div><div id="wpforms-24-field_4-container" class="wpforms-field wpforms-field-text" data-field-id="4"><label class="wpforms-field-label" for="wpforms-24-field_4">Asunto <span class="wpforms-required-label">*</span></label><input type="text" id="wpforms-24-field_4" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][4]" required></div><div id="wpforms-24-field_2-container" class="wpforms-field wpforms-field-textarea" data-field-id="2"><label class="wpforms-field-label" for="wpforms-24-field_2">Mensaje <span class="wpforms-required-label">*</span></label><textarea id="wpforms-24-field_2" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][2]" required></textarea></div></div><div class="wpforms-field wpforms-field-hp"><label for="wpforms-24-field-hp" class="wpforms-field-label">Comment</label><input type="text" name="wpforms[hp]" id="wpforms-24-field-hp" class="wpforms-field-medium"></div><div class="wpforms-submit-container"><input type="hidden" name="wpforms[id]" value="24"><input type="hidden" name="wpforms[author]" value="1"><input type="hidden" name="wpforms[post_id]" value="125"><button type="submit" name="wpforms[submit]" id="wpforms-submit-24" class="wpforms-submit" data-alt-text="Enviando..." data-submit-text="ENVIAR" aria-live="assertive" value="wpforms-submit">ENVIAR</button></div></form></div>  <!-- .wpforms-container -->		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-2f566ec elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default" data-id="2f566ec" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9b06655" data-id="9b06655" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-a122acc elementor-widget elementor-widget-google_maps" data-id="a122acc" data-element_type="widget" data-widget_type="google_maps.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.10.1 - 17-01-2023 */
.elementor-widget-google_maps .elementor-widget-container{overflow:hidden}.elementor-widget-google_maps iframe{height:300px}</style>		<div class="elementor-custom-embed">
			<iframe loading="lazy"
					src="https://maps.google.com/maps?q=Calle%20Arrastaria%2021%2C%2028022%20Madrid&#038;t=m&#038;z=9&#038;output=embed&#038;iwloc=near"
					title="Calle Arrastaria 21, 28022 Madrid"
					aria-label="Calle Arrastaria 21, 28022 Madrid"
			></iframe>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
							</div>
		
	
	
</div><!-- .entry-content .clear -->

	
	
</article><!-- #post-## -->

			</main><!-- #main -->
			
		
	</div><!-- #primary -->


	</div> <!-- ast-container -->
	</div><!-- #content -->
<footer
class="site-footer" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
			<div class="site-above-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-equal ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-above-footer-builder">
	<div class="ast-builder-grid-row-container-inner">
					<div class="ast-builder-footer-grid-columns site-above-footer-inner-wrap ast-builder-grid-row">
											<div class="site-footer-above-section-1 site-footer-section site-footer-section-1">
							<aside
		class="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1"				>
			<div class="footer-widget-area-inner site-info-inner"><section id="text-2" class="widget widget_text">			<div class="textwidget"><p><img decoding="async" loading="lazy" class="alignnone size-full wp-image-8" src="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png" alt="" width="223" height="112" srcset="https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo.png 223w, https://2handtek.com/wp-content/uploads/2023/01/cropped-hero_logo-207x104.png 207w" sizes="(max-width: 223px) 100vw, 223px" /></p>
<p>Somos Líderes en Distribución.</p>
<p>Nuestro Servicio de envío Express permite que lleguemos más rápido a ti.</p>
</div>
		</section></div>		</aside>
						</div>
											<div class="site-footer-above-section-2 site-footer-section site-footer-section-2">
								<div class="footer-widget-area widget-area site-footer-focus-item ast-footer-html-2" data-section="section-fb-html-2">
				<div class="ast-header-html inner-link-style-"><div class="ast-builder-html-element"><h4 style="text-align: left;">Servicios</h4>
<p style="text-align: left;">Los Mejores Equipos<br />
El Mejor Precio<br />
Soporte y mantenimiento<br />
Los Mejores materiales y Proveedores<br />
Accesorios modernos</p>
</div></div>			</div>
							</div>
											<div class="site-footer-above-section-3 site-footer-section site-footer-section-3">
							<aside
		class="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3"		>
			<div class="footer-widget-area-inner site-info-inner"><section id="nav_menu-2" class="widget widget_nav_menu"><h2 class="widget-title">Contacto</h2><nav class="menu-contacto-container" aria-label="Contacto"><ul id="menu-contacto" class="menu"><li id="menu-item-493" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-493"><a href="https://goo.gl/maps/iieLixTiYUMxBuRo9" class="menu-link">Calle Arrastaria 21, 28022 Madrid</a></li>
<li id="menu-item-494" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-494"><a href="https://wa.me/34640134218" class="menu-link">+34 640 13 42 18</a></li>
<li id="menu-item-495" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-495"><a href="#" class="menu-link">sales@2handtek.com</a></li>
</ul></nav></section></div>		</aside>
						</div>
										</div>
			</div>

</div>
<div class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-equal ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-below-footer-builder">
	<div class="ast-builder-grid-row-container-inner">
					<div class="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
											<div class="site-footer-below-section-1 site-footer-section site-footer-section-1">
								<div class="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright" data-section="section-footer-builder">
				<div class="ast-footer-copyright"><p>Copyright © 2023 Líderes en Distribución</p>
<p>Todos los Derechos Reservados</p>
</div>			</div>
						</div>
											<div class="site-footer-below-section-2 site-footer-section site-footer-section-2">
							<aside
		class="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2"		>
			<div class="footer-widget-area-inner site-info-inner"><section id="block-9" class="widget widget_block widget_text">
<p class="has-text-align-center"><a href="https://2handtek.com/?page_id=3"><em>Políticas de Privacidad</em> </a></p>
</section></div>		</aside>
						</div>
											<div class="site-footer-below-section-3 site-footer-section site-footer-section-3">
							<div class="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1" data-section="section-fb-html-1">
			<div class="ast-header-html inner-link-style-"><div class="ast-builder-html-element"><p>2Handtek SL (B88636956)</p>
</div></div>		</div>
						</div>
										</div>
			</div>

</div>
	</footer><!-- #colophon -->
	</div><!-- #page -->

<div id="ast-scroll-top" class="ast-scroll-top-icon ast-scroll-to-top-right" data-on-devices="both">
		<span class="screen-reader-text">Scroll al inicio</span>
</div>

<div class="joinchat joinchat--left" data-settings='{"telephone":"+56948446060","mobile_only":false,"button_delay":3,"whatsapp_web":true,"qr":false,"message_views":2,"message_delay":10,"message_badge":false,"message_send":"Hola 2HANDTEK, estuve viendo su página https://2handtek.com y me gustaría hacerle algunas consultas.","message_hash":"247cbe41"}'>
	<div class="joinchat__button">
		<div class="joinchat__button__open"></div>
											<div class="joinchat__button__sendtext">Abrir chat</div>
						<svg class="joinchat__button__send" width="60" height="60" viewbox="0 0 400 400" stroke-linecap="round" stroke-width="33">
				<path class="joinchat_svg__plain" d="M168.83 200.504H79.218L33.04 44.284a1 1 0 0 1 1.386-1.188L365.083 199.04a1 1 0 0 1 .003 1.808L34.432 357.903a1 1 0 0 1-1.388-1.187l29.42-99.427"/>
				<path class="joinchat_svg__chat" d="M318.087 318.087c-52.982 52.982-132.708 62.922-195.725 29.82l-80.449 10.18 10.358-80.112C18.956 214.905 28.836 134.99 81.913 81.913c65.218-65.217 170.956-65.217 236.174 0 42.661 42.661 57.416 102.661 44.265 157.316"/>
			</svg>
										<div class="joinchat__tooltip"><div>Estamos para Servirle!</div></div>
					</div>
			<div class="joinchat__box">
			<div class="joinchat__header">
									<svg class="joinchat__wa" width="120" height="28" viewBox="0 0 120 28"><title>WhatsApp</title><path d="M117.2 17c0 .4-.2.7-.4 1-.1.3-.4.5-.7.7l-1 .2c-.5 0-.9 0-1.2-.2l-.7-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1l.7-.7a2 2 0 0 1 1.1-.3 2 2 0 0 1 1.8 1l.4 1a5.3 5.3 0 0 1 0 2.3zm2.5-3c-.1-.7-.4-1.3-.8-1.7a4 4 0 0 0-1.3-1.2c-.6-.3-1.3-.4-2-.4-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11H110v13h2.7v-4.5c.4.4.8.8 1.3 1 .5.3 1 .4 1.6.4a4 4 0 0 0 3.2-1.5c.4-.5.7-1 .8-1.6.2-.6.3-1.2.3-1.9s0-1.3-.3-2zm-13.1 3c0 .4-.2.7-.4 1l-.7.7-1.1.2c-.4 0-.8 0-1-.2-.4-.2-.6-.4-.8-.7a3 3 0 0 1-.4-1 5.4 5.4 0 0 1 0-2.3c0-.4.2-.7.4-1 .1-.3.4-.5.7-.7a2 2 0 0 1 1-.3 2 2 0 0 1 1.9 1l.4 1a5.4 5.4 0 0 1 0 2.3zm1.7-4.7a4 4 0 0 0-3.3-1.6c-.6 0-1.2.1-1.7.4a3 3 0 0 0-1.2 1.1V11h-2.6v13h2.7v-4.5c.3.4.7.8 1.2 1 .6.3 1.1.4 1.7.4a4 4 0 0 0 3.2-1.5c.4-.5.6-1 .8-1.6.2-.6.3-1.2.3-1.9s-.1-1.3-.3-2c-.2-.6-.4-1.2-.8-1.6zm-17.5 3.2l1.7-5 1.7 5h-3.4zm.2-8.2l-5 13.4h3l1-3h5l1 3h3L94 7.3h-3zm-5.3 9.1l-.6-.8-1-.5a11.6 11.6 0 0 0-2.3-.5l-1-.3a2 2 0 0 1-.6-.3.7.7 0 0 1-.3-.6c0-.2 0-.4.2-.5l.3-.3h.5l.5-.1c.5 0 .9 0 1.2.3.4.1.6.5.6 1h2.5c0-.6-.2-1.1-.4-1.5a3 3 0 0 0-1-1 4 4 0 0 0-1.3-.5 7.7 7.7 0 0 0-3 0c-.6.1-1 .3-1.4.5l-1 1a3 3 0 0 0-.4 1.5 2 2 0 0 0 1 1.8l1 .5 1.1.3 2.2.6c.6.2.8.5.8 1l-.1.5-.4.4a2 2 0 0 1-.6.2 2.8 2.8 0 0 1-1.4 0 2 2 0 0 1-.6-.3l-.5-.5-.2-.8H77c0 .7.2 1.2.5 1.6.2.5.6.8 1 1 .4.3.9.5 1.4.6a8 8 0 0 0 3.3 0c.5 0 1-.2 1.4-.5a3 3 0 0 0 1-1c.3-.5.4-1 .4-1.6 0-.5 0-.9-.3-1.2zM74.7 8h-2.6v3h-1.7v1.7h1.7v5.8c0 .5 0 .9.2 1.2l.7.7 1 .3a7.8 7.8 0 0 0 2 0h.7v-2.1a3.4 3.4 0 0 1-.8 0l-1-.1-.2-1v-4.8h2V11h-2V8zm-7.6 9v.5l-.3.8-.7.6c-.2.2-.7.2-1.2.2h-.6l-.5-.2a1 1 0 0 1-.4-.4l-.1-.6.1-.6.4-.4.5-.3a4.8 4.8 0 0 1 1.2-.2 8.3 8.3 0 0 0 1.2-.2l.4-.3v1zm2.6 1.5v-5c0-.6 0-1.1-.3-1.5l-1-.8-1.4-.4a10.9 10.9 0 0 0-3.1 0l-1.5.6c-.4.2-.7.6-1 1a3 3 0 0 0-.5 1.5h2.7c0-.5.2-.9.5-1a2 2 0 0 1 1.3-.4h.6l.6.2.3.4.2.7c0 .3 0 .5-.3.6-.1.2-.4.3-.7.4l-1 .1a21.9 21.9 0 0 0-2.4.4l-1 .5c-.3.2-.6.5-.8.9-.2.3-.3.8-.3 1.3s.1 1 .3 1.3c.1.4.4.7.7 1l1 .4c.4.2.9.2 1.3.2a6 6 0 0 0 1.8-.2c.6-.2 1-.5 1.5-1a4 4 0 0 0 .2 1H70l-.3-1v-1.2zm-11-6.7c-.2-.4-.6-.6-1-.8-.5-.2-1-.3-1.8-.3-.5 0-1 .1-1.5.4a3 3 0 0 0-1.3 1.2v-5h-2.7v13.4H53v-5.1c0-1 .2-1.7.5-2.2.3-.4.9-.6 1.6-.6.6 0 1 .2 1.3.6.3.4.4 1 .4 1.8v5.5h2.7v-6c0-.6 0-1.2-.2-1.6 0-.5-.3-1-.5-1.3zm-14 4.7l-2.3-9.2h-2.8l-2.3 9-2.2-9h-3l3.6 13.4h3l2.2-9.2 2.3 9.2h3l3.6-13.4h-3l-2.1 9.2zm-24.5.2L18 15.6c-.3-.1-.6-.2-.8.2A20 20 0 0 1 16 17c-.2.2-.4.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2-2-2.4-.1-.4 0-.5.2-.7l.5-.6.4-.6v-.6L10.4 8c-.3-.6-.6-.5-.8-.6H9c-.2 0-.6.1-.9.5C7.8 8.2 7 9 7 10.7c0 1.7 1.3 3.4 1.4 3.6.2.3 2.5 3.7 6 5.2l1.9.8c.8.2 1.6.2 2.2.1.6-.1 2-.8 2.3-1.6.3-.9.3-1.5.2-1.7l-.7-.4zM14 25.3c-2 0-4-.5-5.8-1.6l-.4-.2-4.4 1.1 1.2-4.2-.3-.5A11.5 11.5 0 0 1 22.1 5.7 11.5 11.5 0 0 1 14 25.3zM14 0A13.8 13.8 0 0 0 2 20.7L0 28l7.3-2A13.8 13.8 0 1 0 14 0z"/></svg>
								<div class="joinchat__close" aria-label="Cerrar"></div>
			</div>
			<div class="joinchat__box__scroll">
				<div class="joinchat__box__content">
					<div class="joinchat__message">Hola,<br>¡Estamos para Servirle!</div>				</div>
			</div>
		</div>
		<svg style="width:0;height:0;position:absolute"><defs><clipPath id="joinchat__message__peak"><path d="M17 25V0C17 12.877 6.082 14.9 1.031 15.91c-1.559.31-1.179 2.272.004 2.272C9.609 18.182 17 18.088 17 25z"/></clipPath></defs></svg>
	</div>
<link rel='stylesheet' id='e-animations-css' href='http://2handtek.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.10.1' media='all' />
<script id='astra-theme-js-js-extra'>
var astra = {"break_point":"921","isRtl":"","is_scroll_to_id":"1","is_scroll_to_top":"1"};
</script>
<script src='http://2handtek.com/wp-content/themes/astra/assets/js/minified/frontend.min.js?ver=4.0.2' id='astra-theme-js-js'></script>
<script src='http://2handtek.com/wp-content/plugins/creame-whatsapp-me/public/js/joinchat.min.js?ver=4.5.16' id='joinchat-js'></script>
<script src='http://2handtek.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.10.1' id='elementor-webpack-runtime-js'></script>
<script src='http://2handtek.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.10.1' id='elementor-frontend-modules-js'></script>
<script src='http://2handtek.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2' id='elementor-waypoints-js'></script>
<script src='http://2handtek.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2' id='jquery-ui-core-js'></script>
<script id='elementor-frontend-js-before'>
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Compartir en Facebook","shareOnTwitter":"Compartir en Twitter","pinIt":"Pinear","download":"Descargar","downloadImage":"Descargar imagen","fullscreen":"Pantalla completa","zoom":"Zoom","share":"Compartir","playVideo":"Reproducir v\u00eddeo","previous":"Anterior","next":"Siguiente","close":"Cerrar"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"M\u00f3vil","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"M\u00f3vil grande","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tableta","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tableta grande","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Port\u00e1til","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Pantalla grande","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.10.1","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"kit-elements-defaults":true},"urls":{"assets":"http:\/\/2handtek.com\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":125,"title":"Home%20-%20L%C3%ADderes%20en%20Distribuci%C3%B3n","excerpt":"","featuredImage":false}};
</script>
<script src='http://2handtek.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.10.1' id='elementor-frontend-js'></script>
<script src='http://2handtek.com/wp-includes/js/underscore.min.js?ver=1.13.4' id='underscore-js'></script>
<script id='wp-util-js-extra'>
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
</script>
<script src='http://2handtek.com/wp-includes/js/wp-util.min.js?ver=6.1.1' id='wp-util-js'></script>
<script id='wpforms-elementor-js-extra'>
var wpformsElementorVars = {"captcha_provider":"recaptcha","recaptcha_type":"v2"};
</script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/js/integrations/elementor/frontend.min.js?ver=1.7.9.1' id='wpforms-elementor-js'></script>
<script id='wpforms-choicesjs-js-extra'>
var wpforms_choicesjs_config = {"removeItemButton":"1","shouldSort":"","fuseOptions":{"threshold":0.1,"distance":1000},"loadingText":"Cargando\u2026","noResultsText":"No se han encontrado resultados","noChoicesText":"No hay opciones para elegir","itemSelectText":"Pulsa para seleccionar","uniqueItemText":"Solo pueden a\u00f1adirse valores \u00fanicos","customAddItemText":"Solo pueden a\u00f1adirse valores que coincidan con condiciones espec\u00edficas"};
</script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/choices.min.js?ver=9.0.1' id='wpforms-choicesjs-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/jquery.validate.min.js?ver=1.19.5' id='wpforms-validation-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/flatpickr/flatpickr.min.js?ver=4.6.9' id='wpforms-flatpickr-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/jquery.timepicker/jquery.timepicker.min.js?ver=1.11.5' id='wpforms-jquery-timepicker-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/jquery.inputmask.min.js?ver=5.0.7-beta.29' id='wpforms-maskedinput-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/mailcheck.min.js?ver=1.1.2' id='wpforms-mailcheck-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/lib/punycode.min.js?ver=1.0.0' id='wpforms-punycode-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/js/utils.min.js?ver=1.7.9.1' id='wpforms-generic-utils-js'></script>
<script src='http://2handtek.com/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js?ver=1.7.9.1' id='wpforms-js'></script>
			<script>
			/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
			</script>
			<script type='text/javascript'>
/* <![CDATA[ */
var wpforms_settings = {"val_required":"Este campo es obligatorio.","val_email":"Por favor, introduce una direcci\u00f3n de correo electr\u00f3nico v\u00e1lida.","val_email_suggestion":"\u00bfQuieres decir {suggestion}?","val_email_suggestion_title":"Haz clic para aceptar esta sugerencia.","val_email_restricted":"Esta direcci\u00f3n de correo electr\u00f3nico no est\u00e1 permitida.","val_number":"Por favor, introduce un n\u00famero v\u00e1lido.","val_number_positive":"Por favor, introduce un n\u00famero de tel\u00e9fono v\u00e1lido.","val_confirm":"Los valores del campo no coinciden.","val_checklimit":"Has excedido el n\u00famero de selecciones permitidas: {#}.","val_limit_characters":"{count} de {limit} caracteres m\u00e1ximos.","val_limit_words":"{count} de {limit} palabras m\u00e1ximas.","val_recaptcha_fail_msg":"Ha fallado la verificaci\u00f3n de Google reCAPTCHA, por favor, int\u00e9ntalo de nuevo m\u00e1s tarde.","val_inputmask_incomplete":"Por favor, rellena el campo en el formato requerido.","uuid_cookie":"","locale":"es","wpforms_plugin_url":"http:\/\/2handtek.com\/wp-content\/plugins\/wpforms-lite\/","gdpr":"1","ajaxurl":"https:\/\/2handtek.com\/wp-admin\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"],"is_ssl":"","page_title":"Home","page_id":"125"}
/* ]]> */
</script>

		<!-- Cookie Notice plugin v2.4.6 by Hu-manity.co https://hu-manity.co/ -->
		<div id="cookie-notice" role="dialog" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(50,50,58,1);"><div class="cookie-notice-container" style="color: #fff;"><span id="cn-notice-text" class="cn-text-container">Usamos cookies para asegurar que te damos la mejor experiencia en nuestra web. Si continúas usando este sitio, asumiremos que estás de acuerdo con ello.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button" aria-label="Aceptar" style="background-color: #00a99d">Aceptar</a></span><span id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" title="No"></span></div>
			
		</div>
		<!-- / Cookie Notice plugin -->	</body>
`

setupCounter(document.querySelector('#counter'))
