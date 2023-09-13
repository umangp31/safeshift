import React from 'react'

type Props = {}

function about({}: Props) {
  return (
    <div className="my-16">
    <h1 className="mx-auto max-w-4xl font-display text-center text-5xl font-bold tracking-normal text-slate-900">
      How does this work?
    </h1>
    <img
      src="./archi.png"
      alt="safe share architechture"
      className="mt-12"
    />
  </div>
  )
}

export default about