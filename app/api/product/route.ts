// import {client} from '@/sanity/lib/client'

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Insert data
//     const { title, description } = req.body; // Extract data from the request body

//     const mutation = `
//       *[_type == 'product']
//       | [{
//         _type: 'product',
//         title: '${title}',
//         description: '${description}'
//       }]
//     `;

//     const insertedData = await client.transaction().create(mutation).commit();

//     res.status(200).json({ message: 'Data inserted successfully!', data: insertedData });
//   } else if (req.method === 'DELETE') {
//     // Delete data
//     const { id } = req.body; // Extract the ID of the item to delete from the request body

//     const mutation = `*[_id == '${id}'] | []._id`;

//     await sanityClient.transaction().delete(mutation).commit();

//     res.status(200).json({ message: 'Data deleted successfully!' });
//   } else {
//     res.status(400).json({ message: 'Invalid request method!' });
//   }
// }
