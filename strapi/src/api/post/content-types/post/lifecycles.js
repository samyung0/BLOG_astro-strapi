const readingTime = require("reading-time/lib/reading-time.js");
const getContent = (content, children) => {
  let ret = content;
  for (const i of children) {
    ret += i.text ?? "";
    if (i.children) ret += getContent("", i.children);
  }
  return ret;
};

module.exports = {
  async beforeCreate(event) {
    if (event.params.data.categories.connect.length === 0) {
      event.params.data.categories.connect.push({
        id: 7,
        position: {
          end: true,
        },
      });
    }
    if (event.params.data.content && !event.params.data.readingTime) {
      const content = getContent("", event.params.data.content);
      event.params.data.readingTime = Math.max(
        Math.round(readingTime(content).minutes),
        1
      );
    }
  },

  async beforeUpdate(event) {
    if (event.params.data.content && !event.params.data.readingTime) {
      const content = getContent("", event.params.data.content);
      event.params.data.readingTime = Math.max(
        Math.round(readingTime(content).minutes),
        1
      );
    }
  },
};
