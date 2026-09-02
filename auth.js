document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const params = new URLSearchParams(location.search);
  const next = params.get('next') || 'index.html';

  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPass').value;
      const msg = document.getElementById('loginMsg');
      if(!email || !pass){
        msg.textContent = 'Enter your email and password.';
        msg.className = 'form-msg show err';
        return;
      }
      const name = email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      AL.login(name, email);
      msg.textContent = 'Welcome back! Redirecting…';
      msg.className = 'form-msg show ok';
      setTimeout(()=> location.href = next, 700);
    });
  }

  if(signupForm){
    signupForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const pass = document.getElementById('signupPass').value;
      const msg = document.getElementById('signupMsg');
      if(!name || !email || pass.length < 4){
        msg.textContent = 'Fill in every field (password must be 4+ characters).';
        msg.className = 'form-msg show err';
        return;
      }
      AL.login(name, email);
      msg.textContent = 'Account created! Redirecting…';
      msg.className = 'form-msg show ok';
      setTimeout(()=> location.href = next, 700);
    });
  }
});