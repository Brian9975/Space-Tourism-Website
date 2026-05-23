import React from 'react'
import "../animate.css"

export default function AnimateOnNavigate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   <div className='animate'>
    <main>{children}</main>
    </div>
    </>
  )
}
