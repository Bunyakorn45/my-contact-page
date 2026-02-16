/* ╔══════════════════════════════════════════╗
   ║          PARTICLES BACKGROUND            ║
   ╚════��═════════════════════════════════════╝ */
;(function () {
  const canvas = document.getElementById('particles')
  const ctx = canvas.getContext('2d')
  let w, h, particles

  function resize () {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

  class Dot {
    constructor () { this.reset() }
    reset () {
      this.x = Math.random() * w
      this.y = Math.random() * h
      this.r = Math.random() * 2 + 0.5
      this.dx = (Math.random() - 0.5) * 0.4
      this.dy = (Math.random() - 0.5) * 0.4
      this.alpha = Math.random() * 0.5 + 0.15
    }
    update () {
      this.x += this.dx
      this.y += this.dy
      if (this.x < 0 || this.x > w) this.dx *= -1
      if (this.y < 0 || this.y > h) this.dy *= -1
    }
    draw () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(108,99,255,${this.alpha})`
      ctx.fill()
    }
  }

  function init () {
    const count = Math.min(Math.floor((w * h) / 8000), 120)
    particles = Array.from({ length: count }, () => new Dot())
  }
  init()

  function connectDots () {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = dx * dx + dy * dy
        if (dist < 18000) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 18000)})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }
  }

  function animate () {
    ctx.clearRect(0, 0, w, h)
    particles.forEach(p => { p.update(); p.draw() })
    connectDots()
    requestAnimationFrame(animate)
  }
  animate()
  window.addEventListener('resize', init)
})()

/* ╔══════════════════════════════════════════╗
   ║          TYPED TEXT EFFECT               ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const words = ['Web Developer', 'UI / UX Designer', 'Frontend Enthusiast', 'Creative Coder']
  const el = document.getElementById('typed')
  let wordIdx = 0, charIdx = 0, deleting = false

  function type () {
    const current = words[wordIdx]
    el.textContent = current.substring(0, charIdx)

    if (!deleting) {
      charIdx++
      if (charIdx > current.length) { deleting = true; return setTimeout(type, 1800) }
    } else {
      charIdx--
      if (charIdx < 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; return setTimeout(type, 400) }
    }
    setTimeout(type, deleting ? 40 : 80)
  }
  type()
})()

/* ╔══════════════════════════════════════════╗
   ║          NAVBAR SCROLL & TOGGLE          ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const nav = document.getElementById('navbar')
  const toggle = document.getElementById('navToggle')
  const links = document.querySelector('.nav-links')
  const allLinks = document.querySelectorAll('.nav-links a')

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50)
  })

  toggle.addEventListener('click', () => {
    links.classList.toggle('open')
  })

  allLinks.forEach(a => a.addEventListener('click', () => links.classList.remove('open')))

  // Active link highlight on scroll
  const sections = document.querySelectorAll('section[id]')
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120
    sections.forEach(sec => {
      const top = sec.offsetTop
      const height = sec.offsetHeight
      const id = sec.getAttribute('id')
      const link = document.querySelector(`.nav-links a[href="#${id}"]`)
      if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height)
    })
  })
})()

/* ╔══════════════════════════════════════════╗
   ║          SCROLL ANIMATIONS               ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.15 }
  )
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
})()

/* ╔══════════════════════════════════════════╗
   ║          COUNTING ANIMATION              ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const counters = document.querySelectorAll('.stat-number')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el = e.target
      const target = +el.dataset.target
      let current = 0
      const step = Math.ceil(target / 40)
      const timer = setInterval(() => {
        current += step
        if (current >= target) { current = target; clearInterval(timer) }
        el.textContent = current
      }, 30)
      observer.unobserve(el)
    })
  }, { threshold: 0.5 })
  counters.forEach(c => observer.observe(c))
})()

/* ╔══════════════════════════════════════════╗
   ║          SKILL BAR FILL                  ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const fills = document.querySelectorAll('.skill-fill')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.3 })
  fills.forEach(f => observer.observe(f))
})()

/* ╔══════════════════════════════════════════╗
   ║          CONTACT FORM (Formspree)        ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const form = document.getElementById('contactForm')
  const status = document.getElementById('formStatus')
  const btnText = form.querySelector('.btn-text')
  const btnLoad = form.querySelector('.btn-loading')

  form.addEventListener('submit', async e => {
    e.preventDefault()
    btnText.style.display = 'none'
    btnLoad.style.display = 'inline-flex'
    status.textContent = ''
    status.className = 'form-status'

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        status.textContent = '✅ ส่งเรียบร้อย ขอบคุณครับ!'
        status.classList.add('success')
        form.reset()
      } else {
        throw new Error('fail')
      }
    } catch {
      status.textContent = '❌ เกิดข้อผิดพลาด ลองใหม่อีกครั้ง'
      status.classList.add('error')
    } finally {
      btnText.style.display = 'inline-flex'
      btnLoad.style.display = 'none'
    }
  })
})()

/* ╔══════════════════════════════════════════╗
   ║          BACK TO TOP                     ║
   ╚══════════════════════════════════════════╝ */
;(function () {
  const btn = document.getElementById('backToTop')
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400)
  })
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})()
