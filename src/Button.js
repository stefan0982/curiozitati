import React from 'react'
import './button.css'

export const Button = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.curiozitati"
        target="_blank"
        rel="noreferrer"
      >
        <div className="download android">
          <i className="fa fa fa-android fa-3x" />
          <span className="df">Instalează aplicația</span>
          <span className="dfn">Google Play</span>
        </div>
      </a>
      <a
        href="https://www.instagram.com/curiozitati.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="download android">
          <span className="df">Urmărește-ne pe</span>
          <span className="dfn">Instagram</span>
          <i className="fa fa fa-instagram fa-3x" />
        </div>
      </a>
      {/*<div className="download apple">*/ }
      {/*  <i className="fa fa fa-apple fa-3x"/>*/ }
      {/*  <span className="df">In curand si pe</span>*/ }
      {/*  <span className="dfn">App Store</span>*/ }
      {/*</div>*/ }
    </>
  )
}