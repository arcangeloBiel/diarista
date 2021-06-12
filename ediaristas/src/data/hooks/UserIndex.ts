import { UserShortInterface } from "data/@types/UserInterface";
import { validationService } from "data/services/VlidationService";
import { useState, useMemo } from "react";

import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const cepValido = useMemo(() => {
    return validationService.cep(cep);
  }, [cep]);

  const [error, setError] = useState("");
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diarista, setDiarista] = useState([] as UserShortInterface[]);
  const [diaristaRestantes, setDiaristaRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setError("");
    try {
      const { data } = await ApiService.get<{
        diarista: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidades?cep=" + cep.replace(/\D/g, ""));
      setDiarista(data.diarista);
      setDiaristaRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setError("Cep não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diarista,
    buscaFeita,
    carregando,
    diaristaRestantes,
  };
}
