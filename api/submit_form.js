// api/submit-form.js (for Vercel)
// or netlify/functions/submit-form.js (for Netlify)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { recaptchaToken, name, email, phone, service, message } = req.body;

    // Step 1: Verify reCAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY not found in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
    });

    const verifyData = await verifyResponse.json();

    console.log('reCAPTCHA verification result:', verifyData);

    // Check if reCAPTCHA verification failed
    if (!verifyData.success) {
      return res.status(400).json({ 
        error: 'reCAPTCHA verification failed',
        details: verifyData['error-codes']
      });
    }

    // Step 2: Submit to FormSubmit.co
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('service', service || '');
    formData.append('message', message || '');
    formData.append('_next', 'https://www.zentrixinfotech.com/thankyou');
    formData.append('_subject', `New Tech Services Inquiry from ${name}`);
    formData.append('_captcha', 'false'); // We already verified reCAPTCHA
    formData.append('_template', 'table');

    const submitResponse = await fetch('https://formsubmit.co/zentrixit@gmail.com', {
      method: 'POST',
      body: formData,
    });

    if (!submitResponse.ok) {
      throw new Error('FormSubmit submission failed');
    }

    // Step 3: Return success
    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit form',
      details: error.message
    });
  }
}