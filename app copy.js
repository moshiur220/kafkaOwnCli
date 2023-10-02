const {
  produceMessage,
  createKafkaTopic,
  deleteKafkaTopic,
  describeKafkaTopic,
  listKafkaTopics,
  consumeMessages,
} = require("./kafkaCli");

const { program } = require("commander");

program
  .version("1.0.0")
  .description("A simple command-line kafka application")
  .option("-mr, --messageRead <messageRead>", "Kafka Message Read select topic")
  .option("-mk, --messageKey <messageKey>", "Kafka message key")
  .option("-mt, --messageTopic <messageTopic>", "Kafka message key")
  .option("-m, --message <message>", "message text to send")
  .option("-d, --delete <delete>", "Delete the specified kafka topic")
  .option("-des, --describe <describe>", "Describe a kafka topic")

  .option("-tl, --topicList <topicList>", "The list of topics")
  .option("-tc, --createTopic <createTopic>", "Create a new topic")
  .option(
    "-np, --numPartitions <numPartitions>",
    "Select the number of partitions"
  )
  .action((obj) => {
    if (obj.createTopic && obj.numPartitions) {
      createKafkaTopic(obj.createTopic, obj.numPartitions);
    } else if (obj.topicList === "list") {
      listKafkaTopics();
    } else if (obj.describe) {
      describeKafkaTopic(obj.describe);
    } else if (obj.delete) {
      deleteKafkaTopic(obj.delete);
    } else if (obj.messageKey && obj.messageTopic && obj.message) {
      produceMessage(obj.messageTopic, obj.messageKey, obj.message);
    } else if (obj.messageRead) {
      consumeMessages(obj.messageRead);
    } else {
      console.log("Please provide both name and age.");
    }
  });

program.parse(process.argv);

// createKafkaTopic
// node app.js -tc mos-topic -np 2

// listKafkaTopics
// node app.js -tl list

// describeKafkaTopic
// node app.js -des mos-topic

// deleteKafkaTopic
// node app.js -d mos-topic

// produceMessage
// node app.js -mt my-topic -mk test -m "message this is "
