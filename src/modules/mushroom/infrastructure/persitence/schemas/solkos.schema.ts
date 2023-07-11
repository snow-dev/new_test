import { EntitySchema } from 'typeorm';
import { SolkosModel } from '../models/solkos.model';

export const SolkosSchemaEntity = new EntitySchema<SolkosModel>({
  name: 'SolkosModel',
  tableName: 'PC_SOLKOS_SKU_VIEW',
  target: SolkosModel,
  columns: {
    SKU: {
      type: String,
      name: 'SKU',
      primary: true,
    },
    Material: {
      type: String,
      name: 'MATERIAL',
      primary: true,
    },
    Cliente: {
      type: String,
      name: 'NOCTE',
      primary: true,
    },
    Zona: {
      type: String,
      name: 'ZONA',
      primary: true,
    },
    Region: {
      type: String,
      name: 'REGION_CTE',
      primary: true,
    },
    UnidadOperativa: {
      type: String,
      name: 'U_OPERATIVA',
      primary: true,
    },
    Year: {
      type: Number,
      name: 'YEAR',
      primary: true,
    },
    Month: {
      type: Number,
      name: 'MONTH',
      primary: true,
    },
    Week: {
      type: String,
      name: 'WEEK',
      primary: true,
    },
    Cantidad: {
      type: Number,
      name: 'CANTIDAD',
    },
    Distribuidor: {
      type: String,
      name: 'DISTRIBUIDOR',
      primary: true,
    },
  },
});
