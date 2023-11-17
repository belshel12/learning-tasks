const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const{email:t,password:n}=l.currentTarget.elements;if(""===n.value||""===t.value)return alert("All fields must be filled!");const r={email:t.value,password:n.value};console.log(r),e.reset()}));
//# sourceMappingURL=task-08.2d92a88e.js.map
