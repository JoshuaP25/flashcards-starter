(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(15),n=c.n(i),r=c(5),u=c(4),d=c(3),o=c(11),l=c(36),j={newQuizRoute:function(){return"/quizzes/new"},quizRoute:function(e){return"/quizzes/".concat(e)},quizzesRoute:function(){return"/quizzes"},newTopicRoute:function(){return"/topics/new"},topicRoute:function(e){return"/topics/".concat(e)},topicsRoute:function(){return"/topics"}},p=c(12),b=Object(p.b)({name:"topics",initialState:{topics:{}},reducers:{addTopic:function(e,t){var c=t.payload,a=c.id,s=c.name,i=c.icon;e.topics[a]={id:a,name:s,icon:i,quizIds:[]}},addQuizId:function(e,t){var c=t.payload,a=c.quizId,s=c.topicId;e.topics[s].quizIds.push(a)}}}),h=function(e){return e.topics.topics},m=b.actions,x=m.addTopic,O=m.addQuizId,z=b.reducer,v=Object(p.b)({name:"quizzes",initialState:{quizzes:{}},reducers:{addQuiz:function(e,t){var c=t.payload,a=c.id,s=c.name,i=c.topicId,n=c.cardIds;e.quizzes[a]={id:a,name:s,topicId:i,cardIds:n}}}}),f=function(e){return e.quizzes.quizzes},q=v.actions.addQuiz,g=v.reducer,k=Object(p.b)({name:"cards",initialState:{cards:{}},reducers:{addCard:function(e,t){var c=t.payload,a=c.id,s=c.front,i=c.back;e.cards[a]={id:a,front:s,back:i}}}}),N=function(e){return e.cards.cards},y=k.actions.addCard,C=k.reducer,I=c(0);function w(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),n=Object(o.a)(i,2),u=n[0],p=n[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),x=m[0],z=m[1],v=Object(d.f)(),f=Object(r.c)(h),g=Object(r.b)(),k=function(e,t,c){var a=u.slice();a[e][t]=c,p(a)};return Object(I.jsxs)("section",{children:[Object(I.jsx)("h1",{children:"Create a new quiz"}),Object(I.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0!==c.length){var t=[];console.log(t),u.map((function(e,c){var a=Object(l.a)();t.push(a),g(y({id:a,front:u[c].front,back:u[c].back}))})),g(function(e){var t=e.name,c=e.topicId,a=e.cardIds,s=e.id;return function(e){e(q({id:s,name:t,topicId:c,cardIds:a})),e(O({quizId:s,topicId:c}))}}({name:c,topicId:x,cardIds:t,id:Object(l.a)()})),v.push(j.quizzesRoute())}},children:[Object(I.jsx)("input",{id:"quiz-name",value:c,onChange:function(e){return s(e.currentTarget.value)},placeholder:"Quiz Title"}),Object(I.jsxs)("select",{id:"quiz-topic",onChange:function(e){return z(e.currentTarget.value)},placeholder:"Topic",children:[Object(I.jsx)("option",{value:"",children:"Topic"}),Object.values(f).map((function(e){return Object(I.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),u.map((function(e,t){return Object(I.jsxs)("div",{className:"card-front-back",children:[Object(I.jsx)("input",{id:"card-front-".concat(t),value:u[t].front,onChange:function(e){return k(t,"front",e.currentTarget.value)},placeholder:"Front"}),Object(I.jsx)("input",{id:"card-back-".concat(t),value:u[t].back,onChange:function(e){return k(t,"back",e.currentTarget.value)},placeholder:"Back"}),Object(I.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault(),p(u.filter((function(e,c){return t!==c})))}(e,t)},className:"remove-card-button",children:"Remove Card"})]},t)})),Object(I.jsxs)("div",{className:"actions-container",children:[Object(I.jsx)("button",{onClick:function(e){e.preventDefault(),p(u.concat({front:"",back:""}))},children:"Add a Card"}),Object(I.jsx)("button",{children:"Create Quiz"})]})]})]})}var T=[{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",name:"Book"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg",name:"Balloon"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/bird.svg",name:"Bird"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg",name:"Calendar"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/clover.svg",name:"Clover"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/crayons.svg",name:"Crayons"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/data-flow.svg",name:"Data"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/fence.svg",name:"Fence"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/grill.svg",name:"Grill"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hand-drill.svg",name:"Hand"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hat.svg",name:"Hat"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/internet.svg",name:"Internet"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/ladybug.svg",name:"Ladybug"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/leaves.svg",name:"Leaves"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/medicine.svg",name:"Medicine"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/nest.svg",name:"Nest"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/shuttlecock.svg",name:"Shuttlecock"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/spade.svg",name:"Spade"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/statistics.svg",name:"Statistics"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/sun.svg",name:"Sun"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/tree.svg",name:"Tree"}];function R(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(o.a)(i,2),u=n[0],p=n[1],b=Object(d.f)(),h=Object(r.b)();return Object(I.jsx)("section",{children:Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.length&&(h(x({name:c,id:Object(l.a)(),icon:u})),b.push(j.topicsRoute()))},children:[Object(I.jsx)("h1",{className:"center",children:"Create a new topic"}),Object(I.jsxs)("div",{className:"form-section",children:[Object(I.jsx)("input",{id:"topic-name",type:"text",value:c,onChange:function(e){return s(e.currentTarget.value)},placeholder:"Topic Name"}),Object(I.jsxs)("select",{onChange:function(e){return p(e.currentTarget.value)},required:!0,defaultValue:"default",children:[Object(I.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Choose an icon"}),T.map((function(e){var t=e.name,c=e.url;return Object(I.jsx)("option",{value:c,children:t},c)}))]})]}),Object(I.jsx)("button",{className:"center",children:"Add Topic"})]})})}function Q(){var e=Object(r.c)(h);return Object(I.jsxs)("section",{className:"center",children:[Object(I.jsx)("h1",{children:"Topics"}),Object(I.jsx)("ul",{className:"topics-list",children:Object.values(e).map((function(e){return Object(I.jsx)("li",{className:"topic",children:Object(I.jsx)(u.b,{to:j.topicRoute(e.id),className:"topic-link",children:Object(I.jsxs)("div",{className:"topic-container",children:[Object(I.jsx)("img",{src:e.icon,alt:""}),Object(I.jsxs)("div",{className:"text-content",children:[Object(I.jsx)("h2",{children:e.name}),Object(I.jsxs)("p",{children:[e.quizIds.length," Quizzes"]})]})]})})},e.id)}))}),Object(I.jsx)(u.b,{to:j.newTopicRoute(),className:"button create-new-topic-button",children:"Create New Topic"})]})}function S(){var e=Object(r.c)(h),t=Object(r.c)(f),c=e[Object(d.g)().topicId],a=c.quizIds.map((function(e){return t[e]}));return Object(I.jsxs)("section",{children:[Object(I.jsx)("img",{src:c.icon,alt:"",className:"topic-icon"}),Object(I.jsxs)("h1",{children:["Topic: ",c.name]}),Object(I.jsx)("ul",{className:"quizzes-list",children:a.map((function(e){return Object(I.jsx)("li",{className:"quiz",children:Object(I.jsx)(u.b,{to:j.quizRoute(e.id),children:e.name})},e.id)}))}),Object(I.jsx)(u.b,{to:"/quizzes/new",className:"button center",children:"Create a New Quiz"})]})}function B(e){var t=e.id,c=Object(r.c)(N)[t],s=Object(a.useState)(!1),i=Object(o.a)(s,2),n=i[0],u=i[1];return Object(I.jsx)("li",{children:Object(I.jsx)("button",{className:"card",onClick:function(e){return u(!n)},children:n?c.back:c.front})})}function D(){var e=Object(r.c)(f)[Object(d.g)().quizId];return Object(I.jsxs)("section",{children:[Object(I.jsx)("h1",{children:e.name}),Object(I.jsx)("ul",{className:"cards-list",children:e.cardIds.map((function(e){return Object(I.jsx)(B,{id:e},e)}))}),Object(I.jsx)(u.b,{to:j.newQuizRoute(),className:"button center",children:"Create a New Quiz"})]})}function F(){var e=Object(r.c)(f);return Object(I.jsxs)("section",{className:"center",children:[Object(I.jsx)("h1",{children:"Quizzes"}),Object(I.jsx)("ul",{className:"quizzes-list",children:Object.values(e).map((function(e){return Object(I.jsx)(u.b,{to:j.quizRoute(e.id),children:Object(I.jsx)("li",{className:"quiz",children:e.name})},e.id)}))}),Object(I.jsx)(u.b,{to:j.newQuizRoute(),className:"button",children:"Create New Quiz"})]})}function A(){return Object(I.jsxs)(u.a,{children:[Object(I.jsx)("nav",{children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(u.c,{to:j.topicsRoute(),activeClassName:"active",children:"Topics"})}),Object(I.jsx)("li",{children:Object(I.jsx)(u.c,{to:j.quizzesRoute(),activeClassName:"active",children:"Quizzes"})}),Object(I.jsx)("li",{children:Object(I.jsx)(u.c,{to:j.newQuizRoute(),activeClassName:"active",children:"New Quiz"})})]})}),Object(I.jsxs)(d.c,{children:[Object(I.jsx)(d.a,{path:"/topics",children:Object(I.jsx)(H,{})}),Object(I.jsx)(d.a,{path:"/quizzes",children:Object(I.jsx)(J,{})})]})]})}function H(){var e=Object(d.h)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(d.c,{children:[Object(I.jsx)(d.a,{path:"".concat(e.path,"/new"),children:Object(I.jsx)(R,{})}),Object(I.jsx)(d.a,{path:"".concat(e.path,"/:topicId"),children:Object(I.jsx)(S,{})}),Object(I.jsx)(d.a,{path:"".concat(e.path),children:Object(I.jsx)(Q,{})})]})})}function J(){var e=Object(d.h)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(d.c,{children:[Object(I.jsx)(d.a,{path:"".concat(e.path,"/new"),children:Object(I.jsx)(w,{})}),Object(I.jsx)(d.a,{path:"".concat(e.path,"/:quizId"),children:Object(I.jsx)(D,{})}),Object(I.jsx)(d.a,{path:"".concat(e.path),children:Object(I.jsx)(F,{})})]})})}var L=Object(p.a)({reducer:{topics:z,quizzes:g,cards:C}});n.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(r.a,{store:L,children:Object(I.jsx)(A,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.419705ed.chunk.js.map