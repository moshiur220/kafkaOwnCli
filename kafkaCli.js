const { kafka } = require("./kafkaConfig");

async function createKafkaTopic(topicName, numPartitions = 2) {
  const admin = kafka.admin();

  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

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
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Disconnecting Admin...");
    await admin.disconnect();
  }
}

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

async function deleteKafkaTopic(topicName) {
  const admin = kafka.admin();

  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log(`Deleting Topic [${topicName}]`);
    await admin.deleteTopics({ topics: [topicName] });
    console.log(`Topic Deleted Successfully [${topicName}]`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Disconnecting Admin...");
    await admin.disconnect();
  }
}

async function listKafkaTopics() {
  const admin = kafka.admin();

  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log("Fetching Topic List");
    const topicList = await admin.listTopics();
    console.log("Topic List:", topicList);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Disconnecting Admin...");
    await admin.disconnect();
  }
}

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

module.exports = {
  createKafkaTopic,
  describeKafkaTopic,
  deleteKafkaTopic,
  listKafkaTopics,
  produceMessage,
  consumeMessages,
};
