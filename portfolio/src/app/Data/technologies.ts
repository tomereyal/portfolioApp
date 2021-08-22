import { ITechnologies } from "./../../typings/technology";
import js from "../../assests/techLogos/js.svg";
import ts from "../../assests/techLogos/ts.svg";
import css from "../../assests/techLogos/css.svg";
import scss from "../../assests/techLogos/scss.svg";
import html5 from "../../assests/techLogos/html5.svg";
import react from "../../assests/techLogos/react.svg";
import node from "../../assests/techLogos/node.svg";
import mongo from "../../assests/techLogos/mongo.svg";
import sql from "../../assests/techLogos/sql.svg";
import mySql from "../../assests/techLogos/mySql.svg";
import git from "../../assests/techLogos/git.svg";
import client from "../../assests/techLogos/client.svg";
import clientApp from "../../assests/techLogos/clientApp.svg";
import server from "../../assests/techLogos/server.svg";
import database3d from "../../assests/techLogos/database3d.svg";
import database from "../../assests/techLogos/database.svg";
import development from "../../assests/techLogos/development.svg";
const clientSideTechs = [
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "CSS", logo: css },
  { name: "SCSS", logo: scss },
  { name: "HTML5", logo: html5 },
  { name: "ReactJS", logo: react, bold: true },
];

const serverSideTechs = [
  { name: "NodeJS", logo: node },
  { name: "Express", logo: node },
];

const dataBaseTechs = [
  { name: "MongoDB", logo: mongo },
  { name: "Mongoose", logo: mongo },
  { name: "SQL", logo: sql },
  { name: "MySQL", logo: mySql },
];

const developmentTechs = [{ name: "Git", logo: git }];

export const technologies: Array<ITechnologies> = [
  {
    type: "client-side",
    content: clientSideTechs,
    logo: clientApp,
  },
  {
    type: "server-side",
    content: serverSideTechs,
    logo: server,
  },
  {
    type: "data-bases",
    content: dataBaseTechs,
    logo: database3d,
  },
  { type: "development", content: developmentTechs, logo: development },
];
