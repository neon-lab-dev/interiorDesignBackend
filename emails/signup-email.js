const signUpEmailTemplate = (name, otp) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify your login</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
    body, p { font-family: 'Bricolage Grotesque', Arial, sans-serif; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f0f4f8;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td align="center" style="padding: 40px 0; background: linear-gradient(to right, #4f46e5, #7c3aed); border-radius: 8px 8px 0 0;">
              <img src="https://i.ibb.co/gPqZ6Qz/Final-Logo4-1-1.png" alt="Company" style="width: 120px; height: auto;" />
              <h1 style="font-family: 'Bricolage Grotesque', Arial, sans-serif; color: #ffffff; font-size: 28px; margin-top: 20px;">Verify Your Signup</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 40px 30px; text-align: center;">
              <p style="color: #4a5568; font-size: 18px; margin-bottom: 24px;">Dear ${name},</p>
              <p style="color: #4a5568; font-size: 16px; margin-bottom: 16px;">Your one-time password (OTP) for your recent signup is:</p>
              <div style="background: linear-gradient(to right, #eef2ff, #e0e7ff); padding: 20px; border-radius: 8px; display: inline-block; margin-bottom: 24px;">
                <span style="font-family: 'Bricolage Grotesque', Arial, sans-serif; font-size: 36px; font-weight: bold; color: #4f46e5;">${otp}</span>
              </div>
              <p style="color: #4a5568; font-size: 16px; margin-bottom: 16px;">Please enter this OTP on the verification screen to complete your signup.</p>
              <p style="color: #4a5568; font-size: 16px; margin-bottom: 16px;">This OTP is valid for the next few minutes. If you did not initiate this transaction, please contact our customer support team immediately.</p>
              <p style="color: #4a5568; font-size: 16px; margin-bottom: 24px;">Thank you for using our secure services.</p>
              <p style="color: #4a5568; font-size: 16px;">
                Best regards,<br />
                <span style="font-weight: 600; color: #4f46e5;">Space Frame</span>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="background-color: #f7fafc; padding: 20px; border-radius: 0 0 8px 8px;">
              <p style="font-family: 'Bricolage Grotesque', Arial, sans-serif; color: #718096; font-size: 14px; margin: 0;">
                &copy; 2023 Space Frame. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}


module.exports = signUpEmailTemplate;