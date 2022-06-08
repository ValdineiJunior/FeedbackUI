import { useState } from 'react'
import { Header } from './components/Header'
import { FeedbackItens } from './components/FeedbackItens'
import React from 'react'
import { FeedbackData } from './components/data/FeedbackData'

export function App() {
const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header /> 
    <div className='container'>
    <FeedbackItens/>
    </div>
    </>
  )
}
