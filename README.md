<!-- To create a Kafka topic -->
```bash
node kafka-cli.js create-topic -tc mos-topic -np 2

# To create a Kafka topic
```bash
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