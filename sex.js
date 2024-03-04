function countSex(user) {

    const data = require('./users.json')

    let males = 0;
    let females = 0;

    data.forEach(obj => {
        if(obj.gender === "male") {
          males++;
        } else if(obj.gender === "female") {
            females++;
        }
      });

      return `Males:${males}, Females${females}`;


}
module.exports = { countSex }
