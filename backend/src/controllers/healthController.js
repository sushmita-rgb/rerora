export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'Dremo API Engine',
  });
};
