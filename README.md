# Kafka Command-Line Utility

A simple command-line Kafka utility for performing various Kafka operations. This utility is built using Node.js and the KafkaJS library.

## Installation

Before using this utility, make sure you have Node.js installed. Then, follow these steps to set up the utility:

1. Clone this repository:
   ```shell
   git clone https://github.com/moshiur220/kafkaOwnCli.git 

2. docker-compose up -d
3. npm install
# create-topic (ct)
Description: Create a Kafka topic with the specified name and number of partitions.

Options:

-tc, --topic <topicName>: Name of the topic to be created.
-np, --num-partitions <numPartitions>: Number of partitions for the topic.
 To create a Kafka topic:

 Example:
node kafka-cli.js create-topic -tc my-topic -np 2

# list-topics (lt)
Description: List all Kafka topics.

Example:
node kafka-cli.js list-topics

# describe-topic (des)
Description: Describe a specific Kafka topic.

Options:

-t, --topic <topicName>: Name of the topic to describe.
Example:
node kafka-cli.js describe-topic -t my-topic

# delete-topic (dt)
Description: Delete a specific Kafka topic.

Options:

-t, --topic <topicName>: Name of the topic to delete.
Example:
node kafka-cli.js delete-topic -t my-topic

# read-message (rm)
Description: Consume messages from a Kafka topic.

Options:

-t, --topic <topicName>: Name of the topic to read messages from.
Example:
node kafka-cli.js read-message -t my-topic

# produce-message (pm)
Description: Produce a message to a Kafka topic with a specified key and content.

Options:

-mt, --message-topic <topicName>: Name of the target topic to produce the message to.
-mk, --message-key <key>: Message key.
-m, --message <message>: Message content.

Example:
node kafka-cli.js produce-message -mt my-topic -mk test -m "message content"