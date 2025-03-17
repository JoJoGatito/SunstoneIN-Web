import { serve } from 'https://deno.land/std@0.131.0/http/server.ts'
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { topic, recipient_emails, type } = await req.json()
    
    const client = new SmtpClient()
    
    // Replace with your SMTP settings
    await client.connectTLS({
      hostname: 'smtp.protonmail.ch',
      port: 587,
      username: 'outreach@sunstonein.org',
      password: 'PGPWB4M2THDHY9AS',
    })

    let subject = ''
    let content = ''
    
    const portalUrl = 'https://sunstoneinclusivity.network'
    
    if (type === 'new_topic') {
      subject = `New Board Discussion: ${topic.title}`
      content = `A new discussion has been started in the board portal: ${topic.title}\n\n${topic.content}\n\nView discussion: ${portalUrl}/portal/forum/${topic.id}`
    } else if (type === 'new_reply') {
      subject = `New Reply to Board Discussion: ${topic.title}`
      content = `A new reply has been added to the discussion: ${topic.title}\n\nView discussion: ${portalUrl}/portal/forum/${topic.id}`
    }
    
    for (const email of recipient_emails) {
      await client.send({
        from: 'board-portal@sunstoneinclusivity.network',
        to: email,
        subject: subject,
        content: content,
      })
    }
    
    await client.close()
    
    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})