import { OvalLink } from '@/components/ui/OvalLink/OvalLink';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: 40,
    }}>
      <h1 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 120,
        fontWeight: 800,
        background: 'var(--grad)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        marginBottom: 16,
      }}>
        404
      </h1>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        color: 'var(--text)',
        marginBottom: 8,
      }}>
        Page not found
      </p>
      <p style={{
        fontFamily: 'var(--font-reading)',
        fontSize: 15,
        color: 'var(--desc)',
        marginBottom: 32,
        maxWidth: 400,
        lineHeight: 'var(--lh-relaxed)',
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <OvalLink href="/">Back to Home</OvalLink>
    </div>
  );
}
