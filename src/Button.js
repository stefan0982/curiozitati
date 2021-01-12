import React    from 'react'
import './button.css'

export const Button = () => {
  return (
    <>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <div className="download android">
        <i className="fa fa fa-android fa-3x" />
        <span className="df">Instaleaza aplicatia pe</span>
        <span className="dfn">Google Play</span>
      </div>
    </a>
      {/*<div className="download apple">*/}
      {/*  <i className="fa fa fa-apple fa-3x"/>*/}
      {/*  <span className="df">In curand si pe</span>*/}
      {/*  <span className="dfn">App Store</span>*/}
      {/*</div>*/}
    </>
  )
}