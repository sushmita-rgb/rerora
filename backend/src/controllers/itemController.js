// In-memory items database for initial demonstration
let items = [
  { id: '1', title: 'Fullstack Architecture', category: 'Design', status: 'Active', updatedAt: new Date().toISOString() },
  { id: '2', title: 'API Gateway Integration', category: 'Backend', status: 'Active', updatedAt: new Date().toISOString() },
  { id: '3', title: 'React Glassmorphic UI', category: 'Frontend', status: 'Completed', updatedAt: new Date().toISOString() },
  { id: '4', title: 'Database Migration Service', category: 'Database', status: 'Pending', updatedAt: new Date().toISOString() },
];

export const getItems = (req, res) => {
  res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
};

export const createItem = (req, res) => {
  const { title, category } = req.body;
  if (!title || !category) {
    res.status(400);
    throw new Error('Please provide title and category');
  }

  const newItem = {
    id: String(Date.now()),
    title,
    category,
    status: 'Active',
    updatedAt: new Date().toISOString(),
  };

  items.unshift(newItem);

  res.status(201).json({
    success: true,
    data: newItem,
  });
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  const exists = items.some(item => item.id === id);
  if (!exists) {
    res.status(404);
    throw new Error(`Item with id ${id} not found`);
  }

  items = items.filter(item => item.id !== id);
  res.status(200).json({
    success: true,
    message: `Item ${id} removed successfully`,
  });
};
