import React, { useState, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import footerStyle from '~/styles/Footer.module.css'
import { faEnvelope, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const [footerExpandHidden, setFooterExpandHidden] = useState(true)
  const { height } = useSpring({
    from: { height: '30px' },
    to: { height: footerExpandHidden ? '30px' : '80px' },
    config: { tension: 500, friction: 20 }
  })

  const footerToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    setFooterExpandHidden(!footerExpandHidden)
  }

  return (
    <animated.div 
      style={{
        height,
        backgroundColor: 'rgba(65, 192, 253, 0.3)',
        borderTop: '2px solid #00c8ff',
        cursor: 'pointer',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#eee'
      }}
      onMouseEnter={e => footerToggle(e)}
      onMouseLeave={e => footerToggle(e)}
    >
      {footerExpandHidden ? <p className={footerStyle.hover_text_show}>^</p> : ''}
      {!footerExpandHidden ?
        <div>
          <div className={footerStyle.sources_container}>
            <Link href='https://github.com/victorsh'><FontAwesomeIcon style={{width: '50px', height: '50px', color: 'white'}} icon={faGithubSquare} /></Link>
            <Link href='https://www.linkedin.com/in/victor-shahbazian/'><FontAwesomeIcon style={{width: '50px', height: '50px', color: 'white'}} icon={faLinkedin} /></Link>
            <Link href='victor.sh.91@gmail.com'><FontAwesomeIcon style={{width: '50px', height: '50px', color: 'white'}} icon={faEnvelopeSquare} /></Link>
          </div>
        </div> : ''}
    </animated.div>
  )
}
