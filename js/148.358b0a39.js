"use strict";(self["webpackChunkhowshonginn"]=self["webpackChunkhowshonginn"]||[]).push([[148],{2062:function(e,a,l){l.d(a,{Z:function(){return Pe}});var r=l(6252),t=l(9963),s=l(3577),o=l(2262),i=l(9669),n=l.n(i);const d=e=>((0,r.dD)("data-v-6ab077fe"),e=e(),(0,r.Cn)(),e),c={class:"flex flex-wrap gap-y-4 px-3 xl:px-20"},u={class:"w-full px-4 md:w-1/2"},p={class:"space-y-4"},b={for:"name",class:"mb-1 block text-lg font-bold text-primary-dark"},m=(0,r.Uk)("營地名稱"),f=d((()=>(0,r._)("span",{class:"ml-2 text-base text-danger-dark"},"*",-1))),g={for:"phone",class:"mb-1 block text-lg font-bold text-primary-dark"},v=(0,r.Uk)("聯絡電話"),w={for:"address",class:"mb-1 block text-lg font-bold text-primary-dark"},y=(0,r.Uk)("地址"),x=d((()=>(0,r._)("span",{class:"ml-2 text-base text-danger-dark"},"*",-1))),h={for:"website",class:"mb-1 block text-lg font-bold text-primary-dark"},k=(0,r.Uk)("網站"),_={class:"-mx-3 flex flex-wrap gap-y-4"},U={class:"w-full px-3 xl:w-1/2"},S={for:"altitude",class:"mb-1 block text-lg font-bold text-primary-dark"},P=(0,r.Uk)("所在區域"),C=d((()=>(0,r._)("span",{class:"ml-2 text-base text-danger-dark"},"*",-1))),D={class:"flex gap-x-3"},W=d((()=>(0,r._)("option",{value:"",selected:"",disabled:""},"--- 縣市 ---",-1))),j=["value"],z=["disabled"],V=d((()=>(0,r._)("option",{value:"",selected:"",disabled:""},"--- 鄉鎮區 ---",-1))),H=["value"],I={class:"w-full px-3 xl:w-1/2"},Y={for:"altitude",class:"mb-1 block text-lg font-bold text-primary-dark"},O=(0,r.Uk)("海拔高度"),K=(0,r.uE)('<option value="" disabled selected data-v-6ab077fe>--- 海拔高度範圍 ---</option><option value="300m以下" data-v-6ab077fe>300m以下</option><option value="301~500m" data-v-6ab077fe>301~500m</option><option value="501~800m" data-v-6ab077fe>501~800m</option><option value="801~1000m" data-v-6ab077fe>801~1000m</option><option value="1001~1500m" data-v-6ab077fe>1001~1500m</option><option value="1501m以上" data-v-6ab077fe>1501m以上</option><option value="0" data-v-6ab077fe>不清楚</option>',8),A=[K],E={class:"w-full px-4 md:w-1/2"},N={for:"intro",class:"mb-1 block text-lg font-bold text-primary-dark"},q=(0,r.Uk)("簡介"),F=d((()=>(0,r._)("span",{class:"ml-2 text-base text-danger-dark"},"*",-1))),T={class:"w-full px-4"},Z={class:"flex items-center justify-between gap-x-4"},B={for:"price",class:"mb-1 block text-lg font-bold text-primary-dark"},M=(0,r.Uk)("區域/價位 "),$={class:"flex"},J=["disabled"],L=(0,r.uE)('<div class="mb-1 flex border-b border-primary-dark py-1 font-bold" data-v-6ab077fe><span class="flex-grow basis-1/4 px-1" data-v-6ab077fe>區域名稱</span><span class="basis-1/4 px-1 md:basis-1/8" data-v-6ab077fe>帳/區數</span><span class="basis-1/12 md:hidden" data-v-6ab077fe></span><span class="hidden basis-1/8 px-1 md:block" data-v-6ab077fe>平日</span><span class="hidden basis-1/8 px-1 md:block" data-v-6ab077fe>週末</span><span class="hidden basis-1/8 px-1 md:block" data-v-6ab077fe>連假</span><span class="hidden basis-1/8 px-1 md:block" data-v-6ab077fe>年假</span></div>',1),R={class:"flex-grow basis-1/4 p-1"},G=["onUpdate:modelValue"],Q={class:"basis-1/4 p-1 md:basis-1/8"},X=["onUpdate:modelValue"],ee={class:"flex basis-1/12 items-center justify-center px-1 md:hidden"},ae=["onClick"],le={class:"-mx-4 flex flex-wrap gap-y-2 py-2 px-2 text-center"},re={class:"w-1/2 px-4"},te=(0,r.Uk)(" 平日 "),se=["onUpdate:modelValue"],oe={class:"w-1/2 px-4"},ie=(0,r.Uk)(" 週末 "),ne=["onUpdate:modelValue"],de={class:"w-1/2 px-4"},ce=d((()=>(0,r._)("div",{class:"mb-1"},"連假",-1))),ue=["onUpdate:modelValue"],pe={class:"w-1/2 px-4"},be=d((()=>(0,r._)("div",{class:"mb-1"},"年假",-1))),me=["onUpdate:modelValue"],fe={class:"hidden basis-1/8 p-1 md:block"},ge=["onUpdate:modelValue"],ve={class:"hidden basis-1/8 p-1 md:block"},we=["onUpdate:modelValue"],ye={class:"hidden basis-1/8 p-1 md:block"},xe=["onUpdate:modelValue"],he={class:"hidden basis-1/8 p-1 md:block"},ke=["onUpdate:modelValue"];var _e={__name:"InsertInfoComponent",props:{existedInfo:{type:Object,default:()=>({})}},emits:["campInfo"],setup(e,{emit:a}){const l=e,{existedInfo:i}=(0,o.BK)(l),d=(0,o.iH)([]),K=(0,r.Fl)((()=>Array.from(d.value)[Se.value]?.AreaList)),_e=(0,o.iH)([]),Ue=(0,o.iH)(""),Se=(0,o.iH)(""),Pe=(0,o.iH)(""),Ce=(0,r.Fl)((()=>{let e="";return""!==Se.value&&(e+=d.value[Se.value].CityName.slice(0,-1),Pe.value.length>2?e+=Pe.value.slice(0,-1):e+=Pe.value,e+=" "),e+=Ue.value,e})),De=(0,r.Fl)((()=>d.value[Se.value]?.CityName+Pe.value)),We=(0,r.Fl)((()=>{let e={};return _e.value.forEach((a=>e[a.name]=a)),e})),je=(0,o.iH)({name:Ce,phone:"",address:"",website:"",height:"",county:De,intro:"",price:We});function ze(){_e.value.push({name:"",number:"",normalPrice:"",weekendPrice:"",holidayPrice:"",newYearPrice:"",collapse:!1})}function Ve(){_e.value.pop()}return(0,r.bv)((()=>{function e(){if(Object.keys(i.value)?.length){Ue.value=i.value.name.slice(i.value.name.indexOf(" ")+1),je.value.phone=i.value.phone,je.value.address=i.value.address,je.value.website=i.value.website,je.value.height=i.value.height,je.value.intro=i.value.intro,_e.value=Object.values(i.value.price);let e=i.value.county.match(/.{2}[縣市]/g)[0];for(let a in d.value)if(d.value[a].CityName===e){Se.value=a;break}Pe.value=i.value.county.replace(e,"")}}n().get("https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json").then((a=>{d.value=a.data,e()})).catch((e=>console.error(e)))})),(0,r.se)((()=>{a("campInfo",je.value)})),(e,a)=>{const l=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[(0,r._)("ul",p,[(0,r._)("li",null,[(0,r._)("label",b,[(0,r.Wm)(l,{icon:"fa-solid fa-tent",class:"mr-2"}),m,f]),(0,r.wy)((0,r._)("input",{type:"text",id:"name",class:"w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none",placeholder:"請輸入營地名稱","onUpdate:modelValue":a[0]||(a[0]=e=>Ue.value=e)},null,512),[[t.nr,Ue.value,void 0,{lazy:!0,trim:!0}]])]),(0,r._)("li",null,[(0,r._)("label",g,[(0,r.Wm)(l,{icon:"fa-solid fa-phone",class:"mr-2"}),v]),(0,r.wy)((0,r._)("input",{type:"tel",id:"phone",class:"w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none",placeholder:"請輸入營主的聯絡電話","onUpdate:modelValue":a[1]||(a[1]=e=>je.value.phone=e)},null,512),[[t.nr,je.value.phone,void 0,{trim:!0}]])]),(0,r._)("li",null,[(0,r._)("label",w,[(0,r.Wm)(l,{icon:"fa-solid fa-map",class:"mr-2"}),y,x]),(0,r.wy)((0,r._)("input",{type:"text",id:"address",class:"w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none",placeholder:"請輸入營地所在地址","onUpdate:modelValue":a[2]||(a[2]=e=>je.value.address=e)},null,512),[[t.nr,je.value.address,void 0,{trim:!0}]])]),(0,r._)("li",null,[(0,r._)("label",h,[(0,r.Wm)(l,{icon:"fa-solid fa-globe",class:"mr-2"}),k]),(0,r.wy)((0,r._)("input",{type:"text",id:"website",class:"w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none",placeholder:"請輸入營地網站","onUpdate:modelValue":a[3]||(a[3]=e=>je.value.website=e)},null,512),[[t.nr,je.value.website,void 0,{trim:!0}]])]),(0,r._)("li",_,[(0,r._)("div",U,[(0,r._)("label",S,[(0,r.Wm)(l,{icon:"fa-solid fa-location-dot",class:"mr-2"}),P,C]),(0,r._)("div",D,[(0,r.wy)((0,r._)("select",{name:"county",id:"county",class:"flex-grow rounded border border-black bg-white py-1 px-2 text-center focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a[4]||(a[4]=e=>Se.value=e)},[W,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.value,((e,a)=>((0,r.wg)(),(0,r.iD)("option",{value:a,key:e.CityName},(0,s.zw)(e.CityName),9,j)))),128))],512),[[t.bM,Se.value]]),(0,r.wy)((0,r._)("select",{name:"town",id:"town",class:"flex-grow rounded border border-black bg-white py-1 px-2 text-center focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a[5]||(a[5]=e=>Pe.value=e),disabled:""===Se.value},[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(K),(e=>((0,r.wg)(),(0,r.iD)("option",{value:e.AreaName,key:e.AreaName},(0,s.zw)(e.AreaName),9,H)))),128))],8,z),[[t.bM,Pe.value]])])]),(0,r._)("div",I,[(0,r._)("label",Y,[(0,r.Wm)(l,{icon:"fa-solid fa-mountain-sun",class:"mr-2"}),O]),(0,r.wy)((0,r._)("select",{name:"altitude",id:"altitude",class:"rounded border border-black py-1 px-2 text-center focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a[6]||(a[6]=e=>je.value.height=e)},A,512),[[t.bM,je.value.height]])])])])]),(0,r._)("div",E,[(0,r._)("div",null,[(0,r._)("label",N,[(0,r.Wm)(l,{icon:"fa-solid fa-pen-to-square",class:"mr-2"}),q,F]),(0,r.wy)((0,r._)("textarea",{class:"h-[359px] w-full resize-none rounded border border-black p-4 focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a[7]||(a[7]=e=>je.value.intro=e),placeholder:"簡單介紹一下這個營地吧"},null,512),[[t.nr,je.value.intro]])])]),(0,r._)("div",T,[(0,r._)("div",Z,[(0,r._)("label",B,[(0,r.Wm)(l,{icon:"fa-solid fa-coins",class:"mr-2"}),M]),(0,r._)("div",$,[(0,r._)("button",{onClick:ze,class:"block -skew-x-6 rounded-l bg-primary px-4 py-1 duration-300 hover:bg-primary-dark hover:text-white"},[(0,r.Wm)(l,{icon:"fa-solid fa-plus"})]),(0,r._)("button",{onClick:Ve,class:"disabled: block -skew-x-6 rounded-r bg-danger px-4 py-1 duration-300 enabled:hover:bg-danger-dark enabled:hover:text-white",disabled:_e.value.length<=0},[(0,r.Wm)(l,{icon:"fa-solid fa-minus"})],8,J)])]),L,(0,r.Wm)(t.W3,{tag:"ul",name:"move-up"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_e.value,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"flex flex-wrap"},[(0,r._)("div",R,[(0,r.wy)((0,r._)("input",{type:"text",class:"w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a=>e.name=a,placeholder:"Ex: 碎石雨棚區"},null,8,G),[[t.nr,e.name,void 0,{trim:!0}]])]),(0,r._)("div",Q,[(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none","onUpdate:modelValue":a=>e.number=a,placeholder:"Ex: 5"},null,8,X),[[t.nr,e.number,void 0,{number:!0,trim:!0}]])]),(0,r._)("div",ee,[(0,r._)("a",{href:"#",class:"after:absolute after:inset-x-0 after:top-0 after:z-1 after:h-10",onClick:(0,t.iM)((a=>e.collapse=!e.collapse),["prevent"])},[(0,r.Wm)(l,{icon:"fa-solid fa-caret-up",class:(0,s.C_)(["duration-300",{"rotate-180":e.collapse}])},null,8,["class"])],8,ae)]),(0,r._)("div",{class:(0,s.C_)(["w-full overflow-hidden bg-primary-dark text-white transition-all duration-300 md:hidden",e.collapse?"max-h-0":"max-h-screen"])},[(0,r._)("ul",le,[(0,r._)("li",re,[te,(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.normalPrice=a},null,8,se),[[t.nr,e.normalPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("li",oe,[ie,(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.weekendPrice=a},null,8,ne),[[t.nr,e.weekendPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("li",de,[ce,(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.holidayPrice=a},null,8,ue),[[t.nr,e.holidayPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("li",pe,[be,(0,r.wy)((0,r._)("input",{type:"number",class:"w-full appearance-none rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.newYearPrice=a},null,8,me),[[t.nr,e.newYearPrice,void 0,{trim:!0}]])])])],2),(0,r._)("div",fe,[(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.normalPrice=a},null,8,ge),[[t.nr,e.normalPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("div",ve,[(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.weekendPrice=a},null,8,we),[[t.nr,e.weekendPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("div",ye,[(0,r.wy)((0,r._)("input",{type:"number",class:"w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.holidayPrice=a},null,8,xe),[[t.nr,e.holidayPrice,void 0,{number:!0,trim:!0}]])]),(0,r._)("div",he,[(0,r.wy)((0,r._)("input",{type:"number",class:"w-full appearance-none rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none",placeholder:"元/晚","onUpdate:modelValue":a=>e.newYearPrice=a},null,8,ke),[[t.nr,e.newYearPrice,void 0,{trim:!0}]])])])))),128))])),_:1})])])}}},Ue=l(3744);const Se=(0,Ue.Z)(_e,[["__scopeId","data-v-6ab077fe"]]);var Pe=Se},3972:function(e,a,l){l.d(a,{Z:function(){return y}});var r=l(6252),t=l(3577),s=l(2262),o=l(4970);const i={class:"xl:px-24"},n={class:"mb-4 flex w-full flex-col-reverse items-center gap-x-4 lg:flex-row"},d={class:"w-full flex-grow border border-black bg-gray-200 p-1 lg:p-2"},c={class:"flex h-40"},u=["src","alt","onClick"],p=["onClick"],b={class:"flex flex-shrink-0 gap-x-4 gap-y-4 lg:flex-col"},m={for:"file-upload",class:"btn btn-primary mb-4 cursor-pointer font-bold"},f=(0,r.Uk)("清空照片 "),g={class:"w-full"};var v={__name:"InsertPictureComponent",props:{existedImage:{type:Array}},emits:["campPicture","campPictureOrigin"],setup(e,{emit:a}){const v=e,w=(0,s.iH)(0),y=(0,s.iH)(["init_pic.jpg"]),x=(0,s.iH)([]),h=(0,s.iH)(null);function k(e){let a=[],l=[],r=Math.min(4,e.target.files.length);r&&"init_pic.jpg"===y.value[0]&&y.value.pop();for(let t=0;t<r;t++)if(!x.value.some((a=>a.name===e.target.files[t].name))){a.push(e.target.files[t]);const r=URL.createObjectURL(e.target.files[t]);l.push(r)}x.value=[...x.value,...a].slice(0,4),y.value=[...y.value,...l].slice(0,4)}function _(e){x.value.splice(e,1),y.value.splice(e,1),0===y.value.length&&y.value.push("init_pic.jpg")}function U(){x.value.length=0,y.value.length=0,y.value.push("init_pic.jpg")}return(0,r.bv)((()=>{if(v.existedImage?.length){let e=[];for(let a of v.existedImage)e.push(a);y.value=e,x.value=v.existedImage}})),(0,r.se)((()=>{a("campPicture",y.value),a("campPictureOrigin",x.value)})),(e,a)=>{const v=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",n,[(0,r._)("div",d,[(0,r._)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.value,((e,a)=>((0,r.wg)(),(0,r.iD)("li",{key:a,class:"group relative w-1/4 px-1 lg:px-2"},[(0,r._)("img",{src:e.startsWith("blob")||e.includes("imgur.com")?e:l(9300)("./"+e),alt:"image"+a,class:(0,t.C_)(["h-full w-full cursor-pointer object-cover object-center duration-300",w.value===a?"ring-2 ring-danger-dark":"opacity-60"]),onClick:e=>h.value.goToSlide(a)},null,10,u),(0,r._)("button",{type:"button",class:"invisible absolute -right-0.5 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-danger-dark text-xl text-white opacity-0 duration-300 hover:text-secondary-dark group-hover:visible group-hover:opacity-100",onClick:e=>_(a)},[(0,r.Wm)(v,{icon:"fa-solid fa-xmark"})],8,p)])))),128))])]),(0,r._)("div",b,[(0,r._)("label",m,[(0,r.Wm)(v,{icon:"fa-solid fa-images",class:"mr-2"}),(0,r.Uk)("上傳照片("+(0,t.zw)(y.value.length)+"/4)",1)]),(0,r._)("input",{type:"file",class:"hidden",id:"file-upload",accept:"image/*",onChange:k,multiple:""},null,32),(0,r._)("button",{type:"button",class:"btn btn-danger mb-4 cursor-pointer font-bold",onClick:U},[(0,r.Wm)(v,{icon:"fa-solid fa-trash-can",class:"mr-2"}),f])])]),(0,r._)("div",g,[(0,r.Wm)((0,s.SU)(o.x),{ref_key:"slides",ref:h,fade:"",fixedHeight:"460px",bullets:!1,touchable:!1,arrows:!1,class:"rounded-lg shadow-lg shadow-gray-400",onSlide:a[0]||(a[0]=e=>w.value=e.currentSlide.index)},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.value,((e,a)=>((0,r.wg)(),(0,r.j4)((0,s.SU)(o.c),{key:a,image:e.startsWith("blob")||e.includes("imgur.com")?e:l(9300)("./"+e),class:"overflow-hidden rounded-lg"},null,8,["image"])))),128))])),_:1},512)])])}}};const w=v;var y=w},6493:function(e,a,l){l.d(a,{Z:function(){return he}});var r=l(6252),t=l(2262),s=l(3577),o=l(9963),i=l(4970),n=l(559);const d=e=>((0,r.dD)("data-v-8c4cace6"),e=e(),(0,r.Cn)(),e),c={class:"px-3 xl:px-20"},u={key:0,class:"pt-10 pb-1 shadow shadow-gray-600"},p={class:"mb-[120px]"},b={class:"container"},m={class:"flex flex-wrap gap-y-8 lg:-mx-4"},f={class:"w-full lg:w-[55%] lg:px-4"},g={class:"relative w-full py-8 px-3 before:absolute before:top-0 before:right-0 before:-z-10 before:h-full before:w-full before:rounded-lg before:bg-gradient-to-b before:from-primary-light before:via-primary before:to-primary-dark md:px-6 lg:w-[45%] lg:px-4 lg:py-0 lg:before:right-4 lg:before:-top-[5%] lg:before:h-[110%] lg:before:w-[120%]"},v={class:"mb-2 inline-block cursor-default rounded border border-secondary-dark px-4 py-1 text-secondary-dark"},w={class:"mb-6 text-2xl font-bold md:text-3xl"},y={class:"space-y-6 md:text-lg"},x={class:"space-y-2"},h=d((()=>(0,r._)("span",{class:"font-bold"},"地址",-1))),k={class:"text-base"},_={class:"space-y-2"},U=d((()=>(0,r._)("span",{class:"font-bold"},"聯絡電話",-1))),S={class:"inline-block text-base"},P=["href"],C=(0,r.Uk)("聯絡營主"),D={class:"space-y-2"},W=d((()=>(0,r._)("span",{class:"font-bold"},"網站",-1))),j=["href"],z={class:"block overflow-hidden whitespace-nowrap text-left text-base"},V={class:"space-y-2 md:inline-block md:w-1/3 md:align-top"},H=d((()=>(0,r._)("span",{class:"font-bold"},"海拔",-1))),I={class:"mr-4 inline-block cursor-default rounded border border-danger-dark py-1 px-3 text-base text-danger-dark"},Y={class:"space-y-2 md:inline-block md:w-2/3 md:align-top"},O=d((()=>(0,r._)("span",{class:"font-bold"},"特色",-1))),K={class:"flex flex-wrap gap-y-2 gap-x-2 pr-4 text-base"},A={class:"mb-16 bg-secondary-light"},E={class:"container"},N={class:"-mx-3 flex -translate-y-8 flex-wrap items-start"},q={class:"w-full px-3 lg:w-2/5"},F={class:"relative rounded-lg bg-primary-light py-8 px-4 lg:px-6"},T=d((()=>(0,r._)("h2",{class:"absolute -top-1 left-4 -translate-y-1/2 border-b-4 border-double border-b-primary-dark pr-6 text-2xl font-bold text-primary-dark lg:left-6"}," 簡單介紹 ",-1))),Z={key:0,class:"text-lg font-bold text-primary-dark md:text-2xl"},B={key:1},M={class:"w-full px-3 lg:w-3/5"},$=["src"],J={class:"mb-4 translate-y-4"},L={class:"relative rounded-lg bg-primary-light py-8 px-4 lg:px-6"},R=d((()=>(0,r._)("h2",{class:"absolute -top-1 left-4 -translate-y-1/2 border-b-4 border-double border-b-primary-dark pr-6 text-2xl font-bold text-primary-dark lg:left-6"}," 區域 / 價格 ",-1))),G={class:"w-full"},Q=(0,r.uE)('<div class="flex border-b border-b-primary-dark py-1 text-right" data-v-8c4cace6><div class="flex-grow basis-1/3 pl-2 text-left" data-v-8c4cace6>區域</div><div class="flex-shrink-0 basis-1/5 whitespace-nowrap text-center md:basis-1/8" data-v-8c4cace6> 帳/區數 </div><div class="basis-1/12 md:hidden" data-v-8c4cace6></div><div class="hidden basis-1/8 md:block" data-v-8c4cace6>平日</div><div class="hidden basis-1/8 md:block" data-v-8c4cace6>週末</div><div class="hidden basis-1/8 md:block" data-v-8c4cace6>連假</div><div class="hidden basis-1/8 pr-2 md:block" data-v-8c4cace6>年假</div></div>',1),X=["title"],ee={class:"flex-shrink-0 basis-1/5 py-2 text-center md:basis-1/8"},ae={class:"flex basis-1/12 items-center md:hidden"},le=["onClick"],re={class:"-mx-4 flex flex-wrap gap-y-2 py-2 text-center"},te={key:0,class:"w-1/2 px-4"},se={key:1,class:"w-1/2 px-4"},oe={key:2,class:"w-1/2 px-4"},ie={key:3,class:"w-1/2 px-4"},ne={class:"hidden basis-1/8 py-2 md:block"},de={key:0,class:"hidden lmd:inline"},ce={class:"hidden basis-1/8 py-2 md:block"},ue={key:0,class:"hidden lmd:inline"},pe={class:"hidden basis-1/8 py-2 md:block"},be={key:0,class:"hidden lmd:inline"},me={class:"hidden basis-1/8 py-2 pr-2 md:block"},fe={key:0,class:"hidden lmd:inline"},ge=d((()=>(0,r._)("p",{class:"py-2 text-center text-lg font-bold text-primary-dark md:text-2xl"}," 目前沒有資料 ",-1))),ve=[ge];var we={__name:"InsertPreviewComponent",props:{previewInfo:{type:Object,default:()=>({})}},setup(e){const a=e,{previewInfo:d}=(0,t.BK)(a),ge=(0,t.iH)({1026:{fixedHeight:"350px",bulletsOutside:!1},9999:{fixedHeight:"100%",bulletsOutside:!0}});let we=(0,t.qj)({name:"",phone:"",address:"",county:"",height:"",intro:[],image:[],price:[]});return(0,r.dl)((()=>{let e=JSON.parse(JSON.stringify(d.value));we.name=e.name.slice(e.name.indexOf(" ")+1),we.intro=e.intro.split("\n");let a=["county","phone","address","height","website","image","tags"];for(let l of a)we[l]=Array.isArray(e[l])?[...e[l]]:e[l];delete e.price[""],we.price=Object.entries(e.price),we.price.forEach((e=>e[1].collapse=!0))})),(e,a)=>{const d=(0,r.up)("BreadCrumb"),ye=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",c,[Object.values((0,t.SU)(we)).length>0?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("section",p,[(0,r._)("div",b,[e.routeChange?((0,r.wg)(),(0,r.j4)(d,{key:0,class:"mb-10"})):(0,r.kq)("",!0),(0,r._)("div",m,[(0,r._)("div",f,[(0,r.Wm)((0,t.SU)(i.x),{breakpoints:ge.value},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,t.SU)(we).image,(e=>((0,r.wg)(),(0,r.j4)((0,t.SU)(i.c),{key:e,image:e.startsWith("blob")||e.includes("imgur.com")?e:l(9300)("./"+e),class:"overflow-hidden rounded-lg"},null,8,["image"])))),128))])),_:1},8,["breakpoints"])]),(0,r._)("div",g,[(0,r._)("h3",v,[(0,r.Wm)(ye,{icon:"fa-solid fa-location-dot",class:"mr-2"}),(0,r.Uk)((0,s.zw)("undefined"!==(0,t.SU)(we).county?(0,t.SU)(we).county:"不明"),1)]),(0,r._)("h2",w,(0,s.zw)((0,t.SU)(we).name?(0,t.SU)(we).name:"目前沒有資料"),1),(0,r._)("ul",y,[(0,r._)("li",x,[(0,r._)("div",null,[(0,r.Wm)(ye,{icon:"fa-solid fa-map",class:"mr-2"}),h]),(0,r._)("p",k,(0,s.zw)((0,t.SU)(we).address?(0,t.SU)(we).address:"目前沒有資料"),1)]),(0,r._)("li",_,[(0,r._)("div",null,[(0,r.Wm)(ye,{icon:"fa-solid fa-phone",class:"mr-2"}),U]),(0,r.wy)((0,r._)("span",{class:"mr-4 inline-block align-middle text-base"},(0,s.zw)((0,t.SU)(we).phone),513),[[o.F8,(0,t.SU)(we).phone]]),(0,r.wy)((0,r._)("span",S,"目前沒有資料",512),[[o.F8,!(0,t.SU)(we).phone]]),(0,r.wy)((0,r._)("a",{href:"tel:"+(0,t.SU)(we).phone,class:"btn btn-secondary btn-small align-middle"},[(0,r.Wm)(ye,{icon:"fa-solid fa-phone-volume",class:"mr-2"}),C],8,P),[[o.F8,""!==(0,t.SU)(we).phone]])]),(0,r._)("li",D,[(0,r._)("div",null,[(0,r.Wm)(ye,{icon:"fa-solid fa-globe",class:"mr-2"}),W]),(0,r.wy)((0,r._)("a",{href:(0,t.SU)(we).website,target:"_blank",class:"block overflow-hidden text-ellipsis whitespace-nowrap text-left text-base text-blue-700 duration-300 hover:text-blue-800"},(0,s.zw)((0,t.SU)(we).website),9,j),[[o.F8,(0,t.SU)(we).website]]),(0,r.wy)((0,r._)("span",z,"目前沒有資料",512),[[o.F8,!(0,t.SU)(we).website]])]),(0,r._)("li",V,[(0,r._)("div",null,[(0,r.Wm)(ye,{icon:"fa-solid fa-mountain-sun",class:"mr-2"}),H]),(0,r._)("span",I,(0,s.zw)((0,t.SU)(we).height.length>1?(0,t.SU)(we).height:"不明"),1)]),(0,r._)("li",Y,[(0,r._)("div",null,[(0,r.Wm)(ye,{icon:"fa-solid fa-tags",class:"mr-2"}),O]),(0,r._)("ul",K,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,t.SU)(we).tags,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"cursor-default rounded border border-primary-light bg-primary-light py-0.5 px-1.5 text-primary-dark",key:e},(0,s.zw)(e),1)))),128))])])])])])])]),(0,r._)("section",A,[(0,r._)("div",E,[(0,r._)("div",N,[(0,r._)("div",q,[(0,r._)("div",F,[T,1===(0,t.SU)(we).intro.length&&""===(0,t.SU)(we).intro[0]?((0,r.wg)(),(0,r.iD)("div",Z," 目前沒有資料 ")):((0,r.wg)(),(0,r.iD)("div",B,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,t.SU)(we).intro,((e,a)=>((0,r.wg)(),(0,r.iD)("p",{key:e,class:(0,s.C_)({"mb-4":a!==(0,t.SU)(we).intro.length-1})},(0,s.zw)(e),3)))),128))]))])]),(0,r._)("div",M,[(0,r._)("iframe",{src:`https://www.google.com/maps?q=${(0,t.SU)(we).address}(${(0,t.SU)(we).name})&hl=zh-TW&z=16&output=embed`,allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"mx-auto h-full min-h-[300px] w-full rounded-b-lg border-none lg:rounded-lg"},null,8,$)])]),(0,r._)("div",J,[(0,r._)("div",L,[R,(0,r._)("div",G,[Q,(0,r.wy)((0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,t.SU)(we).price,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e[0],class:"relative flex cursor-default flex-wrap border-b border-b-gray-300 text-right md:border-b-0 lg:hover:bg-primary lg:hover:text-white"},[(0,r._)("div",{class:"flex-grow basis-1/3 overflow-hidden text-ellipsis whitespace-nowrap py-2 pl-2 text-left",title:e[0]},(0,s.zw)(e[0]),9,X),(0,r._)("div",ee,(0,s.zw)(e[1].number),1),(0,r._)("div",ae,[(0,r._)("a",{href:"#",class:"after:absolute after:inset-x-0 after:top-0 after:z-1 after:h-10",onClick:(0,o.iM)((a=>e[1].collapse=!e[1].collapse),["prevent"])},[(0,r.Wm)(ye,{icon:"fa-solid fa-caret-up",class:(0,s.C_)(["duration-300",{"rotate-180":e[1].collapse}])},null,8,["class"])],8,le)]),(0,r._)("div",{class:(0,s.C_)(["w-full overflow-hidden bg-primary-dark text-white transition-all duration-300 md:hidden",e[1].collapse?"max-h-0":"max-h-screen"])},[(0,r._)("ul",re,[e[1].normalPrice?((0,r.wg)(),(0,r.iD)("li",te," 平日: "+(0,s.zw)(e[1].normalPrice),1)):(0,r.kq)("",!0),e[1].weekendPrice?((0,r.wg)(),(0,r.iD)("li",se," 週末: "+(0,s.zw)(e[1].weekendPrice),1)):(0,r.kq)("",!0),e[1].holidayPrice?((0,r.wg)(),(0,r.iD)("li",oe," 連假: "+(0,s.zw)(e[1].holidayPrice),1)):(0,r.kq)("",!0),e[1].newYearPrice?((0,r.wg)(),(0,r.iD)("li",ie," 年假: "+(0,s.zw)(e[1].newYearPrice),1)):(0,r.kq)("",!0)])],2),(0,r._)("div",ne,[(0,r.Uk)((0,s.zw)(e[1].normalPrice?e[1].normalPrice:"")+" ",1),e[1].normalPrice?((0,r.wg)(),(0,r.iD)("span",de,"元/晚")):(0,r.kq)("",!0)]),(0,r._)("div",ce,[(0,r.Uk)((0,s.zw)(e[1].weekendPrice?e[1].weekendPrice:"")+" ",1),e[1].weekendPrice?((0,r.wg)(),(0,r.iD)("span",ue,"元/晚")):(0,r.kq)("",!0)]),(0,r._)("div",pe,[(0,r.Uk)((0,s.zw)(e[1].holidayPrice?e[1].holidayPrice:"")+" ",1),e[1].holidayPrice?((0,r.wg)(),(0,r.iD)("span",be,"元/晚")):(0,r.kq)("",!0)]),(0,r._)("div",me,[(0,r.Uk)((0,s.zw)(e[1].newYearPrice?e[1].newYearPrice:"")+" ",1),e[1].newYearPrice?((0,r.wg)(),(0,r.iD)("span",fe," 元/晚")):(0,r.kq)("",!0)])])))),128))],512),[[o.F8,(0,t.SU)(we).price.length]]),(0,r.wy)((0,r._)("div",null,ve,512),[[o.F8,!(0,t.SU)(we).price.length]])])])])])])])):((0,r.wg)(),(0,r.j4)((0,t.SU)(n.Z),{key:1}))])}}},ye=l(3744);const xe=(0,ye.Z)(we,[["__scopeId","data-v-8c4cace6"]]);var he=xe},3370:function(e,a,l){l.d(a,{Z:function(){return n}});var r=l(6252),t=l(3577),s=l(2262),o={__name:"InsertStepComponent",props:{isActive:{type:Boolean,default:!1},stepIndex:Number,isEnd:{type:Boolean,default:!1},maxStep:{type:Number,default:0}},emits:["jumpToStep"],setup(e,{emit:a}){const l=e,{isActive:o,stepIndex:i,isEnd:n,maxStep:d}=(0,s.BK)(l);function c(e){a("jumpToStep",e)}return(e,a)=>((0,r.wg)(),(0,r.iD)("li",{class:(0,t.C_)(["flex items-center",{"relative after:w-8 after:border-t-2  after:md:w-10 lg:after:w-20":!(0,s.SU)(n)},(0,s.SU)(d)>(0,s.SU)(i)?"after:border-t-primary-dark":"after:border-dashed after:border-t-gray-200"])},[(0,r._)("div",{class:(0,t.C_)(["flex aspect-1 w-12 select-none flex-col items-center justify-center rounded-full border-2 text-sm md:w-20 lg:w-25 lg:text-base",{"cursor-pointer border-primary-dark bg-primary-light text-primary-dark transition-opacity duration-300 hover:opacity-70":(0,s.SU)(d)>=(0,s.SU)(i)&&!(0,s.SU)(o),"pointer-events-none border-gray-200 bg-gray-100 text-gray-400":(0,s.SU)(d)<(0,s.SU)(i),"cursor-pointer border-primary bg-primary-dark text-white":(0,s.SU)(o)}]),onClick:a[0]||(a[0]=e=>c((0,s.SU)(i)))},[(0,r.WI)(e.$slots,"icon"),(0,r.WI)(e.$slots,"name")],2)],2))}};const i=o;var n=i},409:function(e,a,l){l.d(a,{Z:function(){return v}});var r=l(6252),t=l(3577),s=l(9963),o=l(2262),i=l(9669),n=l.n(i),d=l(559);const c={key:0,class:"px-3 xl:px-24"},u={class:"mb-4 border-l-4 border-l-primary-dark pl-4 text-xl font-bold lg:text-2xl"},p={class:"flex flex-wrap items-center gap-x-4 gap-y-4 lg:gap-x-6"},b=["id","onUpdate:modelValue"],m=["for"];var f={__name:"InsertTagComponent",props:{existedTags:{type:Array}},emits:["campTags"],setup(e,{emit:a}){const l=e,i=(0,o.iH)({}),f=(0,o.iH)(!0);return(0,r.bv)((()=>{n().get("https://8ojgh9.deta.dev/tags").then((e=>{let a={};if(Object.entries(e.data[0]).forEach((e=>{a[e[0]]=e[1].map((e=>({tag:e,checked:!1})))})),i.value=a,f.value=!1,l.existedTags?.length)for(let r in i.value)i.value[r].forEach((e=>{l.existedTags.includes(e.tag)&&(e.checked=!0)}))})).catch((e=>console.error(e)))})),(0,r.se)((()=>{let e=Object.values(i.value).reduce(((e,a)=>[...e,...a]),[]).filter((e=>e.checked)).map((e=>e.tag));a("campTags",e)})),(e,a)=>f.value?((0,r.wg)(),(0,r.j4)((0,o.SU)(d.Z),{key:1})):((0,r.wg)(),(0,r.iD)("section",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.entries(i.value),((e,a)=>((0,r.wg)(),(0,r.iD)("div",{key:e[0],class:"mb-6"},[(0,r._)("h3",u,(0,t.zw)(e[0]),1),(0,r._)("ul",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e[1],((e,l)=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r.wy)((0,r._)("input",{type:"checkbox",id:"block"+a+"_item"+l,"onUpdate:modelValue":a=>e.checked=a,class:"mr-2 accent-primary-dark focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"},null,8,b),[[s.e8,e.checked]]),(0,r._)("label",{for:"block"+a+"_item"+l},(0,t.zw)(e.tag),9,m)])))),128))])])))),128))]))}};const g=f;var v=g},559:function(e,a,l){l.d(a,{Z:function(){return u}});var r=l(6252);const t={class:"flex h-[90vh] flex-col items-center justify-center"},s=(0,r.uE)('<ul class="relative mb-2 h-12 w-12"><li class="animate-bigger absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary-dark"></li><li class="animate-bigger absolute top-1/4 right-1/4 h-2 w-2 -translate-y-3/4 translate-x-3/4 rounded-full bg-primary-dark" style="animation-delay:0.125s;"></li><li class="animate-bigger absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 rounded-full bg-primary-dark" style="animation-delay:0.25s;"></li><li class="animate-bigger absolute bottom-1/4 right-1/4 h-2 w-2 translate-x-3/4 translate-y-3/4 rounded-full bg-primary-dark" style="animation-delay:0.375s;"></li><li class="animate-bigger absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary-dark" style="animation-delay:0.5s;"></li><li class="animate-bigger absolute bottom-1/4 left-1/4 h-2 w-2 -translate-x-3/4 translate-y-3/4 rounded-full bg-primary-dark" style="animation-delay:0.625s;"></li><li class="animate-bigger absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-primary-dark" style="animation-delay:0.75s;"></li><li class="animate-bigger absolute top-1/4 left-1/4 h-2 w-2 -translate-x-3/4 -translate-y-3/4 rounded-full bg-primary-dark" style="animation-delay:0.875s;"></li></ul><h3 class="text-center text-3xl font-bold text-primary-dark"> 努力載入中... </h3>',2),o=[s];function i(e,a){return(0,r.wg)(),(0,r.iD)("div",t,o)}var n=l(3744);const d={},c=(0,n.Z)(d,[["render",i]]);var u=c}}]);
//# sourceMappingURL=148.358b0a39.js.map