export default function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || 
    req.connection.remoteAddress;                  
  
  res.status(200).json({ ip });
}
