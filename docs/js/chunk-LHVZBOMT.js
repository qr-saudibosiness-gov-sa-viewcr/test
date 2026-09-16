import{n as fe}from"./chunk-FPP2F6RK.js";import{c as _e,d as L,f as O,h as M,i as Q,k as V}from"./chunk-S35HUXPS.js";import{Ba as he,C as de,Ma as ue,_ as ce,bb as x,t as E,u as se,ua as pe,va as C,w as le,za as me}from"./chunk-4EH5IQUD.js";import{$ as F,$a as d,$b as s,Ac as Y,Ec as ee,Gb as f,Hb as a,Kb as q,Lb as S,Lc as te,Nb as $,Sb as u,Tb as _,Ub as P,V as A,Vb as N,Vc as h,W as B,Wb as H,Wc as ie,Xb as g,Yb as I,_b as D,ac as G,bc as K,gc as w,hc as k,ic as p,ja as b,jc as m,ka as y,mb as R,na as T,nb as z,nc as U,nd as ne,oc as J,qb as Z,qd as oe,sb as j,sd as re,ta as v,tb as c,vd as ae,xc as W,zc as X}from"./chunk-6IVTY3RO.js";var be=["header"],ye=["footer"],ge=["content"],xe=["closeicon"],ve=["headless"],ke=["maskRef"],Ce=["container"],Te=["closeButton"],Se=["*"],Ie=(t,r,e,o,i,n)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":r,"p-drawer-right":e,"p-drawer-top":o,"p-drawer-bottom":i,"p-drawer-full":n}),De=(t,r)=>({transform:t,transition:r}),Ee=t=>({value:"visible",params:t});function Le(t,r){t&1&&g(0)}function Oe(t,r){if(t&1&&c(0,Le,1,0,"ng-container",4),t&2){let e=s(2);a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Me(t,r){t&1&&g(0)}function Qe(t,r){if(t&1&&(u(0,"div"),U(1),_()),t&2){let e=s(3);S(e.cx("title")),d(),J(e.header)}}function Ve(t,r){t&1&&P(0,"TimesIcon"),t&2&&f("data-pc-section","closeicon")}function Ae(t,r){}function Be(t,r){t&1&&c(0,Ae,0,0,"ng-template")}function Fe(t,r){if(t&1&&c(0,Ve,1,1,"TimesIcon",8)(1,Be,1,0,null,4),t&2){let e=s(4);a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),d(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Re(t,r){if(t&1){let e=I();u(0,"p-button",9),D("onClick",function(i){b(e);let n=s(3);return y(n.close(i))})("keydown.enter",function(i){b(e);let n=s(3);return y(n.close(i))}),c(1,Fe,2,2,"ng-template",null,1,te),_()}if(t&2){let e=s(3);a("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function ze(t,r){t&1&&g(0)}function Ze(t,r){t&1&&g(0)}function je(t,r){if(t&1&&(N(0),u(1,"div",5),c(2,Ze,1,0,"ng-container",4),_(),H()),t&2){let e=s(3);d(),a("ngClass",e.cx("footer")),f("data-pc-section","footer"),d(),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function qe(t,r){if(t&1&&(u(0,"div",5),c(1,Me,1,0,"ng-container",4)(2,Qe,2,3,"div",6)(3,Re,3,5,"p-button",7),_(),u(4,"div",5),K(5),c(6,ze,1,0,"ng-container",4),_(),c(7,je,3,3,"ng-container",8)),t&2){let e=s(2);a("ngClass",e.cx("header")),f("data-pc-section","header"),d(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),a("ngIf",e.header),d(),a("ngIf",e.showCloseIcon&&e.closable),d(),a("ngClass",e.cx("content")),f("data-pc-section","content"),d(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),a("ngIf",e.footerTemplate||e._footerTemplate)}}function $e(t,r){if(t&1){let e=I();u(0,"div",3,0),D("@panelState.start",function(i){b(e);let n=s();return y(n.onAnimationStart(i))})("@panelState.done",function(i){b(e);let n=s();return y(n.onAnimationEnd(i))})("keydown",function(i){b(e);let n=s();return y(n.onKeyDown(i))}),c(2,Oe,1,1,"ng-container")(3,qe,8,9),_()}if(t&2){let e=s();q(e.style),S(e.styleClass),a("ngClass",ee(9,Ie,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen||e.position==="full"))("@panelState",X(19,Ee,Y(16,De,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),d(2),$(e.headlessTemplate||e._headlessTemplate?2:3)}}var Pe=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,Ne={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},He={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},we=(()=>{class t extends me{name="drawer";theme=Pe;classes=He;inlineStyles=Ne;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Ge=Q([O({transform:"{{transform}}",opacity:0}),L("{{transition}}")]),Ke=Q([L("{{transition}}",O({transform:"{{transform}}",opacity:0}))]),Ue=(()=>{class t extends he{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new v;onHide=new v;visibleChange=new v;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=F(we);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&x.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),o=e.length,i=o==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[o-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",i),ce(this.mask,"style",this.maskStyle),E(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",n=>{this.dismissible&&this.close(n)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&se())}disableModality(){this.mask&&(E(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&le(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),x.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):de(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",o=>{o.which==27&&parseInt(this.container.style.zIndex)===x.get(this.container)&&this.close(o)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&x.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=R({type:t,selectors:[["p-drawer"]],contentQueries:function(o,i,n){if(o&1&&(w(n,be,4),w(n,ye,4),w(n,ge,4),w(n,xe,4),w(n,ve,4),w(n,pe,4)),o&2){let l;p(l=m())&&(i.headerTemplate=l.first),p(l=m())&&(i.footerTemplate=l.first),p(l=m())&&(i.contentTemplate=l.first),p(l=m())&&(i.closeIconTemplate=l.first),p(l=m())&&(i.headlessTemplate=l.first),p(l=m())&&(i.templates=l)}},viewQuery:function(o,i){if(o&1&&(k(ke,5),k(Ce,5),k(Te,5)),o&2){let n;p(n=m())&&(i.maskRef=n.first),p(n=m())&&(i.containerViewChild=n.first),p(n=m())&&(i.closeButtonViewChild=n.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",h],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",ie],modal:[2,"modal","modal",h],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",h],showCloseIcon:[2,"showCloseIcon","showCloseIcon",h],closeOnEscape:[2,"closeOnEscape","closeOnEscape",h],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",h]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[W([we]),j,Z],ngContentSelectors:Se,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(o,i){o&1&&(G(),c(0,$e,4,21,"div",2)),o&2&&a("ngIf",i.visible)},dependencies:[ae,ne,oe,re,ue,fe,C],encapsulation:2,data:{animation:[_e("panelState",[M("void => visible",[V(Ge)]),M("visible => void",[V(Ke)])])]},changeDetection:0})}return t})(),bt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=z({type:t});static \u0275inj=B({imports:[Ue,C,C]})}return t})();export{Ue as a,bt as b};
