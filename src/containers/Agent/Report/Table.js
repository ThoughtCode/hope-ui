// Dependencias
import React, { Component } from 'react';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Css
import cls from './Report.css';

class Report extends Component {
  render() {
    return (
      <div className={cls.Table}>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Cliente</th>
              <th scope="col">Total trabajo</th>
              <th scope="col">I.V.A</th>
              <th scope="col">Comicion Noc Noc</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-info" scope="row">Limpieza de casa</td>
              <td className="text-info">José Castellanos</td>
              <td className="text-info">$10</td>
              <td className="text-info">$1.2</td>
              <td className="text-info">$2</td>
              <td>$6.8</td>
            </tr>
            <tr>
              <td className="text-info" scope="row">Limpieza de Apartamento</td>
              <td className="text-info">Johnmer Bencomo</td>
              <td className="text-info">$20</td>
              <td className="text-info">$2.4</td>
              <td className="text-info">$3</td>
              <td>$14.6</td>
            </tr>
            <tr className="bg-success">
              <td>Total para Sebastian Remache</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>$21.4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report;