"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputSelectProps {
  onSubmit?: (data: { email: string; telefone: string }) => void;
  className?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  onSubmit,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("55");

  const inputHeight = 48; // altura fixa para ambos inputs

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ email, telefone });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 max-w-md ${className}`}
      style={{ color: "white" }}
    >
      <input
        type="email"
        name="email"
        placeholder="* Seu melhor email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "12px",
          border: "1px solid #555",
          borderRadius: "6px",
          backgroundColor: "#2a222a",
          color: "white",
          fontSize: "16px",
          height: inputHeight,
          boxSizing: "border-box",
        }}
      />

      <div style={{ position: "relative", width: "100%" }}>
        <PhoneInput
          country="br"
          value={telefone}
          onChange={(phone) => setTelefone(phone)}
          inputStyle={{
            width: "100%",
            padding: "12px",
            paddingLeft: "56px",
            borderRadius: "6px",
            border: "1px solid #555",
            backgroundColor: "#2a222a",
            color: "white",
            fontSize: "16px",
            height: inputHeight,
            boxSizing: "border-box",
          }}
          buttonStyle={{
            border: "none",
            backgroundColor: "transparent",
            padding: "0 12px",
            height: inputHeight,
          }}
          containerStyle={{
            width: "100%",
          }}
          inputProps={{
            name: "telefone",
            required: true,
            autoFocus: false,
          }}
          enableAreaCodes={true}
          countryCodeEditable={false}
        />
        {/* Placeholder customizado */}
        {(!telefone || telefone === "55") && (
          <span
            style={{
              position: "absolute",
              left: "90px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa",
              pointerEvents: "none",
              fontSize: "16px",
              userSelect: "none",
            }}
          >
            (99) 99999-9999
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#ff6600] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#e65c00] transition-colors duration-300 font-medium"
      >
        QUERO PARTICIPAR AO VIVO
      </button>
    </form>
  );
};

export default InputSelect;
