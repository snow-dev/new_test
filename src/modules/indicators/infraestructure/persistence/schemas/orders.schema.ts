import { EntitySchema } from 'typeorm';
import { OrdersModel } from '../models/orders.model';

export const OrdersSchemaEntity = new EntitySchema<OrdersModel>({
  name: 'OrdersModel',
  tableName: 'PC_PEDIDOS_VIEW',
  target: OrdersModel,
  columns: {
    PorcentajeEmbarcado: {
      type: Number,
      name: 'PORCENTAJE_EMBARCADO',
      primary: true,
    },
    PorcentajeFacturado: {
      type: Number,
      name: 'PORCENTAJE_FACTURADO',
      primary: true,
    },
    OrdenCompra: {
      type: String,
      name: 'ORDEN_COMPRA',
      primary: true,
    },
    Mr: {
      type: String,
      name: 'MR',
      primary: true,
    },
    Pedido: {
      type: String,
      name: 'PEDIDO',
      primary: true,
    },
    OrgVenta: {
      type: String,
      name: 'ORG_VENTA',
      primary: true,
    },
    Estatus: {
      type: String,
      name: 'ESTATUS',
      primary: true,
    },
    FechaOc: {
      type: String,
      name: 'FECHA_OC',
      primary: true,
    },
    Nocte: {
      type: String,
      name: 'NOCTE',
      primary: true,
    },
    Cliente: {
      type: String,
      name: 'CLIENTE',
      primary: true,
    },
    NocteDestino: {
      type: String,
      name: 'NOCTE_DESTINO',
      primary: true,
    },
    ClienteDestino: {
      type: String,
      name: 'CLIENTE_DESTINO',
      primary: true,
    },
    Zona: {
      type: String,
      name: 'ZONA',
      primary: true,
    },
    RegionCte: {
      type: String,
      name: 'REGION_CTE',
      primary: true,
    },
    UOperativa: {
      type: String,
      name: 'U_OPERATIVA',
      primary: true,
    },
    CantidadPedido: {
      type: Number,
      name: 'CANTIDAD_PEDIDO',
      primary: true,
    },
    MontoLocal: {
      type: Number,
      name: 'MONTO_LOCAL',
      primary: true,
    },
    CantidadFacturada: {
      type: Number,
      name: 'CANTIDAD_FACTURADA',
      primary: true,
    },
    MontoFacturado: {
      type: Number,
      name: 'MONTO_FACTURADO',
      primary: true,
    },
    AttachementCount: {
      type: Number,
      name: 'ATTACHEMENT_COUNT',
      primary: true,
    },
  },
});
