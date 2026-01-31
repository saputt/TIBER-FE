import React from 'react'

const Card = ({
    children,
    backgroundColor = '#FFFFFF',
    width = '100%',
    height = 'fit-content',
    radiusBorder = '12px',
    className,
    boxShadow = '0px 1px 4px 0px #00000040',
    padding = '10px 20px'
}) => {
  return (
    <div 
        id='streak' 
        name='streak'
        className={`${className}`}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderRadius: radiusBorder,
          boxShadow: boxShadow,
          padding: padding
        }}
    >
        { children }
    </div>
  )
}

export default Card