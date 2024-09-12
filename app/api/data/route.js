// app/api/data/route.js
import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'printerSite',
  password: 'postgres',
  port: 5432,
});

client.connect();

export async function GET() {
  try {
    const result = await client.query('SELECT * FROM yourTable');
    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
