const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafkajs",
  brokers: ["localhost:9092"],
});

module.exports = kafka;
