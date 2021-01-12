import React    from 'react'
import { Link } from 'gatsby'

const Error = () => {
  return (
    <>
    <div style={ {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20
    } }>
      Ups, ai nimerit într-un loc pustiu
    </div>
      <Link to="/">
        Mergi înapoi
      </Link>
    </>
  )
}

export default Error
