const { program } = require("commander");
const {
  createKafkaTopic,
  listKafkaTopics,
  describeKafkaTopic,
  deleteKafkaTopic,
  produceMessage,
  consumeMessages,
} = require("./kafkaCli"); // Import your Kafka functions

program.version("1.0.0"); // Set the version of your application

program
  .command("create-topic")
  .alias("ct")
  .description("Create a Kafka topic")
  .option("-tc, --topic <topicName>", "Name of the topic")
  .option("-np, --num-partitions <numPartitions>", "Number of partitions")
  .action(({ topic, numPartitions }) => {
    createKafkaTopic(topic, parseInt(numPartitions));
  });

program
  .command("list-topics")
  .alias("lt")
  .description("List Kafka topics")
  .action(() => {
    listKafkaTopics();
  });

program
  .command("describe-topic")
  .alias("des")
  .description("Describe a Kafka topic")
  .option("-t, --topic <topicName>", "Name of the topic")
  .action(({ topic }) => {
    describeKafkaTopic(topic);
  });

program
  .command("delete-topic")
  .alias("dt")
  .description("Delete a Kafka topic")
  .option("-t, --topic <topicName>", "Name of the topic")
  .action(({ topic }) => {
    deleteKafkaTopic(topic);
  });

program
  .command("read-message")
  .alias("rm")
  .description("Delete a Kafka topic")
  .option("-t, --topic <topicName>", "Read the message")
  .action(({ topic }) => {
    consumeMessages(topic);
  });

program
  .command("produce-message")
  .alias("pm")
  .description("Produce a message to a Kafka topic")
  .option("-mt, --message-topic <topicName>", "Name of the target topic")
  .option("-mk, --message-key <key>", "Message key")
  .option("-m, --message <message>", "Message content")
  .action(({ messageTopic, messageKey, message }) => {
    produceMessage(messageTopic, messageKey, message);
  });

program.parse(process.argv);
