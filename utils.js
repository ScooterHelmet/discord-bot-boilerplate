// Email Mask
const maskPart = (part) => {
  const length = part.length;
  if (length > 8) {
      return part.substr(0, 2) + part.substr(2, length - 2).replace(/\w/g, "*") + part.substr(-2, 2);
  }
  if (length > 4) {
      return part.substr(0, 1) + part.substr(1, length - 1).replace(/\w/g, "*") + part.substr(-1, 1);
  }
  return part.replace(/\w/g, "*");
};

const maskEmailAddress = (message) => {
  console.log(message);
    return message.replace(/([\w.]+)@([\w.]+)(\.[\w.]+)/g, (_m, p1, p2, p3) => {
        return maskPart(p1) + "@" + maskPart(p2) + p3;
    });
};

module.exports = {
  maskEmailAddress
}