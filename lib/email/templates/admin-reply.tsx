import {
  Html, Head, Body, Container, Section, Text, Hr,
} from '@react-email/components'

interface Props {
  recipientName: string
  replyBody: string
  adminName: string
  type: 'contact' | 'prayer'
}

export default function AdminReplyEmail({ recipientName, replyBody, adminName, type }: Props) {
  const subject = type === 'prayer' ? 'Response to Your Prayer Request' : 'Re: Your Message to Salem'

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
              {subject}
            </Text>
          </Section>
          <Section style={{ padding: '36px 36px 24px' }}>
            <Text style={{ color: '#111827', fontSize: 15, lineHeight: 1.6 }}>Dear {recipientName},</Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>
              {replyBody}
            </Text>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: 1.6, marginTop: 24 }}>
              God bless you,<br />
              <strong>{adminName}</strong><br />
              Salem International Christian Centre
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
