import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/react.png"
        alt={"mysql"}
      />
    ),
    title: "React JS",
    paragraph:
      "React empowers dynamic, interactive user interfaces, providing a foundation for scalable and responsive solutions that enhance overall user experience.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/next.webp"
        alt={"mysql"}
      />
    ),
    title: "Next JS",
    paragraph:
      "Next.js, a powerful React framework, facilitates seamless server-side rendering and simplifies the creation of dynamic and performant web applications with ease.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/tlwcss.png"
        alt={"mysql"}
      />
    ),
    title: "Tailwind CSS",
    paragraph:
      "Tailwind CSS streamlines styling, offering a utility-first approach for crafting efficient, responsive designs with simplicity and flexibility at its core.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/mui.png"
        alt={"mysql"}
      />
    ),
    title: "Material UI",
    paragraph:
      "Material-UI (Mui) enriches React applications with a set of pre-designed components, promoting consistent, visually appealing user interfaces for seamless user interactions.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/chakra.png"
        alt={"mysql"}
      />
    ),
    title: "Chakra UI",
    paragraph:
      "Chakra UI, a React component library, empowers developers with a modular and accessible design system, fostering the creation of delightful and consistent user interfaces effortlessly.",
  },

  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/node.png"
        alt={"mysql"}
      />
    ),
    title: "Node JS",
    paragraph:
      "Node.js revolutionizes backend development, providing a JavaScript runtime that enables scalable and efficient server-side applications, fostering rapid development and robust performance.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/express.png"
        alt={"mysql"}
      />
    ),
    title: "Express JS",
    paragraph:
      "Express.js, a minimal and flexible Node.js web application framework, simplifies backend development, offering a robust set of features for building scalable and efficient servers.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/mongo.png"
        alt={"mysql"}
      />
    ),
    title: "MongoDB",
    paragraph:
      "MongoDB, a NoSQL database, revolutionizes data storage with its flexible schema, scalability, and high performance, providing a reliable foundation for dynamic applications.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/mysql.png"
        alt={"mysql"}
      />
    ),

    title: "MySQL",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        width="40"
        height="45"
        src="/images/web-icons/react.png"
        alt={"mysql"}
      />
    ),
    title: "React Native",
    paragraph:
      "MySQL, a popular relational database, offers a robust and scalable solution for managing structured data, facilitating efficient and secure storage in various applications.",
  },
];
export default featuresData;
