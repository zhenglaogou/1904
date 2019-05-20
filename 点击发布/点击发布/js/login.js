
function Login(){
	this.btn = tools.$('#btn');
	this.container = tools.$('#container');	
	this.publicArea = tools.$('#publicArea');
}

Login.prototype = {
	constructor:Login,
	bindEvents:function(){
		this.btn.onclick = function(){
			this.popBox();
		}.bind(this);
		
		this.container.onclick = e => {
			switch(e.target.id){
				case 'publicBtn':this.publicBtnClick();break;
				case 'closeBtn':this.closeBtnClick();break;
			}
		}
		this.publicArea.oncontextmenu = ()=>{
			this.onContextMenu;
		}
//		document.onclick = function(){
//				ul.parentNode.removeChild(ul);
//			}
},
	popBox:function(){
		this.modal = document.createElement('div');
		this.modal.className = 'modal';
		document.body.appendChild(this.modal);
		//container里面添加登录框
		this.container.innerHTML = '<h4>用户登录</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label>用户名：<input id="username" type="text"></label></p><textarea id="textArea"></textarea><p><button id="publicBtn" class="loginBtn" type="button">点击发布</button></p>';
		this.textArea = tools.$('#textArea', false, this.container);
		this.username = tools.$('#username', false, this.container);
		tools.showCenter(this.container);
		this.publicArea.style.display = 'block';
	},
	
	closeBtnClick:function(){
		this.modal.remove();
		this.container.style.display = 'none';
		this.publicArea.style.display = 'none';
	},
	
	
	publicBtnClick:function(){
		let date = new Date(),
			startTime = date.getTime(),
			year = date.getFullYear(),
			month = date.getMonth()+1,
			day = date.getDate(),
			hours = date.getHours(),
			minutes = date.getMinutes();
			this.publicArea.innerHTML= `${this.username.value}在${year}年${month}月${month}号${hours}时${minutes}分发布的消息是:${this.textArea.value}`;
			this.textArea.value="";
		return false;
	},
	
	onContextMenu:function(e){
		this.ul = document.createElement("ul");
		this.ul.className = 'menu';
		this.ul.innerHTML = '<li>撤回</li>';
		this.ul.style.left = e.clientX + "px";
		this.ul.style.top = e.clientY + "px";
		this.E = e.target.parentNode;
		document.body.appendChild(this.ul);
		e.preventDefault?e.preventDefault():window.event.returnValue = false;
//		this.body.onmouseup = () => {
//			this.ul.remove();
	}
}

new Login().bindEvents();




			