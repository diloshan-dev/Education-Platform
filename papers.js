/* ============================================================
   PAPERS CATALOGUE
   NOTE: titles below were read off your folder screenshot
   (D:\A_L). File paths point to assets/pdfs/<file> — copy your
   actual PDFs into that folder with matching names, or edit the
   "file" value below to point wherever you keep them.
   Add/remove entries freely; everything else wires up automatically.
   ============================================================ */

const PAPERS = [
  // ---------------- ICT ----------------
  { id:'ict-01', subject:'ICT', title:'2025 ICT — Paper I (Sinhala)', type:'Structured', price:350, file:'251135 - ICT - Paper I (S).pdf' },
  { id:'ict-02', subject:'ICT', title:'2025 ICT — Paper II (Sinhala)', type:'Essay', price:350, file:'251135 - ICT - Paper II (S).pdf' },
  { id:'ict-03', subject:'ICT', title:'2025 IT — With Answers', type:'MCQ + Answers', price:300, file:'2025-IT-with.answers.pdf' },
  { id:'ict-04', subject:'ICT', title:'2021 AL Common General Test — Past Papers', type:'Past Paper', price:250, file:'2021-AL-Common-General-Test-Past-Pap...pdf' },
  { id:'ict-05', subject:'ICT', title:'AL Network Essay — Sinhala', type:'Essay', price:200, file:'AL_network_essay_Sinhala.pdf' },
  { id:'ict-06', subject:'ICT', title:'ICT AL Unitwise Tutorial', type:'Tutorial', price:0, file:'ICT AL unitwise tutorial.pdf' },
  { id:'ict-07', subject:'ICT', title:'MCQ Bank — Sinhala', type:'MCQ', price:250, file:'MCQ_Sinhala.pdf' },
  { id:'ict-08', subject:'ICT', title:'NWP Practice Test — MCQ + Structured (Sinhala)', type:'Practice Test', price:300, file:'NWP_Practice_Test_MCQ_Structured_Sinhala.pdf' },
  { id:'ict-09', subject:'ICT', title:'NWP Practice Paper Part 2 — Sinhala', type:'Practice Paper', price:300, file:'NWP_Practice_Paper_Part_2_Sinhala.pdf' },
  { id:'ict-10', subject:'ICT', title:'2025 Practice Paper — MCQ (Sinhala)', type:'MCQ', price:250, file:'practice_paper_MCQs_2025.pdf' },
  { id:'ict-11', subject:'ICT', title:'Practice Paper — Answer Key', type:'Answer Key', price:0, file:'practice_paper_Answer_key.pdf' },
  { id:'ict-12', subject:'ICT', title:'Python Practice — Part A (Sinhala)', type:'Practice', price:200, file:'python_paper_Part_A_sinhala.pdf' },
  { id:'ict-13', subject:'ICT', title:'Python Practice — Part B (Sinhala)', type:'Practice', price:200, file:'python_paper_Part_B_sinhala.pdf' },
  { id:'ict-14', subject:'ICT', title:'Unit 3 & 4 — Structure', type:'Structured', price:200, file:'Unit 3&4 structure -SM.pdf' },
  { id:'ict-15', subject:'ICT', title:'Unit 3 & 4 — MCQ', type:'MCQ', price:200, file:'Unit 3&4 mcq-SM.pdf' },
  { id:'ict-16', subject:'ICT', title:'2026 Physical Students — Exam Discussion', type:'Discussion Pack', price:400, file:'2026 Pysical Students Exam Di...pdf' },
  { id:'ict-17', subject:'ICT', title:'2026 Master Revision Paper Pack', type:'Revision Pack', price:450, file:'2026 Master Revision Paper Pac...pdf' },

  // ---------------- ET (Engineering Technology) ----------------
  { id:'et-01', subject:'ET', title:'2025 Engineering Technology Paper', type:'Full Paper', price:350, file:'2025-Engineering-Technology.pdf' },
  { id:'et-02', subject:'ET', title:'Engineering Book 2 — Basic Automobile', type:'Reference Book', price:500, file:'Engineering Book 2 (Basic Automo...pdf' },
  { id:'et-03', subject:'ET', title:'Grade 12 — Engineering Technology (2nd Term)', type:'Term Test', price:250, file:'Grade-12-Engineering-Technology-2nd-Ter...pdf' },
  { id:'et-04', subject:'ET', title:'Structure & Essay — Unit Pack', type:'Structured + Essay', price:300, file:'12 term final Essay and Structure...pdf' },

  // ---------------- SFT (Science for Technology) ----------------
  { id:'sft-01', subject:'SFT', title:'SFT — Full Subject Notes', type:'Notes', price:0, file:'SFT.pdf' },
  { id:'sft-02', subject:'SFT', title:'SFT Lesson 1 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 1- techlogiclk.com.pdf' },
  { id:'sft-03', subject:'SFT', title:'SFT Lesson 4 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 4- techlogiclk.com.pdf' },
  { id:'sft-04', subject:'SFT', title:'SFT Lesson 5 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 5- techlogiclk.com.pdf' },
  { id:'sft-05', subject:'SFT', title:'SFT Lesson 9 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 9- techlogiclk.com.pdf' },
  { id:'sft-06', subject:'SFT', title:'SFT Lesson 10 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 10- techlogiclk.com.pdf' },
  { id:'sft-07', subject:'SFT', title:'SFT Lesson 11 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 11- techlogiclk.com.pdf' },
  { id:'sft-08', subject:'SFT', title:'SFT Lesson 14 — techlogiclk.com', type:'Lesson', price:150, file:'SFT Lesson 14- techlogiclk.com.pdf' },
  { id:'sft-09', subject:'SFT', title:'Science for Technology — Grade 12 Southern Province', type:'Term Test', price:250, file:'Grade-12-Science-For-Technology-2nd-Ter...pdf' },
  { id:'sft-10', subject:'SFT', title:'Science for Technology — Grade 13 Southern Province', type:'Term Test', price:250, file:'southern-province-grade-13-science-for-t...pdf' },

  // ---------------- GIT (General Information Technology) ----------------
  { id:'git-01', subject:'GIT', title:'Grade 12 — ICT/GIT Term Test', type:'Term Test', price:250, file:'Grade 12_ICT_iii Term test ANSWER...pdf' },
  { id:'git-02', subject:'GIT', title:'Grade 13 Southern Province — ICT 1st Term', type:'Term Test', price:250, file:'Southern-Province-Grade-13-ICT-1st-Ter...pdf' },
  { id:'git-03', subject:'GIT', title:'Grade 12 — Information & Communication Tech', type:'Notes', price:200, file:'Grade-12-Information-And-Communicati...pdf' },

  // ---------------- GK (General Knowledge) ----------------
  { id:'gk-01', subject:'GK', title:'2025 Science for Technology — Marking Scheme', type:'Marking Scheme', price:150, file:'2025 Et marking.pdf' },
  { id:'gk-02', subject:'GK', title:'2025 Science-for-Technology Exam', type:'Full Paper', price:300, file:'2025-Science-for-Technology.pdf' },
  { id:'gk-03', subject:'GK', title:'DBMS — Sinhala Notes', type:'Notes', price:150, file:'DBMS_Sinhala.pdf' },
  { id:'gk-04', subject:'GK', title:'2026 UVA IT Answers — MCQ & Structure', type:'MCQ + Structure', price:300, file:'2026uva_IT_Answers_MCQ_&_Structure...pdf' },

  // ---------------- GE (General English / Essay) ----------------
  { id:'ge-01', subject:'GE', title:'Structure Essay — Sinhala', type:'Essay', price:150, file:'Stru_Essay_Sinhala.pdf' },
  { id:'ge-02', subject:'GE', title:'sALSyl — SFT Reference', type:'Reference', price:150, file:'sALSyl SFT.pdf' },
];

