const user = {
  name: "Zubair",
  surname: "HIPRO",
  path: "Front-End",
  skills: "HTML, CSS, SCSS, JS, just learning ReactJs",
  level: "start junior",
  description: function () {
    console.log(this);
    return `Hello i'm ${this.name}, ${this.surname} and I am ${this.path} I know ${this.skills} my level is ${this.level} , Nice to meet you ! `;
  },
  logotip: "/about/img/logo-me.png",
  me: "/about/img/sa.png",
};

export default  user
