'use server';

// Server Action — contact form submission
// Phase 5: integrate with Resend SDK
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validation
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    // TODO Phase 5: Send via Resend
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@romariocoffie.com>',
    //   to: 'hello@romariocoffie.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    // });

    console.log('Contact form submission:', { name, email, message });
    return { success: true };
  } catch {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
