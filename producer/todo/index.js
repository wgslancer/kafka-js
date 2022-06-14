const kafka = require("../../kafka");
const random = require("random");

const todoProducer = kafka.producer();

const todos = {
  0: "Homework",
  1: "Code",
  2: "Clean house",
};

(async function () {
  setInterval(async () => {
    const randomValue = random.int(0, 2);
    await todoProducer.connect();

    await todoProducer.send({
      topic: "todo",
      messages: [
        {
          value: `Create new todo at ${new Date().toLocaleTimeString()} is ${
            todos[randomValue]
          }`,
        },
      ],
    });

    await todoProducer.disconnect();
  }, 2000);
})();
