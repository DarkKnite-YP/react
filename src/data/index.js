import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },

  {
    id: "portfolio",
    title: "Achievement",
  },
  {
    id: "experience",
    title: "Qualification",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Minor in A.I",
    company_name: "I.I.T Ropar",
    date: "2024 - 2025",
    details: [
      "Minor in A.I from <span style='color: white;'>IIT Ropar</span>. <br>Cerificate: Minor in A.I <br>University: Indian Institute of Technology Ropar. Specialization: Artificial Intelligence. Duration: 1 years<br>Type: Minor degree(15 credit)",
      ],
  },
  {
    title: "B.E Computer Science & Engg.",
    company_name: "GTU",
    date: "2021 - 2025",
    details: [
      "Currently pursuing Sem-7 with <span style='color: white;'>CGPA: 7.83</span>.<br>Degree: Bachelor of Engineering (B.E) Specialization: Artificial Intelligence(A.I) University: Gujarat Technological University (GTU)<br>Duration: Typically 4 years<br>Type: Undergraduate degree",
    ],
  },
  {
    title: "HSC",
    company_name: "S.V.V",
    date: "2020 - 2021",
    details: [
      "Class 12 passout with <span style='color: white;'>82%</span>.<br>Cerificate: Higher Schooling Certi (HSC) Specialization: Informatics Practice(I.P) Board: C.B.S.E<br>Duration: 1 years<br>Stream: PCM",
      ],
  },
  {
    title: "SSC",
    company_name: "S.V.V",
    date: "2018 - 2019",
    details: [
      "Class 10 passout with <span style='color: white;'>84.2%</span>. Cerificate: Secondary Schooling Certi (SSC)<br>Board: C.B.S.E<br>Duration: 1 years",
      ],
  },
];

const portfolio = [
  {
    name: "Intern in A.I by IBM ",
    description:
      "Fundamentals of A.I along with core concepts like NLP, LLM, computer vision and Neural network. Successfully completed by implementing a chatbot for a trip advisor.",
    image: oscs,
  },
  {
    name: "Git Repository",
    description:
      "Created and deployed many projects out of which is In_Her_Words. This is specially made for social comments analysis. Using RE & ML it determine wheater it's hostile or not.",
    image: devnotes,
  },
  {
    name: "Intern in UI/UX at ErrorX",
    description:
      "An upskilling internship in domain of UI/UX. Master the art of wireframing and page design. Along with enhancing the user experience.",
    image: algorithms,
  },
];

export { experiences, portfolio };

