
import Image from 'next/image';
import first from '@/public/assets/images/service/plumber_hero.jpg';
import HeaderV1 from '@/src/components/header/HeaderV1';
import styles from'./Hero.module.css'

const Hero = ({ page, description }) => {
  return (
    <section className={`pb-5 position-relative ${styles.aboutUs}`}>
      <HeaderV1 />
      <div className={`${styles.backgroundOverlay}`}></div>
      <div style={{ zIndex: 1, position: 'relative', marginTop: '10rem' }}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <div className={styles.trapezium}>
              <p className="mb-2S fw-medium">Home &gt; <span className='text-black'>{page}</span></p>
              <h2 className="display-5 fw-bold">{page}</h2>
              <p className="lead">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
