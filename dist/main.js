new(function(){function t(t){this.addTodo=document.querySelector(t.inputhook),this.createTodo=document.querySelector(t.submit),this.addListTarget=document.querySelector(t.showTarget),this.modalState=!1,this.InputTodos(),this.deleteTodoList(),this.editTodoList(),this.setStoredTodos()}return t.prototype.InputTodos=function(){var t=this;this.addTodo.addEventListener("change",(function(e){e.preventDefault();var o=e.target.value;t.addTodoList(o)}))},t.prototype.addTodoList=function(t){var e=this;this.createTodo.addEventListener("click",(function(o){if(o.preventDefault(),!t.trim())return null;var n='\n                    <div class="list">\n                        <p class="content">'+t+'</p>\n                        <div class="menu">\n                            <button class="editBtn btn">編集</button>\n                            <button class="deleteBtn btn">削除</button>\n                        </div>\n                    </div>\n                    ';e.addListTarget.insertAdjacentHTML("beforeend",n),e.addTodo.value="",t="",e.deleteTodoList(),e.editTodoList(),e.storeLocalStorage()}))},t.prototype.deleteTodoList=function(){var t=this,e=document.querySelectorAll(".list");document.querySelectorAll(".deleteBtn").forEach((function(o,n){o.addEventListener("click",(function(){e[n].remove(),t.storeLocalStorage()}))}))},t.prototype.editTodoList=function(){var t=this,e=document.querySelector(".modal-overlay"),o=document.querySelectorAll(".editBtn"),n=document.querySelectorAll(".content");o.forEach((function(o,s){o.addEventListener("click",(function(o){o.preventDefault();var d=n[s],i=s,a=document.querySelector(".modal");a.classList.remove("js-is-close"),a.classList.add("js-is-open"),e.classList.remove("js-modal-off"),t.editTodoModalOpen(d,i,a,e)}))}))},t.prototype.editTodoModalOpen=function(t,e,o,n){var s=this;this.modalState=!0;var d=t.textContent,i='\n            <div class="modal_inner">\n                <input class="editNow" type="text" value='+d+'><p class="none">'+d+'</p>\n                <div>\n                    <button class="updateBtn">更新</button>\n                </div>\n            </div>\n        ';o.innerHTML=i;var a=document.querySelector(".editNow"),r=document.querySelector(".updateBtn");a.addEventListener("change",(function(e){t.textContent=e.target.value,s.storeLocalStorage()})),r.addEventListener("click",(function(){a.value="",o.classList.add("js-is-close"),o.classList.remove("js-is-open"),n.classList.add("js-modal-off")}))},t.prototype.storeLocalStorage=function(){var t=[];document.querySelectorAll(".list p").forEach((function(e){t.push(e.textContent)})),window.localStorage.setItem("tasks",JSON.stringify(t))},t.prototype.setStoredTodos=function(){var t=this;JSON.parse(window.localStorage.getItem("tasks")).map((function(e){var o='\n                <div class="list">\n                    <p class="content">'+e+'</p>\n                    <div class="menu">\n                        <button class="editBtn btn">編集</button>\n                        <button class="deleteBtn btn">削除</button>\n                    </div>\n                </div>\n            ';t.addListTarget.insertAdjacentHTML("beforeend",o),t.deleteTodoList(),t.editTodoList()}))},t}())({inputhook:".addTodo",submit:".submit",showTarget:".todolist"});