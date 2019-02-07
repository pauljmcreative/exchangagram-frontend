(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),i=a(117),c=a(2),l=a(3),u=a(5),m=a(4),p=a(6),d=a(118),h=a(45),f=a(119),g=a(14),v=a.n(g),_=a(116),E=(a(41),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return e=this.props.isLoggedIn?r.a.createElement("ul",{className:"Header__nav-group"},r.a.createElement("li",{className:"Header__nav-link"},r.a.createElement("p",{className:"Header__user"},"Hello ",this.props.user.user.username)),r.a.createElement("li",{className:"Header__nav-link"},r.a.createElement(_.a,{to:"/exchangagram-frontend/home/feed"},r.a.createElement("i",{className:"fa fa-compass Header__nav-icon","aria-hidden":"true"}))),r.a.createElement("li",{className:"Header__nav-link Header__notification-nav"},r.a.createElement("a",{className:"NotificationButton__button",href:"/notifications"},r.a.createElement("i",{className:"fa fa-heart-o Header__nav-icon","aria-hidden":"true"}))),r.a.createElement("li",{className:"Header__nav-link"},r.a.createElement(_.a,{to:"/exchangagram-frontend/home/profile/".concat(this.props.user.user.id)},r.a.createElement("i",{className:"fa fa-smile-o Header__nav-icon","aria-hidden":"true"})))):r.a.createElement("ul",{className:"Header__nav-group"},r.a.createElement("li",{className:"Header__nav-link"},r.a.createElement(_.a,{to:"/exchangagram-frontend/"},"Sign In")),r.a.createElement("li",{className:"Header__nav-link"},r.a.createElement(_.a,{to:"/exchangagram-frontend/signup"},"Sign Up"))),r.a.createElement("header",{className:"Header__root"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row  Header__container"},r.a.createElement("div",{className:"three columns"},r.a.createElement("h1",{className:"Header__logo"},r.a.createElement(_.a,{to:"#",className:"Header__logo-link"},r.a.createElement("i",{className:"fa fa-instagram Header__instagram-icon","aria-hidden":"true"})," Exchangagram"))),r.a.createElement("nav",{className:"offset-by-five four columns"},e))))}}]),t}(n.Component)),b=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.onClick,className:"NewPostButton__root"},"+")}}]),t}(n.Component)),N=a(12),O=a(17),y=a.n(O),k=a(7),j=a.n(k),P="https://exchangagram-backend.herokuapp.com/api/posts/",C=function e(){Object(c.a)(this,e)};C.index=function(){return j.a.get(P)},C.show=function(e){return j.a.get(P+e)},C.create=function(e,t){return j.a.post(P+"new/"+t,e)},C.update=function(e,t){return j.a.put(P+e,t)},C.delete=function(e){return j.a.delete(P+e)};var S=C,w="https://exchangagram-backend.herokuapp.com/api/images/",I=function e(){Object(c.a)(this,e)};I.images=function(){return j.a.get(w)},I.image=function(e){return j.a.get(w+e)},I.create=function(e,t){return j.a.post(w+t+"/upload",e)};var x=I,M=(a(77),{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0, 0.8)"},content:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",right:"initial",bottom:"initial",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"30px"}}),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={location:"",caption:""},a.handlePostChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handlePostSubmit=function(e){e.preventDefault();var t={location:a.state.location,caption:a.state.caption},n=new FormData(document.querySelector("#image-upload"));S.create(t,a.props.userId).then(function(e){x.create(n,e.data._id).then(function(e){a.props.closeModal(),a.props.fetchPosts()}).catch(function(e){return console.log("Something went wrong: ",e)})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,contentLabel:"NewPostModal",style:M,ariaHideApp:!1},r.a.createElement("form",{className:"PostForm__root"},r.a.createElement("fieldset",null,r.a.createElement("input",Object(N.a)({className:"NewPostModal__input",onChange:this.handlePostChange,name:"location",type:"text",placeholder:"Location"},"className","PostForm__input"))),r.a.createElement("fieldset",null,r.a.createElement("input",Object(N.a)({className:"NewPostModal__input",onChange:this.handlePostChange,name:"caption",type:"text",placeholder:"Caption"},"className","PostForm__input")))),r.a.createElement("form",{id:"image-upload",encType:"multipart/form-data"},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("span",null,"Image File"),r.a.createElement("input",{className:"NewPostModal__fileButton",name:"myImage",type:"file"})))),r.a.createElement("button",{onClick:this.handlePostSubmit,className:"NewPostModal__button",type:"submit"},"Submit"))}}]),t}(n.Component),L=a(47),A=(a(79),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLikeClick=function(e){e.preventDefault(),console.log("Like Clicked!")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"LikeButton__root",onClick:this.handleLikeClick},r.a.createElement("i",{className:"fa fa-heart-o LikeButton__icon"}))}}]),t}(n.Component)),F=(a(81),"https://exchangagram-backend.herokuapp.com/api/comments/"),D=function e(){Object(c.a)(this,e)};D.index=function(){return j.a.get(F)},D.show=function(e){return j.a.get(F+e)},D.create=function(e,t,a){return j.a.post(F+"create/"+t+"/"+a,e)};var B=D,H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={commentBody:""},a.handleCommentChange=function(e){a.setState({commentBody:e.target.value})},a.handleCommentKeyDown=function(e){if(e.persist(),13===e.keyCode&&a.state.commentBody.trim().length>0){console.log("Comment submitted!!!!",e.keyCode);var t={body:a.state.commentBody};B.create(t,a.props.userid,a.props.post).then(function(e){a.props.fetchComments(a.props.post),a.setState({commentBody:""})})}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CommentBox__root"},r.a.createElement("input",{className:"CommentBox__input",type:"text",placeholder:"Add a comment...",value:this.state.commentBody,onChange:this.handleCommentChange,onKeyDown:this.handleCommentKeyDown,ref:function(t){e.commentInput=t}}))}}]),t}(n.Component),G=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CommentItem__root"},r.a.createElement("strong",null,r.a.createElement(L.a,{to:"/home/profile/".concat(this.props.user._id),className:"CommentItem__username"},this.props.user.username)),r.a.createElement("p",null,this.props.comment.body),r.a.createElement("p",null,this.props.comment.dateCreated))}}]),t}(n.Component)),R=function(e){var t=e.comments.map(function(e){return r.a.createElement(G,{key:e._id,comment:e,user:e.user})});return r.a.createElement("div",{className:"CommentList__root"},t)},q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[]},a.componentDidUpdate=function(e,t){e.post!==a.props.post&&a.fetchComments(a.props.post)},a.fetchComments=function(e){B.show(e).then(function(e){a.setState({comments:e.data}),console.log("HERE IS POST Comments",a.state.comments)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,{comments:this.state.comments,user:this.props.user}),r.a.createElement(H,{post:this.props.post,fetchComments:this.fetchComments,userid:this.props.user.user.id}))}}]),t}(n.Component),T=(a(84),"https://exchangagram-backend.herokuapp.com/api/avatars/"),Z=function e(){Object(c.a)(this,e)};Z.avatars=function(){return j.a.get(T)},Z.avatar=function(e){return j.a.get(T+e)},Z.create=function(e,t){return j.a.post(T+t+"/upload",e)};var K=Z,V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={postImage:"",avatar:"",post:{}},a.componentDidMount=function(){var e;a.props.post._id&&(x.image(a.props.post._id).then(function(e){e.data[0].imageName&&a.setState({postImage:"https://exchangagram-backend.herokuapp.com/uploads/".concat(e.data[0].imageName)})}),S.show(a.props.post._id).then(function(e){a.setState({post:e.data})}),e=a.props.post.user._id,K.avatar(e).then(function(e){a.setState({avatar:e.data.length?"avatars/"+e.data[0].avatarName:"avatars/default-avatar.png"})}).catch(function(e){return console.log("post avatar error",e)}))},a.handleDelete=function(e){S.delete(e).then(function(e){console.log("deleted!",e),a.props.fetchPosts()})},a.increaseLikes=function(){var e={likes:a.state.post.likes+1};S.update(a.state.post._id,e).then(function(e){return a.fetchPostById(a.state.post._id)})},a.decreaseLikes=function(){var e={likes:a.state.post.likes-1};S.update(a.state.post._id,e).then(function(e){return a.fetchPostById(a.state.post._id)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post.user,a=t._id,n=t.username;return r.a.createElement("article",{className:"Post__root"},r.a.createElement("div",{className:"Post-header"},r.a.createElement("div",{className:"Post-header__avatar-container"},this.state.avatar?r.a.createElement("img",{src:"https://exchangagram-backend.herokuapp.com/".concat(this.state.avatar),className:"Post-header__avatar-img",alt:"Profile"}):null),r.a.createElement("div",{className:"Post-header__metadata-container"},r.a.createElement("div",{className:"Post-header__username"},r.a.createElement(L.a,{to:"/home/profile/".concat(a)},n))),r.a.createElement("div",{className:"Post-header__timestamp"},this.props.user.user.id===this.props.post.user._id?r.a.createElement("div",{className:"Post__btn"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(e.props.post._id)}},r.a.createElement("i",{className:"fa fa-trash-o fa-2x","aria-hidden":"true"}))):null)),r.a.createElement("div",{className:"Post__body"},r.a.createElement("img",{src:this.state.postImage,alt:"Post"}),r.a.createElement("div",null,r.a.createElement("span",{className:"Post__likes-txt"},"Likes: ",this.state.post.likes),r.a.createElement("span",{className:"Post__btn like-hearts"},r.a.createElement("button",{className:"btn btn-danger",onClick:this.increaseLikes},r.a.createElement("i",{className:"fa fa-heart-o fa-2x LikeButton__icon"})),r.a.createElement("button",{className:"btn btn-danger",onClick:this.decreaseLikes},r.a.createElement("i",{className:"fa fa-heart-o fa-2x fa-rotate-180 LikeButton__icon"})))),r.a.createElement("div",{className:"Post__comments"},this.state.post.location),r.a.createElement("div",{className:"Post__comments"},this.state.post.caption)),r.a.createElement("div",{className:"Post__footer"},r.a.createElement("div",{className:"Post__action-box"},r.a.createElement("div",{className:"Post__like-button"},r.a.createElement(A,null)),r.a.createElement("div",{className:"Post__comment-box"},r.a.createElement(q,{post:this.state.post._id,user:this.props.user})))))}}]),t}(n.Component),$=function(e){var t=e.posts.map(function(t){return r.a.createElement(V,Object.assign({key:t._id},e,{post:t,user:e.user,fetchPosts:e.fetchPosts}))});return r.a.createElement("div",{className:"row align-items-end mx-auto"},t)},z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newPostModalIsOpen:!1,posts:[]},a.openModal=function(){return a.setState({newPostModalIsOpen:!0})},a.closeModal=function(){return a.setState({newPostModalIsOpen:!1})},a.componentDidMount=function(){a.fetchPosts()},a.fetchPosts=function(){S.index().then(function(e){a.setState({posts:e.data})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return console.log(this.state.posts),this.props.user.user&&(e=r.a.createElement(U,{fetchPosts:this.fetchPosts,userId:this.props.user.user.id,isOpen:this.state.newPostModalIsOpen,closeModal:this.closeModal,onRequestClose:this.closeModal})),r.a.createElement("div",null,r.a.createElement($,{posts:this.state.posts,user:this.props.user,fetchPosts:this.fetchPosts}),r.a.createElement(b,{onClick:this.openModal}),e)}}]),t}(n.Component),J="https://exchangagram-backend.herokuapp.com/api/users/",W=function e(){Object(c.a)(this,e)};W.show=function(e){return j.a.get(J+e)},W.signup=function(e){return j.a.post(J+"signup",e)},W.signin=function(e){return j.a.post(J+"signin",e)},W.update=function(e,t){return j.a.put(J+e,t)};var X=W,Q=(a(86),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={avatar:"",user:{}},a.componentDidMount=function(){a.props.user._id&&(a.fetchAvatar(a.props.user._id),a.fetchUserById(a.props.user._id))},a.componentDidUpdate=function(e,t){e.user!==a.props.user&&(a.fetchAvatar(a.props.user._id),a.fetchUserById(a.props.user._id))},a.fetchUserById=function(e){X.show(e).then(function(e){a.setState({user:e.data})}).catch(function(e){return console.log("profile user show error",e)})},a.fetchAvatar=function(e){console.log("Profile FETCHING"),K.avatar(e).then(function(e){console.log("FETCH",e),a.setState({avatar:e.data.length?"uploads/"+e.data[0].avatarName:"uploads/default-avatar.png"})}).catch(function(e){return console.log("error",e)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;if(this.props.user){var t=this.props.user,a=v()(localStorage.getItem("egt"));e=r.a.createElement("div",{className:"row Profile__user-container"},r.a.createElement("div",{className:"Profile__user-container-flex"},r.a.createElement("div",{className:"Profile__avatar-container four columns"},r.a.createElement("div",{className:"Profile__avatar-img-wrapper"},this.state.avatar?r.a.createElement("img",{src:"https://exchangagram-backend.herokuapp.com/".concat(this.state.avatar),className:"Profile__avatar-img",alt:"profile"}):null)),r.a.createElement("div",{className:"Profile__txt"},r.a.createElement("h3",{className:"Profile__username"},t.username),a.user.id===this.props.match.params.user_id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Profile__btns"},r.a.createElement("button",{className:"Profile__button",onClick:this.props.updateEditProfile},r.a.createElement("i",{className:"fa fa-edit fa-2x "})),r.a.createElement("button",{className:"Profile__button",onClick:this.props.handleLogout},r.a.createElement("i",{className:"fa fa-sign-out fa-2x"})))):r.a.createElement("button",null,"Follow"))))}return r.a.createElement("div",{className:"Profile__user-info-container"},r.a.createElement("div",{className:"Profile__root container"},e))}}]),t}(n.Component)),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleGridModalChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value)),console.log(a.state)},a.handleGridModalSubmit=function(e){e.preventDefault()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getCustomStyles",value:function(){return{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{position:"absolute",top:"50%",left:"50%",right:"initial",bottom:"initial",transform:"translate(-50%, -50%)",border:"none",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"0px",outline:"none",padding:"0px",width:"65vw"}}}},{key:"render",value:function(){return r.a.createElement(y.a,{isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,contentLabel:"GridModal",style:this.getCustomStyles(),ariaHideApp:!1},r.a.createElement("div",null,"GRID MODAL"))}}]),t}(n.Component),ee=(a(88),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gridModalIsOpen:!1,post:{},postImage:""},a.openModal=function(){return a.setState({gridModalIsOpen:!0})},a.closeModal=function(){return a.setState({gridModalIsOpen:!1})},a.componentDidMount=function(){a.props.post._id&&(a.fetchImage(a.props.post._id),a.fetchPostById(a.props.post._id))},a.fetchPostById=function(e){S.show(e).then(function(e){a.setState({post:e.data})})},a.fetchImage=function(e){x.image(e).then(function(e){a.setState({postImage:e.data[0].imageName})})},a.increaseLikes=function(){var e={likes:a.state.post.likes+1};S.update(a.state.post._id,e).then(function(e){return a.fetchPostById(a.state.post._id)})},a.decreaseLikes=function(){var e={likes:a.state.post.likes-1};S.update(a.state.post._id,e).then(function(e){return a.fetchPostById(a.state.post._id)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Grid__thumbnail"},this.state.postImage?r.a.createElement("img",{onClick:this.openModal,src:"https://exchangagram-backend.herokuapp.com/image/".concat(this.state.postImage),alt:"Post"}):null),r.a.createElement(Y,{post:this.state.post,isOpen:this.state.gridModalIsOpen,closeModal:this.closeModal,onRequestClose:this.closeModal}))}}]),t}(n.Component)),te=(a(90),function(e){var t=e.posts.filter(function(t){return t.user._id===e.userId}).map(function(t){return r.a.createElement(ee,{key:t._id,post:t,user:e.user})});return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"GridList__root"},t))}),ae=(a(31),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.user.name,username:a.props.user.username,email:a.props.user.email},a.handleEditProfileChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleEditProfileSubmit=function(e){e.preventDefault();var t={username:a.state.username,email:a.state.email,name:a.state.name};X.update(a.props.user._id,t).then(function(e){localStorage.setItem("egt",e.data.token);var t=v()(e.data.token);if(0==document.getElementById("avatar-input").files.length)console.log("no files selected");else{var n=new FormData(document.querySelector("#avatar-upload"));K.create(n,t.user.id).then(function(e){console.log(e)}).catch(function(e){console.log("Avatar did not load",e)})}a.props.setUser(t),a.props.fetchUser(t.user.id),a.props.updateEditProfile()}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Edit profile..."),r.a.createElement("form",{className:"SignInForm__root"},r.a.createElement("fieldset",null,r.a.createElement("input",{defaultValue:this.props.user.name,onChange:this.handleEditProfileChange,name:"name",type:"text",className:"SignInForm__input"})),r.a.createElement("fieldset",null,r.a.createElement("input",{defaultValue:this.props.user.username,onChange:this.handleEditProfileChange,name:"username",type:"text",className:"SignInForm__input"})),r.a.createElement("fieldset",null,r.a.createElement("input",{defaultValue:this.props.user.email,onChange:this.handleEditProfileChange,name:"email",type:"email",className:"SignInForm__input"}))),r.a.createElement("form",{id:"avatar-upload",encType:"multipart/form-data"},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"btn grey"},r.a.createElement("span",null,"File"),r.a.createElement("input",{name:"myAvatar",type:"file",id:"avatar-input"})))),r.a.createElement("button",{onClick:this.handleEditProfileSubmit,className:"SignInForm__button",type:"submit"},"Submit"),r.a.createElement("button",{onClick:this.props.updateEditProfile},"cancel"))}}]),t}(n.Component)),ne=Object(f.a)(ae),re=(a(93),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],user:{},editProfile:!1},a.componentDidMount=function(){a.fetchPosts(),a.fetchUser(a.props.match.params.user_id)},a.componentDidUpdate=function(e,t){e!==a.props&&(a.fetchPosts(),a.fetchUser(a.props.match.params.user_id))},a.fetchPosts=function(){S.index().then(function(e){a.setState({posts:e.data})})},a.fetchUser=function(e){X.show(e).then(function(e){a.setState({user:e.data})})},a.updateEditProfile=function(){a.setState({editProfile:!a.state.editProfile})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderGridModal",value:function(){return null===this.state.activeGridIndex?r.a.createElement(Y,{isOpen:this.state.gridModalIsOpen,closeModal:this.closeModal}):r.a.createElement(Y,{isOpen:this.state.gridModalIsOpen,closeModal:this.closeModal,nextGridClick:this.nextGridClick,prevGridClick:this.prevGridClick})}},{key:"render",value:function(){var e=this.state.posts?r.a.createElement(te,{posts:this.state.posts,userId:this.props.match.params.user_id}):null;return this.state.editProfile?r.a.createElement("div",{className:"sign-in__root container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns offset-by-three"},r.a.createElement("div",{className:"SignIn__form-wrapper"},r.a.createElement(ne,{user:this.state.user,setUser:this.props.setUser,updateEditProfile:this.updateEditProfile,fetchUser:this.fetchUser}))))):r.a.createElement("div",{className:"ProfileContainer__root"},r.a.createElement("div",{className:"ProfileContainer__user- container"},r.a.createElement(Q,Object.assign({},this.props,{user:this.state.user,posts:this.state.posts,updateEditProfile:this.updateEditProfile}))),r.a.createElement("div",null,e))}}]),t}(n.Component)),se=(a(95),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Home__root container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/exchangagram-frontend/home/feed",render:function(t){return r.a.createElement(z,Object.assign({},t,{user:e.props.user}))}}),r.a.createElement(h.a,{path:"/exchangagram-frontend/home/profile/:user_id",render:function(t){return r.a.createElement(re,Object.assign({},t,{user:e.props.user,setUser:e.props.setUser,handleLogout:e.props.handleLogout}))}})))}}]),t}(n.Component)),oe=(a(97),function(e){e?(j.a.defaults.headers.common.Authorization="Bearer "+e,console.log("IN UTILS"),console.log("AXIOS",j.a.defaults.headers)):delete j.a.defaults.headers.common.Authorization}),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",username:"",password:"",errors:{}},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleSignupSubmit=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,username:a.state.username,password:a.state.password};a.validate(t)&&X.signup(t).then(function(e){console.log(e),localStorage.setItem("egt",e.data.token),oe(e.data.token);var t=v()(e.data.token);a.props.setUser(t)}).then(function(){return a.props.history.push("/exchangagram-frontend/home/feed")}).catch(function(e){console.log(e),a.handleInputErrors()})},a.handleInputErrors=function(){a.setState({errors:{alreadyExists:"Username or email already exist...  Please resubmit."}})},a.validate=function(e){var t={},n=!0;return e.name||(n=!1,t.name="*Please enter your name."),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(n=!1,t.email="*Please re-enter your email."):(n=!1,t.email="*Please enter your email."),e.username?e.username.length<2?(n=!1,t.username="*Please re-enter your username."):e.username.length>30?(n=!1,t.username="*Please re-enter your username."):/^[A-Z0-9_-]{3,30}$/i.test(e.username)||(n=!1,t.username="*Please re-enter your username."):(n=!1,t.username="*Please enter your username."),e.password?e.password.length<8&&(n=!1,t.password="*Please re-enter password"):(n=!1,t.password="*Password is required"),a.setState({errors:t}),n},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"SignUpForm__root"},r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",placeholder:"Name",className:"SignUpForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.name)),r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleChange,name:"email",type:"email",placeholder:"Email",className:"SignUpForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.email),r.a.createElement("div",{className:"errorMsg"},this.state.errors.alreadyExists)),r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleChange,name:"username",type:"text",placeholder:"Username",className:"SignUpForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.username),r.a.createElement("div",{className:"errorMsg"},this.state.errors.alreadyExists)),r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",placeholder:"Create Password",className:"SignUpForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.password)),r.a.createElement("button",{onClick:this.handleSignupSubmit,className:"SignUpForm__button",type:"submit"},"Submit"))}}]),t}(n.Component),ce=Object(f.a)(ie),le=(a(99),function(e){return r.a.createElement("div",{className:"FormDivider__root"},r.a.createElement("div",{className:"FormDivider__line"}),r.a.createElement("div",{className:"FormDivider__text"},"OR"),r.a.createElement("div",{className:"FormDivider__line"}))}),ue=(a(101),function(e){return r.a.createElement("div",{className:"SignUp__root container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns offset-by-three"},r.a.createElement("div",{className:"SignUp__form-wrapper"},r.a.createElement("h1",null,"SignUp!!!"),r.a.createElement(ce,{setUser:e.setUser}),r.a.createElement(le,null),r.a.createElement(L.a,{className:"signIn__link",to:"/exchangagram-frontend/"},r.a.createElement("h4",null,"sign in"))))))}),me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{}},a.handleSigninChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleSigninSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.validate(t)&&X.signin(t).then(function(e){localStorage.setItem("egt",e.data.token);var t=v()(e.data.token);oe(e.data.token),a.props.setUser(t)}).then(function(){return a.props.history.push("/exchangagram-frontend/home/feed")}).catch(function(e){console.log(e),a.handleIncorrectInputs()})},a.validate=function(e){var t={},n=!0;return e.username?e.username.length<2?(n=!1,t.username="*Please re-enter your username."):e.username.length>30?(n=!1,t.username="*Please re-enter your username."):/^[A-Z0-9_-]{3,30}$/i.test(e.username)||(n=!1,t.username="*Please re-enter your username."):(n=!1,t.username="*Please enter your username."),e.password?e.password.length<8&&(n=!1,t.password="*Please re-enter password"):(n=!1,t.password="*Password is required"),a.setState({errors:t}),n},a.handleIncorrectInputs=function(){a.setState({errors:{invalidCredentials:"Incorrect username or password"}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"SignInForm__root"},r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleSigninChange,name:"username",type:"text",placeholder:"Username",className:"SignInForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.username),r.a.createElement("div",{className:"errorMsg"},this.state.errors.invalidCredentials)),r.a.createElement("fieldset",null,r.a.createElement("input",{onChange:this.handleSigninChange,name:"password",type:"password",placeholder:"Password",className:"SignInForm__input"}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.password),r.a.createElement("div",{className:"errorMsg"},this.state.errors.invalidCredentials)),r.a.createElement("button",{onClick:this.handleSigninSubmit,className:"SignInForm__button",type:"submit"},"Submit"))}}]),t}(n.Component),pe=Object(f.a)(me),de=(a(103),function(e){return r.a.createElement("div",{className:"sign-in__root container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns offset-by-three"},r.a.createElement("div",{className:"SignIn__form-wrapper"},r.a.createElement("h1",null,"Sign In!!!"),r.a.createElement(pe,{setUser:e.setUser}),r.a.createElement(le,null),r.a.createElement(L.a,{className:"signIn__link",to:"/exchangagram-frontend/signup"},r.a.createElement("h4",null,"sign up"))))))}),he=(a(105),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,user:{}},a.componentDidMount=function(){if(null===localStorage.getItem("egt"))a.setState({isLoggedIn:!1}),a.props.history.push("/exchangagram-frontend/");else{var e=v()(localStorage.getItem("egt"));oe(localStorage.getItem("egt")),a.setState({isLoggedIn:!0,user:e})}},a.setUser=function(e){a.setState({user:e,isLoggedIn:!0})},a.handleLogout=function(){localStorage.removeItem("egt"),a.setState({isLoggedIn:!1,user:{}}),a.props.history.push("/exchangagram-frontend/")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"MainLayout__root"},r.a.createElement(E,{isLoggedIn:this.state.isLoggedIn,user:this.state.user}),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/exchangagram-frontend/",render:function(t){return r.a.createElement(de,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/exchangagram-frontend/signup",render:function(t){return r.a.createElement(ue,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{path:"/exchangagram-frontend/home",render:function(t){return r.a.createElement(se,{user:e.state.user,setUser:e.setUser,handleLogout:e.handleLogout})}})))}}]),t}(n.Component)),fe=Object(f.a)(he);a(107),a(109),a(111),a(113);o.a.render(r.a.createElement(i.a,null,r.a.createElement(fe,null)),document.getElementById("root"))},30:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){e.exports=a(115)},41:function(e,t,a){},48:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[34,2,1]]]);
//# sourceMappingURL=main.69a2c457.chunk.js.map