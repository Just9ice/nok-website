import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Link href="/" className={styles.brandLink}>
            <Image src="/NOK-Inc-Company-LogoFinal-02-1.webp" alt="Nok Inc. Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
          </Link>
          <p className={styles.description}>
            Powering the transition to sustainable energy and modern mobility for a cleaner, smarter future.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>Company</h4>
          <Link href="/about-us" className={styles.link}>About Us</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/product" className={styles.link}>Product</Link>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>Legal & More</h4>
          <Link href="/financing" className={styles.link}>Financing</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Nok Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
