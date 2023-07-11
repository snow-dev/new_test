import { EntityRepository, Repository } from 'typeorm';
import { SolkosModel } from '../models/solkos.model';

export interface Entrie {
  requestedBy: string;
  year: number;
  clientCodes: string[];
  zones: string[];
  regions: string[];
  operativeUnits: string[];
  distribuidor: string;
}

@EntityRepository(SolkosModel)
export class SolkosRepository extends Repository<SolkosModel> {
  async getEntries(entrie: Entrie): Promise<SolkosModel[]> {
    let query = this.createQueryBuilder('solkos');

    console.log('entrie: ', entrie);
    const {
      requestedBy,
      year,
      clientCodes,
      zones,
      regions,
      operativeUnits,
      distribuidor,
    } = entrie;

    query = query
      .where('solkos.Cliente IN (:...clientCodes)', {
        clientCodes,
      })
      .andWhere('solkos.Year = :year', { year });

    if (zones && zones.length > 0) {
      query = query.andWhere('solkos.Zona IN (:...zones)', {
        zones,
      });
    }

    if (regions && regions.length > 0) {
      query = query.andWhere('solkos.Region IN (:...regions)', {
        regions,
      });
    }

    if (operativeUnits && operativeUnits.length > 0) {
      query = query.andWhere('solkos.UnidadOperativa IN (:...operativeUnits)', {
        operativeUnits,
      });
    }

    if (distribuidor?.length > 0) {
      if (distribuidor === 'true') {
        query = query.andWhere('solkos.Distribuidor = :distribuidor', {
          distribuidor: 'X',
        });
      } else {
        query = query.andWhere('solkos.Distribuidor is null');
      }
    }

    const results = await query.getMany();
    console.log('results: ', results);
    return results;
  }
}
