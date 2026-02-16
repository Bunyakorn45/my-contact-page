/* ╔══════════════════════════════════════════╗
   ║          PROJECT DATA                    ║
   ╚══════════════════════════════════════════╝ */
const projectData = {
  1: {
    title: 'E-Commerce Website',
    desc: 'เว็บไซต์ร้านค้าออนไลน์เต็มรูปแบบ พร้อมระบบตะกร้าสินค้า ชำระเงินผ่านบัตรเครดิต/พร้อมเพย์ แดชบอร์ดจัดการสินค้า รองรับ responsive ทุกอุปกรณ์',
    tech: ['HTML','CSS','JavaScript','Node.js','MongoDB'],
    color: '#ff6b6b', icon: 'ph-bold ph-storefront',
    demo: '#', code: '#'
  },
  2: {
    title: 'Task Management App',
    desc: 'แอปจัดการงานแบบ Kanban board พร้อม drag & drop ย้ายงานระหว่าง column, กำหนด deadline, แจ้งเตือน และระบบสมาชิกทีม',
    tech: ['React','Node.js','Socket.io','PostgreSQL'],
    color: '#4ecdc4', icon: 'ph-bold ph-kanban',
    demo: '#', code: '#'
  },
  3: {
    title: 'Mobile Banking UI',
    desc: 'ออกแบบ UI/UX สำหรับแอปธนาคารบนมือถือ ครอบคลุม flow การโอนเงิน เติมเงิน จ่ายบิล และดูสถิติการใช้จ่าย พร้อม interactive prototype',
    tech: ['Figma','UI/UX','Prototype','Design System'],
    color: '#a29bfe', icon: 'ph-bold ph-palette',
    demo: '#', code: '#'
  },
  4: {
    title: 'Personal Blog',
    desc: 'บล็อกส่วนตัวที่สร้างด้วย Next.js รองรับ Markdown/MDX พร้อม dark mode, SEO optimized, ระบบค้นหาบทความ และ RSS feed',
    tech: ['Next.js','MDX','Tailwind CSS','Vercel'],
    color: '#fd79a8', icon: 'ph-bold ph-newspaper',
    demo: '#', code: '#'
  },
  5: {
    title: 'Realtime Chat App',
    desc: 'แอปแชทแบบเรียลไทม์ รองรับห้องสนทนาหลายห้อง ส่งรูป emoji สถานะออนไลน์ และแจ้งเตือนข้อความใหม่',
    tech: ['React','Socket.io','Express','Redis'],
    color: '#ffe66d', icon: 'ph-bold ph-chat-circle-text',
    demo: '#', code: '#'
  },
  6: {
    title: 'Food Delivery UI',
    desc: 'ออกแบบ UI แอปสั่งอาหารออนไลน์ ครอบคลุม flow การเลือกร้าน สั่งอาหาร ติดตามสถานะ และรีวิว พร้อม micro-interaction animation',
    tech: ['Figma','Prototype','Animation','User Research'],
    color: '#00cec9', icon: 'ph-bold ph-device-mobile',
    demo: '#', code: '#'
  },
  7: {
    title: 'Analytics Dashboard',
    desc: 'แดชบอร์ดแสดงข้อมูล analytics แบบ interactive พร้อมกราฟหลายรูปแบบ ฟิลเตอร์ตามช่วงเวลา และ export รายงาน PDF',
    tech: ['Vue.js','Chart.js','D3.js','Firebase'],
    color: '#6c5ce7', icon: 'ph-bold ph-chart-line-up',
    demo: '#', code: '#'
  },
  8: {
    title: 'Music Player',
    desc: 'เครื่องเล่นเพลงออนไลน์ พร้อม playlist สร้างเอง equalizer ปรับเสียง ค้นหาเพลง และแสดง waveform visualization',
    tech: ['React','Web Audio API','Spotify API'],
    color: '#e17055', icon: 'ph-bold ph-music-notes',
    demo: '#', code: '#'
  },
  9: {
    title: 'Company Website',
    desc: 'เว็บไซต์บริษัทพร้อมระบบจัดการเนื้อหา CMS, หน้า portfolio, blog, contact form และ multi-language support',
    tech: ['Laravel','Tailwind CSS','MySQL','Filament'],
    color: '#0984e3', icon: 'ph-bold ph-globe',
    demo: '#', code: '#'
  }
}

