import React from 'react'

const Badge = ({
    children,
    backgroundColor = '#D9D9D966',
    radiusBorder = '12px',
    textColor = '#000',
    fontSize = '8px',
    fontWeight = '400',
    className,
    width = 'fit-content'
}) => {
    return (
        <div 
            className={`flex items-center justify-center ${className}`}
            style={{
                backgroundColor: backgroundColor,
                borderRadius: radiusBorder,
                color: textColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
                width: width
            }}
        >
            { children }
        </div>
    )
}

export default Badge