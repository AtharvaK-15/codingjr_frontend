import book from '../src/assets/book.svg'
import globe from '../src/assets/globe.svg'
import '../src/section4.css';

const Section4 = () => {
  return (
    <div className='section4'>
        {/* import these images here */}
        <img src={book} alt="book" style={{width:"10%"}}/>
            <h1>Our <span className="highlight">Case Studies</span></h1>
        <img src={globe} alt="globe" style={{width:"10%"}}/>
    </div>
  )
}

export default Section4;
