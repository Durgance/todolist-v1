exports.getDate = getDate;

function getDate() {
  const today = new Date();

  let day = "";
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
  
}

exports.getDay = getDay;

function getDay() {
  const today = new Date();

  let day = "";
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
 
}

console.log(module.exports);
