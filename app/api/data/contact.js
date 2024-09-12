// pages/api/contact.js

import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, model, phoneNumber } = req.body;

    try {
      await db('contact_form').insert({
        name,
        model,
        phone_number: phoneNumber
      });
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
