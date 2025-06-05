/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";

export default function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [estatisticas, setEstatisticas] = useState(false);
  const [marketing, setMarketing] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function saveCookies() {
    console.log("Estatísticas:", estatisticas);
    console.log("Marketing:", marketing);
    closeModal();
    setShowToast(true);
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {/* Ícone flutuante */}
      <div
        onClick={openModal}
        className="fixed bottom-5 right-5 cursor-pointer bg-white p-1 rounded-full shadow-md flex items-center justify-center overflow-hidden z-[9999] h-9 w-9"
      >
        <img
          src="https://media.istockphoto.com/id/921664276/pt/vetorial/mobile-application-for-fingerprint-recognition.jpg?s=612x612&w=0&k=20&c=al95yTOAjYQNyDYPfCJJBeMFxasc5Q8CdN4Gfn3_njU="
          alt="Digital"
          className="w-10 h-9 object-contain max-w-full max-h-full"
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm cursor-pointer z-[9998]"
        ></div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-96 max-w-[90vw] z-[10000] font-sans ">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 text-2xl cursor-pointer bg-transparent border-none"
            aria-label="Fechar modal"
          >
            &times;
          </button>

          <h2 className="mt-5 mb-2 font-bold text-xl text-black">
            Configurações de cookies
          </h2>
          <p className="text-gray-600 mb-5 font-bold">
            Você pode escolher quais cookies quer aceitar.
          </p>

          <div className="mb-4">
            <strong className="text-black">Cookies obrigatórios</strong>{" "}
            <span className="text-black">(Sempre ativo)</span>
            <p className="text-gray-500 mt-1">
              Essenciais para garantir o funcionamento adequado do site.
            </p>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="max-w-[250px]">
              <strong className="text-black">Cookies de estatísticas</strong>
              <p className="text-gray-500 mt-1">
                Coletam informações para melhorar o desempenho do site.
              </p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={estatisticas}
                onChange={() => setEstatisticas(!estatisticas)}
                className="opacity-0 w-0 h-0"
              />
              <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300 before:absolute before:left-1 before:bottom-1 before:bg-white before:rounded-full before:h-4 before:w-4 before:transition-transform before:duration-300 checked:bg-blue-600 checked:before:translate-x-6"></span>
            </label>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <div className="max-w-[250px]">
              <strong className="text-black">Cookies de marketing</strong>
              <p className="text-gray-500 mt-1">
                Para publicidade personalizada e conteúdo direcionado.
              </p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={marketing}
                onChange={() => setMarketing(!marketing)}
                className="opacity-0 w-0 h-0"
              />
              <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300 before:absolute before:left-1 before:bottom-1 before:bg-white before:rounded-full before:h-4 before:w-4 before:transition-transform before:duration-300 checked:bg-blue-600 checked:before:translate-x-6"></span>
            </label>
          </div>

          <button
            onClick={saveCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full"
          >
            Confirmar configurações
          </button>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-orange-600 text-white px-5 py-3 rounded-lg shadow-md font-bold font-sans z-[10001] opacity-100 transform translate-y-0 transition-opacity duration-400 ease-in-out">
          Configurações salvas com sucesso!
        </div>
      )}

      {/* Estilos para o switch (slider) */}
      <style jsx>{`
        .slider {
          position: relative;
          display: inline-block;
          width: 46px;
          height: 24px;
        }
        .slider.round {
          border-radius: 34px;
        }
        .slider.round:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: 0.4s;
        }
        input:checked + .slider.round {
          background-color: #007bff;
        }
        input:checked + .slider.round:before {
          transform: translateX(22px);
        }
      `}</style>
    </>
  );
}
