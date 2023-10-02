// consumer.js

const { Kafka } = require("kafkajs");
const { kafka } = require("./kafkaConfig"); // Import Kafka configuration

const consumer = kafka.consumer({ groupId: "my-consumer-group" });

async function consumeMessages(topic) {
  try {
    console.log("Consumer connecting...");
    await consumer.connect();
    console.log("Consumer Connection Success...");

    console.log(`Subscribing to [${topic}]`);
    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message: [${message.key}: ${message.value}]`);
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Usage example
const topicToConsume = "my-topic";
consumeMessages(topicToConsume);
