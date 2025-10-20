import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yogarudhajina@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD // Use environment variable for security
      }
    });

    // Email options with portfolio-themed template
    const mailOptions = {
      from: 'yogarudhajina@gmail.com',
      to: 'yogarudhajina@gmail.com', // Send to your portfolio email
      subject: `🚀 Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio Contact</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #000000; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); border: 1px solid #e5e5e5;">
            
            <!-- Header -->
            <div style="background-color: #000000; padding: 30px; text-align: center; border-bottom: 3px solid #2ecc71;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px;">
                PORTFOLIO CONTACT
              </h1>
              <div style="width: 60px; height: 2px; background-color: #2ecc71; margin: 15px auto 5px;"></div>
              <p style="margin: 0; color: #cccccc; font-size: 14px; font-weight: 500;">
                New message received
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
              
              <!-- Sender Info -->
              <div style="margin-bottom: 35px;">
                <h2 style="margin: 0 0 20px; color: #000000; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Contact Information
                </h2>
                <div style="border: 1px solid #e5e5e5; border-left: 4px solid #2ecc71; background-color: #fafafa;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                      <td style="padding: 15px 20px; color: #666666; font-weight: 600; width: 100px; font-size: 13px; text-transform: uppercase;">Name</td>
                      <td style="padding: 15px 20px; color: #000000; font-weight: 600; font-size: 15px;">${name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                      <td style="padding: 15px 20px; color: #666666; font-weight: 600; font-size: 13px; text-transform: uppercase;">Email</td>
                      <td style="padding: 15px 20px;">
                        <a href="mailto:${email}" style="color: #2ecc71; text-decoration: none; font-weight: 600; font-size: 15px;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 20px; color: #666666; font-weight: 600; font-size: 13px; text-transform: uppercase;">Subject</td>
                      <td style="padding: 15px 20px; color: #000000; font-weight: 600; font-size: 15px;">${subject}</td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 35px;">
                <h3 style="margin: 0 0 20px; color: #000000; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Message
                </h3>
                <div style="border: 1px solid #e5e5e5; border-left: 4px solid #2ecc71; padding: 25px; background-color: #fafafa;">
                  <p style="margin: 0; color: #333333; line-height: 1.7; font-size: 15px; white-space: pre-line;">${message}</p>
                </div>
              </div>
              
              <!-- Reply Section -->
              <div style="text-align: center; padding: 30px 0; border-top: 1px solid #e5e5e5;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="background-color: #2ecc71; 
                          color: #ffffff; 
                          padding: 15px 35px; 
                          text-decoration: none; 
                          font-weight: 600; 
                          font-size: 14px; 
                          text-transform: uppercase; 
                          letter-spacing: 1px; 
                          display: inline-block; 
                          border: 2px solid #2ecc71;
                          transition: all 0.3s ease;">
                  Reply to ${name}
                </a>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #000000; padding: 25px 30px; text-align: center;">
              <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 600;">
                HRISHIKESH ATOLE
              </p>
              <p style="margin: 0 0 10px; color: #2ecc71; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                Software Engineer • Full-Stack Developer
              </p>
              <div style="width: 40px; height: 1px; background-color: #2ecc71; margin: 15px auto;"></div>
              <p style="margin: 0; color: #888888; font-size: 11px;">
                ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
      replyTo: email // Allow easy reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Message sent successfully! I\'ll get back to you soon.',
      success: true 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send message. Please try again.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please try again later.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.';
    }
    
    res.status(500).json({ 
      message: errorMessage,
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}