import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef   = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor   = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 6 + 'px'
      cursor.style.top  = mouseY - 6 + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.12
      followerY += (mouseY - followerY - 18) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top  = followerY + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      cursor.style.transform   = 'scale(2)'
      follower.style.transform = 'scale(1.5)'
      follower.style.borderColor = 'rgba(0,255,136,0.8)'
    }
    const onMouseLeaveLink = () => {
      cursor.style.transform   = 'scale(1)'
      follower.style.transform = 'scale(1)'
      follower.style.borderColor = 'rgba(0,255,136,0.4)'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef}   className="cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
    </>
  )
}
