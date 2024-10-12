// "use client";
// import Image from "next/image";
// import React, { useState, useRef, useEffect } from "react";

// const videos = [
//   {
//     src: "/images/videoFondo.mp4",
//     title: "Bienvenidos a Nuestra Comunidad",
//     description: "Un lugar de paz, oración y encuentro con Dios.",
//   },
//   {
//     src: "/images/cielo.mp4",
//     title: "Segunda Sección",
//     description: "Un mensaje para la segunda sección.",
//   },
//   {
//     src: "/images/girl.mp4",
//     title: "Tercera Sección",
//     description: "Un mensaje para la tercera sección.",
//   },
// ];

// const VideoScrollSection = () => {
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const videoRef = useRef(null);

//   const handleVideoEnded = () => {
//     if (currentVideo < videos.length - 1) {
//       setCurrentVideo((prev) => prev + 1);
//     } else {
//       setCurrentVideo(0); // Reiniciar al primer video al final
//     }
//   };

//   useEffect(() => {
//     // Reinicia el video cuando cambia el índice actual
//     if (videoRef.current) {
//       videoRef.current.load(); // Cargar el nuevo video
//     }
//   }, [currentVideo]);

//   return (
//     <div className="relative h-screen flex items-center justify-center">
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop={false}
//         muted
//         onEnded={handleVideoEnded}
//         key={currentVideo} // Cambia la clave para reiniciar el video
//       >
//         <source src={videos[currentVideo].src} type="video/mp4" />
//         Tu navegador no soporta el video.
//       </video>
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
//         <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
//           {videos[currentVideo].title}
//         </h2>
//         <p className="text-xl text-white mt-4 max-w-xl leading-relaxed">
//           {videos[currentVideo].description}
//         </p>
//       </div>
//       <div className="absolute bottom-4 flex justify-between w-full px-8">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => setCurrentVideo((prev) => Math.max(prev - 1, 0))}
//           disabled={currentVideo === 0}
//         >
//           Anterior
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() =>
//             setCurrentVideo((prev) => Math.min(prev + 1, videos.length - 1))
//           }
//           disabled={currentVideo === videos.length - 1}
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-green-900 text-white py-6 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Image
//               src="/images/logo.jpeg"
//               alt="Logo de la Iglesia"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <h1 className="text-4xl font-bold tracking-wider">
//               Iglesia de Dios Ecuador
//             </h1>
//           </div>
//           <nav className="flex space-x-6">
//             <a
//               href="#about"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Sobre Nosotros
//             </a>
//             <a
//               href="#gallery"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Galería
//             </a>
//             <a
//               href="#events"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Eventos
//             </a>
//             <a
//               href="#transmisiones"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Transmisiones
//             </a>
//             <a
//               href="#calendario"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Calendario
//             </a>
//             <a
//               href="#donaciones"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Donaciones
//             </a>
//             <a
//               href="#contact"
//               className="text-lg hover:text-yellow-400 transition"
//             >
//               Contacto
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Video Section */}
//       <VideoScrollSection />

//       {/* About Section */}
//       <section id="about" className="container mx-auto my-16 px-6">
//         <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
//           Sobre Nosotros
//         </h2>
//         <p className="text-gray-700 text-lg leading-relaxed text-center mx-auto max-w-4xl">
//           La Parroquia Nuestra Señora de la Paz está comprometida con servir a
//           la comunidad ecuatoriana, ofreciendo un espacio de reflexión,
//           espiritualidad y apoyo mutuo. Nos dedicamos a promover el mensaje del
//           Evangelio a través de nuestras celebraciones, misiones y actividades
//           pastorales.
//         </p>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="bg-gray-200 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-green-900">Galería</h2>
//           <p className="mt-4 text-lg text-gray-700">
//             Explora algunos momentos especiales en nuestra parroquia.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <Image
//               src="/images/boletin.jpeg"
//               alt="Iglesia en misa"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             />
//             <Image
//               src="/images/boletin.jpeg"
//               alt="Ceremonia religiosa"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             />
//             <Image
//               src="/images/boletin.jpeg"
//               alt="Celebración comunitaria"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section id="events" className="container mx-auto py-16 px-6">
//         <h2 className="text-4xl font-bold text-center text-green-900">
//           Próximos Eventos
//         </h2>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-shadow">
//             <h3 className="text-2xl font-bold text-green-800">
//               Misa Especial - Día de la Paz
//             </h3>
//             <p className="mt-2 text-lg text-gray-700">
//               12 de Octubre, 2024 | 10:00 AM
//             </p>
//             <p className="mt-4 text-gray-700">
//               Únete a nosotros en esta celebración especial para pedir por la
//               paz en el mundo.
//             </p>
//           </div>
//           <div className="bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-shadow">
//             <h3 className="text-2xl font-bold text-green-800">
//               Retiro Espiritual de Adviento
//             </h3>
//             <p className="mt-2 text-lg text-gray-700">2-4 de Diciembre, 2024</p>
//             <p className="mt-4 text-gray-700">
//               Un retiro espiritual para prepararnos para el nacimiento de
//               Cristo.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Live Broadcast Section */}
//       <section id="transmisiones" className="bg-gray-100 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-green-900">
//             Transmisiones en Vivo
//           </h2>
//           <p className="mt-4 text-lg text-gray-700">
//             Sigue nuestras celebraciones y misas en vivo desde la comodidad de
//             tu hogar.
//           </p>
//           <iframe
//             className="mt-8 mx-auto rounded-lg shadow-lg"
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//           <p className="mt-6 text-lg text-gray-700">
//             Próxima transmisión:{" "}
//             <span className="font-bold">
//               Misa de Domingo, 15 de Octubre, 2024 - 10:00 AM
//             </span>
//           </p>
//         </div>
//       </section>