/* ╔══════════════════════════════════════════╗
   ║          PARTICLES — COLORFUL            ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d')
  let w,h,particles
  const colors=['#ff6b6b','#4ecdc4','#ffe66d','#a29bfe','#fd79a8','#00cec9']
  function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight}
  addEventListener('resize',resize);resize()
  class Dot{
    constructor(){this.reset()}
    reset(){this.x=Math.random()*w;this.y=Math.random()*h;this.r=Math.random()*2.2+.5;this.dx=(Math.random()-.5)*.45;this.dy=(Math.random()-.5)*.45;this.color=colors[Math.floor(Math.random()*colors.length)];this.alpha=Math.random()*.5+.2}
    update(){this.x+=this.dx;this.y+=this.dy;if(this.x<0||this.x>w)this.dx*=-1;if(this.y<0||this.y>h)this.dy*=-1}
    draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.globalAlpha=this.alpha;ctx.fillStyle=this.color;ctx.fill();ctx.globalAlpha=1}
  }
  function init(){const c=Math.min(Math.floor(w*h/8000),120);particles=Array.from({length:c},()=>new Dot())}
  init()
  function connect(){for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=dx*dx+dy*dy;if(d<16000){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=particles[i].color;ctx.globalAlpha=.07*(1-d/16000);ctx.lineWidth=.6;ctx.stroke();ctx.globalAlpha=1}}}
  function animate(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.update();p.draw()});connect();requestAnimationFrame(animate)}
  animate();addEventListener('resize',init)
})()

/* ╔══════════════════════════════════════════╗
   ║          TYPED TEXT                      ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const words=['ออกแบบเว็บไซต์','พัฒนาแอปพลิเคชัน','สร้างประสบการณ์ดิจิทัล','UI / UX Design'],el=document.getElementById('typed')
  let wi=0,ci=0,del=false
  function type(){
    const cur=words[wi];el.textContent=cur.substring(0,ci)
    if(!del){ci++;if(ci>cur.length){del=true;return setTimeout(type,1800)}}
    else{ci--;if(ci<0){del=false;wi=(wi+1)%words.length;return setTimeout(type,400)}}
    setTimeout(type,del?40:80)
  }
  type()
})()

/* ╔══════════════════════════════════════════╗
   ║          NAVBAR                          ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const nav=document.getElementById('navbar'),toggle=document.getElementById('navToggle'),links=document.querySelector('.nav-links'),allLinks=document.querySelectorAll('.nav-links a')
  addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50))
  toggle.addEventListener('click',()=>links.classList.toggle('open'))
  allLinks.forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))
  const sections=document.querySelectorAll('section[id]')
  addEventListener('scroll',()=>{const sy=scrollY+120;sections.forEach(s=>{const t=s.offsetTop,h=s.offsetHeight,id=s.getAttribute('id'),l=document.querySelector(`.nav-links a[href="#${id}"]`);if(l)l.classList.toggle('active',sy>=t&&sy<t+h)})})
})()

/* ╔══════════════════════════════════════════╗
   ║          SCROLL ANIMATIONS               ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')}),{threshold:.15})
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el))
})()

/* ╔══════════════════════════════════════════╗
   ║          COUNTING ANIMATION              ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const counters=document.querySelectorAll('.stat-number')
  const obs=new IntersectionObserver(e=>{e.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,t=+el.dataset.target;let c=0;const s=Math.ceil(t/40),ti=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(ti)}el.textContent=c},30);obs.unobserve(el)})},{threshold:.5})
  counters.forEach(c=>obs.observe(c))
})()

/* ╔══════════════════════════════════════════╗
   ║          SKILL BAR                       ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const fills=document.querySelectorAll('.skill-fill')
  const obs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting){en.target.style.width=en.target.dataset.width;obs.unobserve(en.target)}})},{threshold:.3})
  fills.forEach(f=>obs.observe(f))
})()

/* ╔══════════════════════════════════════════╗
   ║          PROJECT FILTER                  ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const btns=document.querySelectorAll('.filter-btn')
  const cards=document.querySelectorAll('.project-card')
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      btns.forEach(b=>b.classList.remove('active'))
      btn.classList.add('active')
      const f=btn.dataset.filter
      cards.forEach(c=>{
        if(f==='all'||c.dataset.category===f){
          c.classList.remove('hidden')
          c.style.animation='fadeIn .5s ease forwards'
        }else{
          c.classList.add('hidden')
        }
      })
    })
  })
})()

/* ╔══════════════════════════════════════════╗
   ║          PROJECT MODAL                   ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const overlay=document.getElementById('modalOverlay')
  const closeBtn=document.getElementById('modalClose')
  const mTitle=document.getElementById('modalTitle')
  const mDesc=document.getElementById('modalDesc')
  const mTech=document.getElementById('modalTech')
  const mThumb=document.getElementById('modalThumb')
  const mIcon=document.getElementById('modalIcon')
  const mDemo=document.getElementById('modalDemo')
  const mCode=document.getElementById('modalCode')

  document.querySelectorAll('.project-detail-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.dataset.project
      const p=projectData[id]
      if(!p)return
      mTitle.textContent=p.title
      mDesc.textContent=p.desc
      mTech.innerHTML=p.tech.map(t=>`<span>${t}</span>`).join('')
      mThumb.style.background=`color-mix(in srgb, ${p.color} 15%, var(--bg))`
      mIcon.className=p.icon
      mIcon.style.color=p.color
      mDemo.href=p.demo
      mCode.href=p.code
      overlay.classList.add('active')
      document.body.style.overflow='hidden'
    })
  })

  function close(){overlay.classList.remove('active');document.body.style.overflow=''}
  closeBtn.addEventListener('click',close)
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()})
  addEventListener('keydown',e=>{if(e.key==='Escape')close()})
})()

/* ╔══════════════════════════════════════════╗
   ║          BACK TO TOP                     ║
   ╚══════════════════════════════════════════╝ */
;(function(){
  const btn=document.getElementById('backToTop')
  addEventListener('scroll',()=>btn.classList.toggle('show',scrollY>400))
  btn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))
})()
