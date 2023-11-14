const mongoose = require('mongoose');

// connect to db
mongoose.connect('YOUR_STRING_HERE', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// define item
const itemSchema = new mongoose.Schema({
    name: String
});
const Item = mongoose.model('Item', itemSchema);

// Create
async function createItem(name) {
    try {
        const item = new Item({
            name
        });
        await item.save();
        console.log('Item created:', item);
        return item; // Returning the created item
    } catch (error) {
        console.error('Create operation failed:', error);
    }
}

// Read
async function readItem(id) {
    try {
        const item = await Item.findById(id);
        console.log('Item read:', item);
        return item; // Returning the found item
    } catch (error) {
        console.error('Read operation failed:', error);
    }
}

// Update
async function updateItem(id, newName) {
    try {
        const item = await Item.findByIdAndUpdate(id, {
            name: newName
        }, {
            new: true
        });
        console.log('Item updated:', item);
        return item; // Returning the updated item
    } catch (error) {
        console.error('Update operation failed:', error);
    }
}

// Delete
async function deleteItem(id) {
    try {
        await Item.findByIdAndDelete(id);
        console.log('Item deleted');
    } catch (error) {
        console.error('Delete operation failed:', error);
    }
}

// call funcs
async function performCRUDOperations() {
    try {
        // Create an item
        const createdItem = await createItem('Sample Item');

        // Read the item
        await readItem(createdItem._id);

        // Update the item
        await updateItem(createdItem._id, 'Updated Item');

        // Delete the item
        await deleteItem(createdItem._id);

    } catch (error) {
        console.error('Error in CRUD operations:', error);
    } finally {
        mongoose.connection.close();
        console.log('MongoDB connection closed');
    }
}

// run
performCRUDOperations();