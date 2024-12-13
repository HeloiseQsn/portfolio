import './sliderItem.scss'

function SliderItem({ children }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      {children}
    </div>
  )
}

export default SliderItem
