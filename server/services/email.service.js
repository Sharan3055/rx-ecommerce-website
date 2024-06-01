const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const config = {
  service: "gmail",
  auth: {
    user: "rxshoesonline@gmail.com",
    pass: "djxt npbw mbmd ftbc", // Use the generated app password here
  },
};

//for sending mail when user creates account
const registraionMail = (userEmail, userName) => {
  console.log("I AM");
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "salted", // Using "salted" theme for a modern and stylish look
      product: {
        name: "Rx ecommerce",
        link: "https://rx-ecommerce.netlify.app/",
        // logo: "https://drive.google.com/file/d/1w4uENsqqBLEpUDUjH1mQwFmWD7Em1QhJ/view?usp=drive_link",
      },
    });

    let response = {
      body: {
        name: userName || "Customer",
        intro: "Welcome to Rx ! We're very excited to have you on board.",
        action: {
          instructions: "Rx - Sride And Pride 👟:",
          button: {
            color: "##64A5FF", // Optional action button color
            text: "Take Me To Rx",
            link: "https://rx-ecommerce.netlify.app/",
          },
        },
        outro:
          "As a special offer 🎁 for new users, enjoy a <strong> flat 50% 📲</strong> discount on your first purchase with code<strong> FLAT50 </strong>. <br>" +
          "Need help, or have questions?" +
          "Just reply to this email, we'd love to help.",
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: "rxshoesonline@gmail.com",
      to: userEmail,
      subject: " Welcome to Rx Ecommerce",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        resolve(1); // Resolve with success
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject with error
      });
  });
};

const purchaseMail = (userEmail, userName, productList) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "salted", // Using "salted" theme for a modern and stylish look
      product: {
        name: "Rx ecommerce",
        link: "https://rx-ecommerce.netlify.app/",
      },
    });

    let response = {
      body: {
        name: userName || "customer",
        table: {
          data: productList, //takes a complete array of objects
        },
        outro:
          "you have any questions or need assistance, our dedicated customer support team is just an email or phone call away.<br>" +
          "Thank you for choosing RX E-commerce Website. We appreciate your trust in us to deliver quality and style right to your feet.<br>" +
          "Happy Stepping!<br>" +
          "Best Regards",
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: "rxshoesonline@gmail.com",
      to: userEmail,
      subject: "RX Transactions Details",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        resolve(1); // Resolve with success
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject with error
      });
  });
};

const contactUsMail = (name, emailId, mobileNumber, messageBody) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "salted", // Using "salted" theme for a modern and stylish look
      product: {
        name: "Rx ecommerce",
        link: "https://rx-ecommerce.netlify.app/",
      },
    });

    let response = {
      body: {
        name: name || "customer",
        outro:
          `Hello ${name} Thanks For Contacting Us <br>` +
          `Your Issue ➡️ ${messageBody} <br>` +
          `Will Be Addressed Shortly <br>` +
          `Ticket Number 🎫 #55t$67 <br>` +
          `Your Contact NUmber 📲 ${mobileNumber} <br>` +
          `Your Issue Will Be Resolved in less Than 7 Working Days `,
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: "rxshoesonline@gmail.com",
      to: emailId,
      subject: "Rx Contact Us",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        resolve(1); // Resolve with success
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject with error
      });
  });
};

module.exports = { purchaseMail, registraionMail, contactUsMail };
