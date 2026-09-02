document.addEventListener('DOMContentLoaded', () => {
  const user = AL.getUser();
  if(!user){
    location.href = 'login.html?next=profile.html';
    return;
  }

  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileAvatar').textContent = AL.initials(user.name);
  document.getElementById('settingName').value = user.name;
  document.getElementById('settingEmail').value = user.email;

  const ownedIds = AL.getOwned();
  const ownedList = document.getElementById('ownedList');
  if(ownedIds.length === 0){
    ownedList.innerHTML = `<p style="color:var(--text-muted);font-size:.88rem;">You haven't bought any papers yet — check the <a href="papers.html" style="color:var(--blue);font-weight:700;">papers page</a>.</p>`;
  } else {
    ownedList.innerHTML = ownedIds.map(id=>`
      <div class="owned-row">
        <span>${id}</span>
        <span class="tag2">Owned</span>
      </div>`).join('');
  }

  /* settings tabs */
  const tabs = document.querySelectorAll('.settings-tab');
  const panels = document.querySelectorAll('.settings-panel');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });

  const settingsForm = document.getElementById('settingsForm');
  settingsForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('settingName').value.trim();
    const email = document.getElementById('settingEmail').value.trim();
    if(name && email){
      AL.login(name, email);
      document.getElementById('settingsMsg').textContent = 'Saved!';
      document.getElementById('settingsMsg').className = 'form-msg show ok';
      document.getElementById('profileName').textContent = name;
      document.getElementById('profileEmail').textContent = email;
      document.getElementById('profileAvatar').textContent = AL.initials(name);
    }
  });
});