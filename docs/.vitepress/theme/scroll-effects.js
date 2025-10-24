// 滚动效果处理
export function initScrollEffects() {
  if (typeof window === 'undefined') return

  let ticking = false

  function updateNavOnScroll() {
    const nav = document.querySelector('.VPNav')
    if (!nav) return

    const scrollY = window.scrollY
    
    if (scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
    
    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavOnScroll)
      ticking = true
    }
  }

  // 监听滚动事件
  window.addEventListener('scroll', requestTick, { passive: true })

  // 初始化检查
  updateNavOnScroll()
}

// 组件悬浮效果
export function initHoverEffects() {
  if (typeof window === 'undefined') return

  // 为组件示例添加悬浮倾斜效果
  const observer = new MutationObserver(() => {
    const demoContainers = document.querySelectorAll('.demo-container')
    
    demoContainers.forEach(container => {
      if (container.dataset.hoverInitialized) return
      
      container.dataset.hoverInitialized = 'true'
      
      container.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.transform = 'translateY(-4px) rotateX(5deg) rotateY(5deg)'
        e.currentTarget.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      })
      
      container.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)'
      })
      
      container.addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = (y - centerY) / centerY * -10
        const rotateY = (x - centerX) / centerX * 10
        
        e.currentTarget.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// 页面加载完成后初始化
export function initEffects() {
  if (typeof window === 'undefined') return

  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollEffects()
      initHoverEffects()
    })
  } else {
    initScrollEffects()
    initHoverEffects()
  }
}