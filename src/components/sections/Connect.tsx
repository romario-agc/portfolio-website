import { stg } from '@/lib/stg';
import styles from './Connect.module.css';

const SOCIAL = [
  { l: 'LinkedIn', u: 'https://linkedin.com/in/romariocoffie' },
  { l: 'Dribbble', u: 'https://dribbble.com/romariocoffie' },
  { l: 'GitHub', u: 'https://github.com/romariocoffie' },
];

export function Connect() {
  return (
    <div className={`s12 ${styles.section}`}>
      <div className={styles.full}>
        <div style={stg(0)}><span className="lb" style={{ display: 'block', marginBottom: 10 }}>Get in Touch</span></div>
        <h2 className="st" style={{ ...stg(1), fontSize: 42, marginBottom: 8 }}>Let&apos;s Work Together</h2>
        <p className="bs" style={{ ...stg(2), fontSize: 18, maxWidth: 540, marginBottom: 20 }}>
          Available for full-time roles, contract work, and consulting in product design, UX engineering, and design systems.
        </p>
      </div>

      {/* Form */}
      <div style={stg(3)} className={styles.formCol}>
        <div className={styles.formCard}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input type="text" className={styles.input} placeholder="Your name" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} placeholder="you@email.com" />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Subject</label>
            <input type="text" className={styles.input} placeholder="Project inquiry" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} rows={5} placeholder="Tell me about your project..." />
          </div>
          <button type="button" className={styles.submit}>Send Message</button>
        </div>
      </div>

      {/* Contact info */}
      <div style={stg(4)} className={styles.infoCol}>
        <div className={styles.infoBlock}>
          <span className="lb" style={{ display: 'block', marginBottom: 14 }}>Contact</span>
          <a href="mailto:Romario.agc@gmail.com" className={styles.contactLink}>Romario.agc@gmail.com</a>
          <a href="tel:+17725298029" className={styles.contactLink}>+1 (772) 529-8029</a>
        </div>

        <div className={styles.infoBlock}>
          <span className="lb" style={{ display: 'block', marginBottom: 14 }}>Social</span>
          <div className={styles.socialList}>
            {SOCIAL.map((x) => (
              <a key={x.l} href={x.u} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {x.l} <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.availCard}>
          <span className={styles.availLabel}>Availability</span>
          <div className={styles.availStatus}>
            <div className={styles.greenDot} />
            <span className={styles.availText}>Available for new projects</span>
          </div>
          <span className={styles.availDesc}>Based in South Florida · Open to remote and hybrid roles nationwide.</span>
        </div>
      </div>

      {/* Footer line */}
      <div style={stg(5)} className={styles.footerLine}>
        <span className={styles.footerText}>© 2026 Romario Coffie</span>
        <span className={styles.footerText}>SAFe® Certified Product Developer</span>
      </div>
    </div>
  );
}
