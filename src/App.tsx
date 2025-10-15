import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="text-center py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
    <h1 className="text-4xl font-bold mb-2">Pedro Castillo</h1>
    <p className="text-lg opacity-90">
      Locución, diseño gráfico y programación
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <a
        href="#sobre-mi"
        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
      >
        Sobre mí
      </a>
      <a
        href="#experiencia"
        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
      >
        Experiencia
      </a>
      <a
        href="#contacto"
        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
      >
        Contacto
      </a>
    </div>
  </header>
);

const SobreMi: React.FC = () => (
  <section
    id="sobre-mi"
    className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg text-center"
  >
    <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Sobre mí</h2>
    <img
      src="/mifoto.jpg"
      alt="Pedro Castillo"
      className="w-32 h-32 rounded-full mx-auto shadow-md mb-4 object-cover"
    />
    <p className="text-gray-700"> ¡Bienvenido/a! </p>
    <p className="text-gray-700">
      Soy Pedro Castillo, un profesional versátil con un enfoque integral en la
      comunicación y el desarrollo digital. Mi experiencia abarca la Locución,
      el Diseño Gráfico y la Programación, lo que me permite manejar proyectos
      desde la concepción creativa hasta la implementación técnica.
    </p>
  </section>
);

const Experiencia: React.FC = () => (
  <section
    id="experiencia"
    className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg text-center"
  >
    <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
      Experiencia y Educación
    </h2>
    <ul className="text-gray-700 space-y-2">
      <li>🎙️ Locutor certificado N° 58.575 UCSAR</li>
      <li>💻 Estudiante de ingeniería de sistemas</li>
      <li>🎨 Diseñador gráfico freelancer</li>
      <li>📱 Social media manager</li>
    </ul>
  </section>
);

const Contacto: React.FC = () => (
  <section
    id="contacto"
    className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg text-center"
  >
    <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Contacto</h2>
    <p className="text-gray-700">Instagram: @pedroozziec</p>
    <p className="text-gray-700">Email: pedrocastillog18@gmail.com</p>
    <p className="text-gray-700">
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/"
        className="text-indigo-600 hover:underline"
      >
        linkedin.com/in/pedroozziec
      </a>
    </p>
    <div className="mt-6">
      <Link
        to="/formulario"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow transition"
      >
        Enviar mensaje
      </Link>
    </div>
  </section>
);

const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
    <Header />
    <SobreMi />
    <Experiencia />
    <Contacto />
    <footer className="text-center py-6 text-gray-500 mt-12">
      © {new Date().getFullYear()} ozzie.com
    </footer>
  </div>
);

export default App;
