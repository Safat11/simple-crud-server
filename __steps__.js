/**
 * ----------------------------
 *      MongoDB Connection
 * ----------------------------
 * 1. Create account
 * 2. Create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > View full code
 * 5. Change the password the Url
 * ----------------------------
 * 1. CREATE --- POST
 * 2. app.post('/users/', async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * CLIENT
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type' : 'application/json'}
 * 5. add body: JSON.stringify(user)
 * 
 * 
 * 
 * 
 * 
 * --------------------------
 *          READ
 * --------------------------
 * 1. Create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * --------------------------
 *          DELETE
 * --------------------------
 * 1. Create app.delete ('users/:id', async (req, res) => {})
 * 2. Specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection. deleteOne(query);
 * 
 * 
 *      CLIENT
 * 1. Create dynamic url with id
 * 2. mention the DELETE method
*/