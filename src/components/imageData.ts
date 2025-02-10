import { StaticImageData } from 'next/image';
import Breado from "../../public/image/breado.jpg";
import About from "../../public/image/about.png";
import Backend from "../../public/image/backend.png";
import Book from "../../public/image/book.png";
import Database from "../../public/image/database.png";
import Deramaa from "../../public/image/deramaa.png";
import Discord from "../../public/image/discord.png";
import Dropdown from "../../public/image/dropdown.png";
import Email from "../../public/image/Email.png";
import Firemario from "../../public/image/firemario.png";
import Framework from "../../public/image/framework.png";
import Frontend from "../../public/image/frontend.png";
import Github from "../../public/image/github.png";
import Hacker from "../../public/image/hacker.png";
import Hobby from "../../public/image/hobby.png";
import Instagram from "../../public/image/instagram.png";
import Linkedin from "../../public/image/linkedin.png";
import Location from "../../public/image/Location.png";
import Peacock from "../../public/image/peacock.png";
import Phone from "../../public/image/Phone.png";
import Portfolio from "../../public/image/portfolio.png";
import ProfileJpg from "../../public/image/profile.jpg";
import ProfilePng from "../../public/image/profile.png";
import Projects from "../../public/image/projects.png";
import Qualification from "../../public/image/qualification.png";
import Skill from "../../public/image/skill.png";
import CrownOfCourage from '../../public/image/crown_of_courage.png'
import Multi_linear_regression from "../../public/image/multiregression.jpg"
import LinearRegression from "../../public/image/linearregression.webp"

import Blog1 from "../../public/image/blog1.png"
import Blog2 from "../../public/image/blog2.png"

interface ImageMap {
  [key: string]: StaticImageData;
}
const imgData :ImageMap= {
  breado: Breado,
  about: About,
  backend: Backend,
  book: Book,
  database: Database,
  deramaa: Deramaa,
  discord: Discord,
  dropdown: Dropdown,
  email: Email,
  firemario: Firemario,
  framework: Framework,
  frontend: Frontend,
  github: Github,
  hacker: Hacker,
  hobby: Hobby,
  instagram: Instagram,
  linkedin: Linkedin,
  location: Location,
  peacock: Peacock,
  phone: Phone,
  portfolio: Portfolio,
  profileJpg: ProfileJpg,
  profilePng: ProfilePng,
  projects: Projects,
  qualification: Qualification,
  skill: Skill,
  crownofcourage:CrownOfCourage,
  blog1:Blog1,
  blog2:Blog2,

  blog3:LinearRegression,
  blog4:Multi_linear_regression

};

export default imgData;
