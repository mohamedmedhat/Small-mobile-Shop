import  { Metadata } from 'next'

export const metadata :Metadata = {
  title: 'Shopo - about',
  description: 'simple shop gives articles about some products',
}

export default function About() {
  return (
    <div>
      <h1>Hello from about</h1>
    </div>
  )
}
