import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todosOsEventos = get(listaDeEventosState)
    const eventos = todosOsEventos.filter(eventos => {
      if (!filtro.data) {
        return true
      }
      const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === eventos.inicio.toISOString().slice(0, 10)
      return ehOMesmoDia
    })
    return eventos
  }
})
