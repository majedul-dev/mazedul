
import React from 'react'

const Project = ({ params }: { params: { slug: string } }) => {
  return (
    <div>Project: {params.slug}</div>
  )
}

export default Project