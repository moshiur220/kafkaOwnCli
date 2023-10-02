// topicList.js

const { kafka } = require("./kafkaConfig"); // Import Kafka configuration

async function listKafkaTopics() {
  let admin;

  try {
    admin = kafka.admin();

    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    const topics = await admin.listTopics();
    console.log("List of Topics:", topics);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (admin) {
      console.log("Disconnecting Admin...");
      await admin.disconnect();
    }
  }
}

listKafkaTopics();
