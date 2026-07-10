import {
  Html, Head, Body, Container, Section, Text, Hr, Button,
} from '@react-email/components'

interface Props {
  name: string
  email: string
  tempPassword: string
  roleLabel: string
  loginUrl: string
}

export default function WelcomeEmail({ name, email, tempPassword, roleLabel, loginUrl }: Props) {
  return (
    <Html>
      <Head />
      <Body style={{ background: '#f9f9f9', fontFamily: 'Arial, sans-serif', margin: 0, padding: '40px 0' }}>
        <Container style={{ background: '#ffffff', maxWidth: 580, margin: '0 auto', border: '1px solid #e5e7eb' }}>
          <Section style={{ background: '#93328f', padding: '28px 36px' }}>
            <Text style={{ color: '#C9A227', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>
              Salem International Christian Centre
            </Text>
            <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: 'bold', margin: '8px 0 0' }}>
              Admin Access Granted
            </Text>
          </Section>
          <Section style={{ padding: '36px 36px 24px' }}>
            <Text style={{ color: '#111827', fontSize: 15, lineHeight: 1.6 }}>Hi {name},</Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75 }}>
              You have been given <strong>{roleLabel}</strong> access to the Salem admin panel.
            </Text>
            <Section style={{ background: '#f3f4f6', padding: '20px 24px', margin: '20px 0', border: '1px solid #e5e7eb' }}>
              <Text style={{ margin: '0 0 8px', fontSize: 13, color: '#6b7280', textTransform: 'uppercase', letterSpacing: 1 }}>Your credentials</Text>
              <Text style={{ margin: '4px 0', fontSize: 14, color: '#111827' }}><strong>Email:</strong> {email}</Text>
              <Text style={{ margin: '4px 0', fontSize: 14, color: '#111827' }}><strong>Temp password:</strong> {tempPassword}</Text>
            </Section>
            <Text style={{ color: '#ef4444', fontSize: 13, fontWeight: 'bold' }}>
              ⚠ Please change your password immediately after logging in.
            </Text>
            <Button
              href={loginUrl}
              style={{ background: '#93328f', color: '#fff', fontSize: 13, fontWeight: 'bold', padding: '14px 28px', textDecoration: 'none', display: 'inline-block', marginTop: 16 }}
            >
              Log In to Admin Panel →
            </Button>
          </Section>
          <Hr style={{ borderColor: '#e5e7eb', margin: '0 36px' }} />
          <Section style={{ padding: '20px 36px 28px' }}>
            <Text style={{ color: '#9ca3af', fontSize: 12, margin: 0 }}>
              Salem International Christian Centre · admin@salemeurope.org
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
