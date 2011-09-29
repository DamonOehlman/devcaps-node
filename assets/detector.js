/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-canvas-hashchange-history-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-mq-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function H(){e.inputtypes=function(a){for(var d=0,e,g,h,i=a.length;d<i;d++)k.setAttribute("type",g=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(g)&&k.style.WebkitAppearance!==c?(f.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,f.removeChild(k)):/^(search|tel)$/.test(g)||(/^(url|email)$/.test(g)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(g)?(f.appendChild(k),f.offsetWidth,e=k.value!=l,f.removeChild(k)):e=k.value!=l)),r[a[d]]=!!e;return r}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(n.join(a+";")+(b||""))}function A(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={svg:"http://www.w3.org/2000/svg"},q={},r={},s={},t=[],u=function(a,c,d,e){var g,i,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);g=["&shy;","<style>",a,"</style>"].join(""),k.id=h,k.innerHTML+=g,f.appendChild(k),i=c(k,a),k.parentNode.removeChild(k);return!!i},v=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;u(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);q.flexbox=function(){function c(a,b,c,d){a.style.cssText=n.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+n.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),f.appendChild(d);var g=e.offsetWidth===42;d.removeChild(e),f.removeChild(d);return g},q.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},q.touch=function(){return e.touch},q.geolocation=function(){return!!navigator.geolocation},q.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},q.history=function(){return!!a.history&&!!history.pushState},q.websockets=function(){for(var b=-1,c=o.length;++b<c;)if(a[o[b]+"WebSocket"])return!0;return"WebSocket"in a},q.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(j.backgroundColor,"rgba")},q.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(j.backgroundColor,"rgba")||D(j.backgroundColor,"hsla")},q.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(j.background)},q.backgroundsize=function(){return F("backgroundSize")},q.borderimage=function(){return F("borderImage")},q.borderradius=function(){return F("borderRadius")},q.boxshadow=function(){return F("boxShadow")},q.textshadow=function(){return b.createElement("div").style.textShadow===""},q.opacity=function(){B("opacity:.55");return/^0.55$/.test(j.opacity)},q.cssanimations=function(){return F("animationName")},q.csscolumns=function(){return F("columnCount")},q.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+n.join(b+a)+n.join(c+a)).slice(0,-a.length));return D(j.backgroundImage,"gradient")},q.cssreflections=function(){return F("boxReflect")},q.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},q.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in f.style&&(a=e.csstransforms3d);return a},q.csstransitions=function(){return F("transitionProperty")},q.fontface=function(){return e.fontface},q.generatedcontent=function(){return e.generatedcontent},q.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},q.svg=function(){return!!b.createElementNS&&!!b.createElementNS(p.svg,"svg").createSVGRect},q.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(m.call(b.createElementNS(p.svg,"clipPath")))};for(var I in q)z(q,I)&&(x=I.toLowerCase(),e[x]=q[I](),t.push((e[x]?"":"no-")+x));e.input||H(),A(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=o,e.mq=v,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=u;return e}(this,this.document);


// github://tdd/cookies-js-helper/src/cookies

(function() {
    var frmDetector = document.getElementById('detector'),
        elDevCaps = document.getElementById('devcaps'),
        tests = {
            'DSW': (screen || window).width,
            'DSH': (screen || window).height
        },
        mappings = {
            canvas: 'CVS',
            flexbox: 'FBX',
            csstransforms: 'T2D',
            csstransforms3d: 'T3D',
            localstorage: 'LST'
        },
        key,
        test,
        output = [],
        opts = typeof devcapOpts != 'undefined' ? devcapOpts.split(',') : [],
        reReset = /(?:\?|\&)reset(?=\&|$)/i;
        
    // iterate through the modernizr mappings and if defined, add to the tests as a 1
    for (key in mappings) {
        if (Modernizr[key]) {
            tests[mappings[key]] = 1;
        } // if
    } // for
    
    // iterate through the target tests
    for (var ii = 0; ii < opts.length; ii++) {
        key = opts[ii];
        test = tests[key];
        
        if (typeof test == 'function') {
            
        }
        else {
            output.push(key + test);
        } // if..else
    }  // for
    
    // update the device capabilities
    elDevCaps.value = output.join('_');
    frmDetector.action = document.location.href.replace(reReset, '');
    frmDetector.submit();
})();