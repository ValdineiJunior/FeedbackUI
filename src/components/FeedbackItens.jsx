import React from 'react'
import { useState } from 'react'

export function FeedbackItens() {

  const [rating, setRating] = useState(10)
  const [text, setText] = useState('This is an example of a feedback item')

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className="text-display">{text}</div>      
    </div>
  )
}

