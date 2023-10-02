// kafkaConfig.js

const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
  // Add other Kafka configuration options here
});

module.exports = { kafka };
