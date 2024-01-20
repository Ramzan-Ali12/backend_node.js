const sendVerificationEmail = ({ name, code }) => {
  return `
      <!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="utf-8" />
  
      <meta name="viewport" content="width=device-width" />
  
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
      <meta name="x-apple-disable-message-reformatting" />
  
      <title>CRUD Application</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>
        html,
        body {
          margin: 0 auto;
          padding: 0px;
          height: 100vh;
          width: 100%;
          background: #e1ebee;
          font-family: "Public Sans", sans-serif;
          padding: 30px 0px;
        }
  
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          text-decoration: none;
          font-family: "Public Sans", sans-serif;
        }
        div[style*="margin: 16px 0"] {
          margin: 0 !important;
        }
  
        table,
        td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
        #footer{
          margin-bottom:30px !important;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
  
        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
          border-bottom: 0 !important;
          cursor: default !important;
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        .heading1 {
          font-weight: 600;
          font-size: 42px;
          color: #121722;
          margin-top: 50px;
        }
        .spanClass {
          font-weight: 600;
          font-size: 42px;
          color: #121722;
        }
        .imgLogo {
          width: 310px;
        }
        .img1 {
          height: 35px;
          width: 35px;
          margin-right: 18px;
        }
  
        .middleBg {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 50px 20px;
        }
        .imgDiv {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .innerImg {
          width: 140px;
        }
        .centerTopText {
          color: #2d2d32;
          font-size: 24px;
          font-weight: 500;
          text-align: center;
          margin-top: 20px;
        }
  
        .borderDiv {
          border-bottom: 1px solid #d6d6d6;
          max-width: 250px;
          margin: 20px auto;
        }
        .textClass {
          color: #575f6e;
          font-size: 16px;
          font-weight: 300;
          text-align: left;
        }
  
        .button {
          padding: 10px;
          border-radius: 5px;
          border: 1.5px solid #0f172a;
          background: #e1ebee;
          margin-top: 20px;
          box-shadow: none;
          cursor: pointer;
          font-size: 42px;
          font-weight: 700;
          color: #2d2d32;
          width: 100%;
        }
        .footerP {
          color: #575f6e;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 0.2px;
        }
        .aTag {
          color: #0f172a;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.2px;
          text-decoration-line: underline;
          cursor: pointer;
        }
      </style>
    </head>
    <body width="100%" style="mso-line-height-rule: exactly; padding: 30px 20px">
      <div style="max-width: 560px; margin: 0 auto; width: 100%">
        <!-- BEGIN BODY -->
        <table
          align="center"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          height="100vh"
          style="margin: auto"
        >
          <tr>
            <td valign="top">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr>
                  <td style="text-align: center">
                    <a
                      href="${process.env.DOMAIN}" 
                      style="display: inline-flex"
                    >
                      <img src="${process.env.BACKEND_DOMAIN}/public/assets/app-logo.png" class="imgLogo" />
                    </a>
                    <h1 class="heading1">
                      Hi
                      <span class="spanClass"> ${name}, </span>
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- center tr -->
          <tr>
            <td valign="middle" style="padding-top: 30px">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr>
                  <td>
                    <div class="middleBg">
                      <div class="imgDiv">
                      
                        <img src="${process.env.BACKEND_DOMAIN}/public/assets/email.png" alt="" class="innerImg" />
                      </div>
                      <p class="centerTopText">Email Verification</p>
                      <div class="borderDiv"></div>
  
                      <p class="textClass">
                        We’re thrilled to welcome you to CRUD application.
                        You’re already on your way to create your account.
                      </p>
                      <p class="textClass" style="margin-top: 25px">
                        Please enter this confirmation code in the window where
                        you started creating your account
                      </p>
                      <button class="button">${code}</button>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end tr -->
          <tr>
            <td valign="top" style="padding-top: 20px">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                id="footer
  
              >
                <tr>
                  <td>
                    <div style="margin-bottom: 50px">
                      <p class="footerP">
                        In the future, please use the following link to access the
                        crud application as well
                        <a href="${process.env.DOMAIN}" target="_blank" class="aTag">
                          ${process.env.DOMAIN}
                        </a>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center">
                     <a href="https://www.facebook.com/" target="_blank">
                      <img src="${process.env.BACKEND_DOMAIN}/public/assets/facebook.png" class="img1" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <img src="${process.env.BACKEND_DOMAIN}/public/assets/linkedIn.png" class="img1" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <img
                        src="${process.env.BACKEND_DOMAIN}/public/assets/instagram.png"
                        class="img1"
                        style="margin-right: 0px"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
      `;
};

// export default sendVerificationEmail;
module.exports = sendVerificationEmail;
