// producer.js

const { Kafka } = require("kafkajs");
const { kafka } = require("./kafkaConfig"); // Import Kafka configuration

const producer = kafka.producer();

async function produceMessage(topic, messageKey, messageValue) {
  try {
    console.log("Producer connecting...");
    await producer.connect();
    console.log("Producer Connection Success...");

    const message = {
      key: messageKey,
      value: messageValue,
    };

    console.log(`Producing message to [${topic}]`);
    await producer.send({
      topic: topic,
      messages: [message],
    });

    console.log("Message sent successfully.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (producer) {
      console.log("Disconnecting Producer...");
      await producer.disconnect();
    }
  }
}

// Usage example
const topic = "my-topic";
const messageKey = "message-key2";
const messageValue = "Hello this message from moshiur!";

produceMessage(topic, messageKey, messageValue); // Call the function to produce a message
