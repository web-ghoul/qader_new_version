'use server'

export async function sendForm(prevState: any, formData: FormData) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: `${formData.get('name')}`,
      to: 'nourasa3d19@gmail.com',
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      html: `
      <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px;width:560px">
      <tr style="width:100%">
        <td>
          <p style="display:block;outline:none;border:none;text-decoration:none;border-radius:6px;max-width:fit-content;padding:10px 12px;background:#4374fa">
            <!-- <img alt="Qader" src="https://qader-eg.vercel.app/_next/static/media/q-logo.4c2e407e.svg" width="42" height="42" style="display:block;outline:none;border:none;text-decoration:none;border-radius:6px;width:42px;height:42px;padding:10px;background:#4374fa" /> -->
            <svg width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.9756 31.6769C30.0869 31.6769 30.9878 32.5777 30.9878 33.689C30.9878 34.8004 30.0869 35.7012 28.9756 35.7012C27.8643 35.7012 26.9634 34.8004 26.9634 33.689C26.9634 32.5777 27.8643 31.6769 28.9756 31.6769ZM2.0122 16.183C2.0122 8.51496 8.22834 2.29882 15.8963 2.29882C23.5643 2.29882 29.7805 8.51496 29.7805 16.183C29.7805 23.851 23.5643 30.0671 15.8963 30.0671C8.22834 30.0671 2.0122 23.851 2.0122 16.183Z" stroke="white" stroke-width="4.02439"/>
              </svg>
          </p>

          <h1 style="font-size:24px;letter-spacing:-0.5px;line-height:1.3;font-weight:400;color:#484848;padding:17px 0 0">A New Message From ${formData.get(
            'name'
          )}</h1>

          <p style="font-size:15px;line-height:1.4;background-color:#4374fa;border-radius:3px;font-weight:600;color:#fff;text-decoration:none;display:inline-block;p-x:23px;p-y:11px;width:100%;box-sizing:border-box;max-width:100%;padding:11px 23px;white-space:pre-wrap;word-wrap:break-word">${formData.get(
            'message'
          )}</p>

          <code style="margin:20px 0 0 0;font-family:monospace;font-weight:700;padding:1px 4px;letter-spacing:-0.3px;font-size:15px;border-radius:4px;color:#3c4149;display:block;">Name: ${formData.get(
            'name'
          )}</code>
          <code style="font-family:monospace;font-weight:700;padding:1px 4px;letter-spacing:-0.3px;font-size:15px;border-radius:4px;color:#3c4149;display:block;">Email: ${formData.get(
            'email'
          )}</code>
          <a target="_blank" style="margin:15px 0 0 0;display:inline-block;color:#b4becc;text-decoration:none;font-size:15px" href="mailto:${formData.get(
            'email'
          )}">Reply in an email</a>

          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dfe1e4;margin:42px 0 26px" />
          <a target="_blank" style="color:#b4becc;text-decoration:none;font-size:14px" href="https://qadereg.com">Qader</a>
        </td>
      </tr>
    </table>
  </body>
      `,
    }),
  })

  return {
    message: 'Email sent!',
  }
}
