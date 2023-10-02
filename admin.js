// createKafkaTopic.js

const { kafka } = require("./kafkaConfig"); // Import the Kafka configuration

async function createKafkaTopic() {
  let admin; // Define the admin variable outside the try block

  try {
    const admin = kafka.admin();

    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    const topicName = "my-topic";
    const numPartitions = 2;

    console.log(`Creating Topic ${topicName}`);
    await admin.createTopics({
      topics: [
        {
          topic: topicName,
          numPartitions: numPartitions,
        },
      ],
    });
    console.log(`Topic Created Successfully ${topicName}`);
    await admin.disconnect();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Ensure that the admin disconnects even if an error occurs
    if (admin) {
      console.log("Disconnecting Admin...");
      await admin.disconnect();
    }
  }
}

createKafkaTopic();
