import Image from 'next/image';
import styles from '../../styles/Hero.module.css'; 

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Halo, Foodies</h2>
        <p className={styles.heroSubtitle}>Find The Best Cooking Recipes.</p>
        <a href="/" className={styles.heroBtn}>Find Now</a>
      </div>
      <Image
        src="/hero.jpg"
        alt="Gambar Meja yang penuh makanan"
        layout="fill"
        objectFit="cover"
        className={styles.heroImage}
      />
    </div>
  );
};

export default Hero;


/*
const Hero = () => {
    return (
        <div className="hero-content">
            <div className="hero-title">
                <h2>Hallo, Chef</h2>
                <p>Find The Best Cooking Recipes</p>
            </div>            
        </div>
    );
  }
  
export default Hero;
*/