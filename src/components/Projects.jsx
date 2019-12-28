import React from 'react'
import SideTag from './SideTag'
import { useLayoutEffect, useState } from 'react'
import { useRef } from 'react';

const Projects = () => {
  const [height, setHeight] = useState(null);
  const ref = useRef(null)
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [height])
  return (
    <section ref={ref} className="Projects">
      <SideTag zIndex="3" height={height} name="projects" side="left"/>
      Hello
    </section>
  )
}

export default Projects;