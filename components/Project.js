import Description from "../components/projectCards/Description"
import Mobile from "../components/projectCards/Mobile"
import Web from "../components/projectCards/Web"

const Project = ({project}) => {
  return (
    <div 
      className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10"
    >

      <Web project={project} />

      { project.img.mobile && <Mobile project={project} /> }

      <Description project={project} />

    </div>
  )
}

export default Project