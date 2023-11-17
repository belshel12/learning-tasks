!function(){var e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();var r=l.currentTarget.elements,t=r.email,a=r.password;if(""===a.value||""===t.value)return alert("All fields must be filled!");var n={email:t.value,password:a.value};console.log(n),e.reset()}))}();
//# sourceMappingURL=task-08.90372531.js.map
