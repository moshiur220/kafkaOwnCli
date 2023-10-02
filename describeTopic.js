const { kafka } = require("./kafkaConfig");
async function describeKafkaTopic(topicName) {
  const admin = kafka.admin();

  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log(`Describing Topic [${topicName}]`);

    const metadata = await admin.fetchTopicMetadata({ topics: [topicName] });

    if (metadata && metadata.topics) {
      const topicInfo = metadata.topics[0]; // Assuming only one topic is described
      console.log(`Topic Description [${topicName}]:`, topicInfo);
    } else {
      console.log(`Topic [${topicName}] not found.`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (admin) {
      console.log("Disconnecting Admin...");
      await admin.disconnect();
    }
  }
}
describeKafkaTopic("my-topic");
