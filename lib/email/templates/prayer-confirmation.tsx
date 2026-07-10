import {
  Html, Head, Body, Container, Section, Text, Hr,
} from '@react-email/components'

interface Props { name: string }

export default function PrayerConfirmation({ name }: Props) {
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
              Prayer Request Received
            </Text>
          </Section>
          <Section style={{ padding: '36px 36px 24px' }}>
            <Text style={{ color: '#111827', fontSize: 15, lineHeight: 1.6 }}>Dear {name},</Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75 }}>
              We have received your prayer request and our team will be standing in agreement with you in prayer. You are not alone — the body of Christ at Salem is praying for you.
            </Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75 }}>
              &ldquo;The effective, fervent prayer of a righteous man avails much.&rdquo; — James 5:16
            </Text>
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
