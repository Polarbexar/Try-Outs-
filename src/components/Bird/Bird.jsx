import mario from './mario.png'

export default function Bird({birdPosition}) {
  
  return (
   <div id="Bird"
   style={{
      position:'relative',
      left: '50%',
      backgroundColor:'red',
      backgroundImage: `url(${mario})`,
      borderRadius:'50%',
      height: '20px',
      width: '20px',
      top: birdPosition}} >
  </div>

  )
}
