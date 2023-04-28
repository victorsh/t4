
interface LinksProps {
  switchScene: (scene: number) => void
}
const Links = (props: LinksProps) => {
  return (
    <div className='text-white z-10'>
      <button onClick={() => props.switchScene(0)} className='m-2'>Basic</button>
      <button onClick={() => props.switchScene(1)} className='m-2'>Physics</button>
    </div>
  )
}

export default Links
