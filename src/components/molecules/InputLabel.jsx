import React from 'react'
import InputSelect from './inputSelect'
import Input from '../atoms/Input'

const InputLabel = ({ label, variantInput, variant, type, placeholder, className, onChange }) => {
  return (
    <div className='flex flex-col gap-1.5'>
        <span className='text-h4 font-medium font-inter'>{ label }</span>
        {variantInput == "select" && (
            <InputSelect variant={variant} placeholder={placeholder} />
        )}
        {variantInput == "input" && (
            <Input variant={variant} placeholder={placeholder} type={type} className={className} onChange={onChange} />
        )}
    </div>
  )
}

export default InputLabel