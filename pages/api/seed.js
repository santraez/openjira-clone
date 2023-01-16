import { db } from "../../database";

const handler = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({
      message: 'No tiene acceso a este servicio'
    });
  };
  await db.connect();
  await db.disconnect();
  res.status(200).json({
    message: 'Proceso realizado correctamente'
  });
};

export default handler;