const SUBJECTS = ['ALL','SFT','ET','ICT','GK','GE','GIT'];

document.addEventListener('DOMContentLoaded', () => {
  const tabsWrap = document.getElementById('subjectTabs');
  const grid = document.getElementById('papersGrid');
  if(!tabsWrap || !grid) return;

  tabsWrap.innerHTML = SUBJECTS.map((s,i)=>
    `<button class="subject-tab ${i===0?'active':''}" data-subject="${s}">${s === 'ALL' ? 'All subjects' : s}</button>`
  ).join('');

  function render(subject){
    const owned = AL.getOwned();
    const list = subject === 'ALL' ? PAPERS : PAPERS.filter(p=>p.subject===subject);
    if(!list.length){
      grid.innerHTML = `<div class="empty-state">No papers under this subject yet — add some in js/papers.js.</div>`;
      return;
    }
    grid.innerHTML = list.map(p=>{
      const isOwned = owned.includes(p.id);
      return `
      <div class="paper-card">
        <div class="icon">${p.subject}</div>
        <h3>${p.title}</h3>
        <div class="meta">
          <span>📄 ${p.type}</span>
        </div>
        <div class="paper-foot">
          <span class="price ${p.price===0?'free':''}">${p.price===0?'Free':'Rs. '+p.price}</span>
          <button class="buy-btn ${isOwned?'owned':''}" data-id="${p.id}">
            ${isOwned ? 'Open PDF' : (p.price===0 ? 'Get free' : 'Buy now')}
          </button>
        </div>
      </div>`;
    }).join('');

    grid.querySelectorAll('.buy-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const paper = PAPERS.find(p=>p.id===btn.dataset.id);
        const user = AL.getUser();
        if(!user){
          window.location.href = 'login.html?next=papers.html';
          return;
        }
        if(!AL.getOwned().includes(paper.id)){
          AL.addOwned(paper.id);
        }
        window.open('assets/pdfs/' + paper.file, '_blank');
        render(document.querySelector('.subject-tab.active').dataset.subject);
      });
    });
  }

  tabsWrap.addEventListener('click', (e)=>{
    const btn = e.target.closest('.subject-tab');
    if(!btn) return;
    tabsWrap.querySelectorAll('.subject-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.subject);
  });

  render('ALL');
});