//       {/* Calendar Section */}
//       <section id="calendario" className="container mx-auto py-16 px-6">
//         <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
//           Calendario de Actividades
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-green-900 text-white">
//                 <th className="py-2 px-4">Fecha</th>
//                 <th className="py-2 px-4">Actividad</th>
//                 <th className="py-2 px-4">Descripción</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4 border-b">12/10/2024</td>
//                 <td className="py-2 px-4 border-b">Misa Especial</td>
//                 <td className="py-2 px-4 border-b">
//                   Celebración por el Día de la Paz.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border-b">15/10/2024</td>
//                 <td className="py-2 px-4 border-b">Transmisión en Vivo</td>
//                 <td className="py-2 px-4 border-b">Misa de Domingo.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Donations Section */}
//       <section id="donaciones" className="bg-gray-200 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-green-900">Donaciones</h2>
//           <p className="mt-4 text-lg text-gray-700">
//             Ayúdanos a seguir con nuestra misión a través de tus donaciones.
//           </p>
//           <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
//             Hacer una Donación
//           </button>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="container mx-auto py-16 px-6">
//         <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
//           Contacto
//         </h2>
//         <p className="text-lg text-gray-700 text-center mb-4">
//           Si tienes alguna pregunta o deseas más información, no dudes en
//           contactarnos.
//         </p>
//         <form className="mx-auto max-w-lg">
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="name">
//               Nombre
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded"
//               type="text"
//               id="name"
//               placeholder="Tu Nombre"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">
//               Correo Electrónico
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded"
//               type="email"
//               id="email"
//               placeholder="Tu Correo Electrónico"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="message">
//               Mensaje
//             </label>
//             <textarea
//               className="w-full px-4 py-2 border rounded"
//               id="message"
//               rows="4"
//               placeholder="Tu Mensaje"
//               required
//             ></textarea>
//           </div>
//           <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
//             Enviar Mensaje
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-green-900 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>© 2024 Iglesia de Dios Ecuador. Todos los derechos reservados.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const videos = [
  {
    src: "/images/videoFondo.mp4",
    title: "Bienvenidos a Nuestra Comunidad",
    description: "Un lugar de paz, oración y encuentro con Dios.",
  },
  {
    src: "/images/cielo.mp4",
    title: "Segunda Sección",
    description: "Un mensaje para la segunda sección.",
  },
  {
    src: "/images/girl.mp4",
    title: "Tercera Sección",
    description: "Un mensaje para la tercera sección.",
  },
];

const VideoScrollSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setCurrentVideo(0); // Reiniciar al primer video al final
    }
  };

  useEffect(() => {
    // Reinicia el video cuando cambia el índice actual
    if (videoRef.current) {
      videoRef.current.load(); // Cargar el nuevo video
    }
  }, [currentVideo]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnded}
        key={currentVideo} // Cambia la clave para reiniciar el video
      >
        <source src={videos[currentVideo].src} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
          {videos[currentVideo].title}
        </h2>
        <p className="text-xl text-white mt-4 max-w-xl leading-relaxed">
          {videos[currentVideo].description}
        </p>
      </div>
      <div className="absolute bottom-4 flex justify-between w-full px-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCurrentVideo((prev) => Math.max(prev - 1, 0))}
          disabled={currentVideo === 0}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setCurrentVideo((prev) => Math.min(prev + 1, videos.length - 1))
          }
          disabled={currentVideo === videos.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.jpeg"
              alt="Logo de la Iglesia"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold tracking-wider">
              Iglesia de Dios Ecuador
            </h1>
          </div>
          <nav className="flex space-x-6">
            <a
              href="#about"
              className="text-lg hover:text-yellow-400 transition"
            >
              Sobre Nosotros
            </a>
            <a
              href="#gallery"
              className="text-lg hover:text-yellow-400 transition"
            >
              Galería
            </a>
            <a
              href="#events"
              className="text-lg hover:text-yellow-400 transition"
            >
              Eventos
            </a>
            <a
              href="#transmisiones"
              className="text-lg hover:text-yellow-400 transition"
            >
              Transmisiones
            </a>
            <a
              href="#calendario"
              className="text-lg hover:text-yellow-400 transition"
            >
              Calendario
            </a>
            <a
              href="#donaciones"
              className="text-lg hover:text-yellow-400 transition"
            >
              Donaciones
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-yellow-400 transition"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Video Section */}
      <VideoScrollSection />

      {/* About Section */}
      <section id="about" className="container mx-auto my-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Sobre Nosotros
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center mx-auto max-w-4xl">
          La Parroquia Nuestra Señora de la Paz está comprometida con servir a
          la comunidad ecuatoriana, ofreciendo un espacio de reflexión,
          espiritualidad y apoyo mutuo. Nos dedicamos a promover el mensaje del
          Evangelio a través de nuestras celebraciones, misiones y actividades
          pastorales.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">Galería</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explora algunos momentos especiales en nuestra parroquia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Image
              src="/images/boletin.jpeg"
              alt="Iglesia en misa"
              width={400}
              height={300}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <Image
              src="/images/boletin.jpeg"
              alt="Ceremonia religiosa"
              width={400}
              height={300}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <Image
              src="/images/boletin.jpeg"
              alt="Celebración comunitaria"
              width={400}
              height={300}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Próximos Eventos
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800">
              Misa Especial - Día de la Paz
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              12 de Octubre, 2024 | 10:00 AM
            </p>
            <p className="mt-4 text-gray-700">
              Únete a nosotros en esta celebración especial para pedir por la
              paz en el mundo.
            </p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800">
              Retiro Espiritual de Adviento
            </h3>
            <p className="mt-2 text-lg text-gray-700">2-4 de Diciembre, 2024</p>
            <p className="mt-4 text-gray-700">
              Un retiro espiritual para prepararnos para el nacimiento de
              Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* Live Broadcast Section */}
      <section id="transmisiones" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Transmisiones en Vivo
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Sigue nuestras celebraciones y misas en vivo desde la comodidad de
            tu hogar.
          </p>
          <iframe
            className="mt-8 mx-auto rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p className="mt-6 text-lg text-gray-700">
            Próxima transmisión:{" "}
            <span className="font-bold">
              Misa de Domingo, 15 de Octubre, 2024 - 10:00 AM
            </span>
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendario" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Calendario de Actividades
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-2 px-4">Fecha</th>
                <th className="py-2 px-4">Actividad</th>
                <th className="py-2 px-4">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">12/10/2024</td>
                <td className="py-2 px-4 border-b">Misa Especial</td>
                <td className="py-2 px-4 border-b">
                  Celebración por el Día de la Paz.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">15/10/2024</td>
                <td className="py-2 px-4 border-b">Transmisión en Vivo</td>
                <td className="py-2 px-4 border-b">Misa de Domingo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="map" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">Ubicación</h2>
          <p className="mt-4 text-lg text-gray-700">Encuéntranos en:</p>
          <div className="mt-8 flex justify-center">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091714!2d144.95373531572067!3d-37.816279979751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d73f%3A0x5045675218c4b40!2sEureka%20Skydeck!5e0!3m2!1sen!2sau!4v1632787378052!5m2!1sen!2sau"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donaciones" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900">Donaciones</h2>
          <p className="mt-4 text-lg text-gray-700">
            Ayúdanos a seguir con nuestra misión a través de tus donaciones.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Hacer una Donación
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Contacto
        </h2>
        <p className="text-lg text-gray-700 text-center mb-4">
          Si tienes alguna pregunta o deseas más información, no dudes en
          contactarnos.
        </p>
        <form className="mx-auto max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type="text"
              id="name"
              placeholder="Tu Nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type="email"
              id="email"
              placeholder="Tu Correo Electrónico"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              id="message"
              rows="4"
              placeholder="Tu Mensaje"
              required
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Enviar Mensaje
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Iglesia de Dios Ecuador. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
