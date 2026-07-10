import {
  Html, Head, Body, Container, Section, Text, Hr, Img,
} from '@react-email/components'

interface Props {
  firstName: string
  subject?: string
}

export default function ContactConfirmation({ firstName, subject }: Props) {
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
              Message Received
            </Text>
          </Section>
          <Section style={{ padding: '36px 36px 24px' }}>
            <Text style={{ color: '#111827', fontSize: 15, lineHeight: 1.6 }}>
              Dear {firstName},
            </Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75 }}>
              Thank you for reaching out to us
              {subject ? ` regarding "${subject}"` : ''}. We have received your message and a member of our team will be in touch with you shortly.
            </Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75 }}>
              God bless you.
            </Text>
          </Section>
          <Hr style={{ borderColor: '#e5e7eb', margin: '0 36px' }} />
          <Section style={{ padding: '20px 36px 28px' }}>
            <Text style={{ color: '#9ca3af', fontSize: 12, margin: 0 }}>
              Salem International Christian Centre · admin@salemeurope.org · +44 1279 417222
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
