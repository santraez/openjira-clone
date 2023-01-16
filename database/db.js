import mongoose from "mongoose";

/**
 * 0 = Disconnected
 * 1 = Connected
 * 2 = Connecting
 * 3 = Disconnecting
 */

const mongooConnection = {
  isConnected: 0,
};

const { MONGO_URL } = process.env;

export const connect = async () => {
  if (mongooConnection.isConnected !== 0) {
    console.log('Ya estabamos conectados');
    return;
  };
  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;
    if (mongooConnection.isConnected === 1) {
      console.log('Usando conexion anterior');
      return;
    };
    await mongoose.disconnect();
  };
  await mongoose.connect(MONGO_URL || '');
  mongooConnection.isConnected = 1;
  console.log('Conectado a mongoDB', MONGO_URL);
};

export const disconnect = async () => {
  if (mongooConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log('Desconectado de MongoDB');
};
