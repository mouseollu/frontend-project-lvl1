// import _ from "lodash";

// const lesson = {
//   name: "ДеструКТУРИЗАЦИЯ",
//   description: "каК удивитЬ друзей",
// };

// const normalize = (meaning) => {
//   const name =
//     lesson.name[0].toUpperCase() + lesson.name.substring(1).toLowerCase();
//   const description = lesson.description.substring().toLowerCase();
//   const result = { name, description };
//   return result;
// };

// const normalize = (meaning) => {
//   meaning.name = _.capitalize(meaning.name);
//   meaning.description = meaning.description.toLowerCase();
// };

// normalize(lesson);

// console.log(lesson);

// console.log(lesson);

// console.log(_.capitalize(lesson.name));
// console.log(lesson.description.toLowerCase());

// const is = (company1, company2) => {
//   const props1 = Object.getOwnPropertyNames(company1);
//   const props2 = Object.getOwnPropertyNames(company2);
//   if (props1.length !== props2.length) {
//     return false;
//   }
//   for (let i = 0; i < props1.length; i += 1) {
//     const prop = props1[i];

//     if (company1[prop] !== company2[prop]) {
//       return false;
//     }
//   }

//   return true;
// };
// const company1 = {
//   name: "Hexlet",
//   state: "published",
//   website: "https://hexlet.io",
// };
// const company2 = {
//   name: "Hexlet",
//   state: "published",
//   website: "https://hexlet.io",
// };
// console.log(is(company1, company2));

// const getDomainInfo = (siteName) => {
//   if (siteName.startsWith("http" || "https")) {
//     const parts = siteName.split("://");
//     const name = _.last(parts);
//     const scheme = _.first(parts);
//     const info = { scheme: scheme, name: name };
//     return info;
//   } else {
//     const info = { scheme: "http", name: siteName };
//     return info;
//   }
// };

// console.log(getDomainInfo("yandex.ru"));

// console.log(getDomainInfo("https://hexlet.io"));

// console.log(getDomainInfo("http://google.com"));

// const file = "https://google.com";
// const file1 = "yandex.ru";
// console.log(file.startsWith("htt"));
// console.log(file1.startsWith("htt"));

// const countWords = (text) => {
//   const result = {};
//   const array = _.words(text);
//   for (const item of array) {
//     const word = item.toLowerCase();
//     if (Object.hasOwn(result, word)) {
//       result[word] += 1;
//     } else {
//       result[word] = 1;
//     }
//   }
//   return result;
// };

// countWords("");

// const text1 = "one two three two ONE one wow";
// console.log(countWords(text1));

// const text2 = "another one sentence with strange Words words";
// console.log(countWords(text2));

// const pick = (obj, arrName) => {
//   const result = {};
//   const pairs = Object.entries(obj);
//   for (const [key, value] of pairs) {
//     if (arrName.includes(key)) {
//       result[key] = value;
//     }
//   }
//   return result;
// };
// const data = {
//   user: "ubuntu",
//   cores: 4,
//   os: "linux",
// };
// console.log(Object.keys(data));
// console.log(pick(data, ["user"]));
// console.log(pick(data, ["user", "os"]));
// console.log(pick(data, []));
// console.log(pick(data, ["none", "cores"]));
