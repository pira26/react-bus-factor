class Slider extends React.Component {
  // S'execute quand le HTML du component est entièrement chargé dans la page
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({full_width: true});
  }

  // Le HTML qui sera incorporé à chaque fois que <Slider /> est appelé
  render () {
    const styles = {
    height: '400px',
    width: '700px',
    backgroundSize: 'cover'
    }
    return (
      <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center"></div>
        <div className="carousel-item white-text" href="#one!">
        <img src="http://lorempixel.com/250/250/nature/1" style={styles} />
          <h2>First Panel</h2>
          <p className="white-text">This is your first panel</p>
        </div>
        <div className="carousel-item white-text" href="#two!">
          <img src="http://lorempixel.com/250/250/nature/2" style={styles} />
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item white-text" href="#three!">
          <img src="http://lorempixel.com/250/250/nature/3" style={styles} />
          <h2>Third Panel</h2>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item white-text" href="#four!">
          <img src="http://lorempixel.com/250/250/nature/4" style={styles} />
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
          <img src="ttp://lorempixel.com/250/250/nature/5" style={styles} />
        </div>
      </div>
    )
  }
}
// Export sidenav
export default Slider;