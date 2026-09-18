export type TipoButaca = 'Normal' | 'VIP' | 'Accesible';
export type EstadoButaca = 'Disponible' | 'Reservada' | 'Ocupada';

export interface Butaca {
  id: number;
  fila: string;
  numero: number;
  tipo: TipoButaca;
  estado: EstadoButaca;
}