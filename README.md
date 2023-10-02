create-topic (ct)
Description: Create a Kafka topic with the specified name and number of partitions.

Options:

-tc, --topic <topicName>: Name of the topic to be created.
-np, --num-partitions <numPartitions>: Number of partitions for the topic.
# To create a Kafka topic
node kafka-cli.js create-topic -tc my-topic -np 2

# Example
node kafka-cli.js create-topic -tc mos-topic -np 2



node kafka-cli.js create-topic -tc mos-topic -np 2

# To list Kafka topics
node kafka-cli.js list-topics

# To describe a Kafka topic
node kafka-cli.js describe-topic -t mos-topic

# To delete a Kafka topic
node kafka-cli.js delete-topic -t mos-topic

# To produce a message to a Kafka topic
node kafka-cli.js produce-message -mt mos-topic -mk test -m "message this is"

# To consume messages from a Kafka topic
node kafka-cli.js read-message -t mos-topic