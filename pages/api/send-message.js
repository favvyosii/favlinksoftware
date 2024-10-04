import PocketBase from 'pocketbase';
import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Initialize PocketBase
    const pb = new PocketBase('https://information-ago.pockethost.io/'); // Replace with your PocketBase URL

    try {
      // Save the message to PocketBase
      await pb.collection('messages').create({
        name,
        email,
        message,
      });

      // Send SMS using Twilio
      const accountSid = process.env.TWILO_ACCOUNT_SID;
      const authToken = process.env.AUTH_TOKEN;
      const client = twilio(accountSid, authToken);

      await client.messages.create({
        body: `New message from ${name} (${email}): ${message}`,
        from: '+14302063911',
        to: '+2349068611553',// Your personal phone number
      });

      // Return a success response
      res.status(200).json({ message: 'Message sent and saved successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error saving message or sending SMS:', error);
      res.status(500).json({ message: 'Error submitting the form', error });
    }
  } else {
    // Return a method not allowed error for non-POST requests
    res.status(405).json({ message: 'Method not allowed' });
  }
}
