import React from 'react'
import Layout from '../components/layout'

export default function Naughty() {
  return (
    <Layout>
      <div style={{ color: `red`}}>
        <h1>You've been naughty!</h1>
      </div>
    </Layout>
  )
}