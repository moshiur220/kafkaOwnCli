// deleteTopic.js

const { kafka } = require("./kafkaConfig"); // Import Kafka configuration

async function deleteKafkaTopic(topicName) {
  const admin = kafka.admin();

  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log(`Deleting Topic [${topicName}]`);
    await admin.deleteTopics({ topics: [topicName] });

    console.log(`Topic [${topicName}] deleted successfully.`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (admin) {
      console.log("Disconnecting Admin...");
      await admin.disconnect();
    }
  }
}

deleteKafkaTopic("rider-updates2");
