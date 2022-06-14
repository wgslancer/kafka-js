const kafka = require("../../kafka");

const todoConsumer = kafka.consumer({
  groupId: "todo-2",
});

(async function () {
  await todoConsumer.connect();

  await todoConsumer.subscribe({
    topic: "todo",
    fromBeginning: true,
  });

  await todoConsumer.run({
    eachMessage: async ({ topic, message, partition }) => {
      console.log(`Received new message from consumer 2`);
      console.log(`Topic:::${topic}`);
      console.log(`Partition:::${partition}`);
      console.log(`Message:::${message.value}`);
    },
  });
})();
