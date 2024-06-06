import Header from './Header'
import Footer from './Footer'


const options = {
  draggable: 'is-draggable',
  dragging: 'is-dragging',
  snapped: 'is-snapped',
  inView: 'is-in-view'
};
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
export default function Home() {
  const OPTIONS = { loop: true }

  return (
    <>
    <Header/>
    
    
    <EmblaCarousel options={OPTIONS} />

    <button onClick = {() => {
      alert("hello");
    }}
    >Click me
    </button>


  <Footer/>
    </>
  )
}