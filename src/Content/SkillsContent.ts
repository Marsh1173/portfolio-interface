interface SkillData {
  img_url?: string;
  letters?: string;
  title: string;
  text: string;
}

export const SKILLS_CONTENT: SkillData[] = [
  { img_url: "icon-python.svg", title: "Python", text: "Very well versed in Python. Used in BYU's CS website." },
  {
    letters: "Ts",
    title: "Typescript",
    text: "Very well versed in TypeScript and JavaScript. Used in nearly all my personal projects.",
  },
  { img_url: "icon-react.svg", title: "React", text: "Well-versed in React. Used in nearly all my personal projects." },
  {
    img_url: "icon-mobile.svg",
    title: "Mobile Development",
    text: "Experience with Android studio (activities, fragments) and React Native.",
  },
  { img_url: "icon-java.svg", title: "Java", text: "Well versed in Java. Used with AWS and Android Studio." },
  {
    img_url: "icon-scrum.svg",
    title: "Agile / Scrum",
    text: "Several years of work experience with Agile.",
  },
  {
    img_url: "icon-docker.svg",
    title: "Docker",
    text: "In-depth experience with Docker and Docker containers.",
  },
  {
    img_url: "icon-jira.svg",
    title: "Jira",
    text: "Several years of work experience with Jira / Confluence.",
  },
  { letters: "dj", title: "Django", text: "Very familiar with Django. Used constantly while working for BYU." },
  { img_url: "icon-github.svg", title: "Git", text: "Very familiar with GitHub. Used in all my projects." },
  {
    img_url: "icon-c.svg",
    title: "C/C#/C++",
    text: "In-depth experience. Solid understanding of sockets, pointers, and memory.",
  },
  { img_url: "icon-html.svg", title: "HTML/CSS/\nLess/Sass", text: "Well versed in website design." },
  {
    img_url: "icon-aws.svg",
    title: "AWS",
    text: "Finished several large projects using API Gateway, lambdas, and DynamoDB.",
  },
  {
    img_url: "icon-database.svg",
    title: "SQL/NoSQL",
    text: "Very familiar with popular database programs, including Redis, PostgreSQL, MySQL, and MongoDB.",
  },
  {
    img_url: "icon-yarn.svg",
    title: "NPM/Yarn",
    text: "Used in the majority of my projects.",
  },
  {
    img_url: "icon-test.svg",
    title: "Automated Testing",
    text: "Experience with python's unittest, Mockito, and JUnit 5.",
  },
  {
    img_url: "icon-vue.svg",
    title: "Vue",
    text: "Passable experience with Vue (routing, pages).",
  },
];
