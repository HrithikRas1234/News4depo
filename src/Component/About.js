import React from 'react'

 const a = function () {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Hey there! I'm <strong>Ritik Rastogi</strong>, a final-year B.Tech CSE student (graduating in 2025) and a passionate <strong>Full Stack Developer</strong>. 
        This NewsAPI web application was created as a collaborative project with my talented peers — <strong>Manish</strong>, <strong>Prem</strong>, and <strong>Ashish Kumar</strong> — all of us driven by a shared love for coding, creativity, and solving real-world challenges through technology.
      </p>
      <p className="mb-4">
        We developed this platform to deliver fast, clean, and up-to-date news from reliable sources using modern web technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>REST APIs</strong>. Our focus was not just on functionality, but also on performance, user experience, and scalability.
      </p>
      <p className="mb-4">
        This project reflects our commitment to continuous learning and growth as aspiring developers. It’s more than just a college project — it’s a step toward building impactful digital solutions.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">📫 Contact Me</h3>
      <ul className="list-disc list-inside">
        <li>
          Email: <a href="mailto:dracritik@gmail.com" className="text-blue-600 hover:underline">dracritik@gmail.com</a>
        </li>
        <li>
          LinkedIn: <a 
            href="https://www.linkedin.com/in/ritik-rastogi-6a9180253/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            Ritik Rastogi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default a;

