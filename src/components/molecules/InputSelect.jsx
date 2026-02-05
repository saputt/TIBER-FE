import React from 'react'
import Input from '../atoms/Input'
import Select from '../atoms/Select'

const InputSelect = ({ variant, placeholder }) => {
  return (
    <div className="flex justify-center items-center pr-2 border border-gray-400 rounded-lg focus:outline-black">
      <Input
        type="text"
        variant={ variant }
        size="full"
        placeholder={ placeholder }
        className="focus:outline-0"
      />
      <Select size="sm" />
    </div>
  )
}

export default InputSelect