import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import Hello from './Hello'
import Welcome from './Welcome'
import ChooseLanguage from './ChooseLanguage'


function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <ChooseLanguage />
        <Hello />
        <Welcome />
      </Suspense>
    </div>
  )
}

export default App;
