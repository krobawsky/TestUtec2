import * as React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { IResultado } from '../../types';

import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine } from '../../../node_modules/recharts';
import { XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Cell } from '../../../node_modules/recharts';
import { Scatter, ScatterChart, Line, BarChart, Bar, AreaChart, Area} from '../../../node_modules/recharts';
import { ResponsiveContainer} from '../../../node_modules/recharts';
import { Radar, RadarChart } from '../../../node_modules/recharts';
import { ComposedChart } from '../../../node_modules/recharts';
import { Tabs, Tab } from '../../../node_modules/react-materialize';

const tipos = [{ tipo: 'Sinceridad', ab: 'X'}, { tipo: 'Deseabilidad Social', ab: 'Y'}, { tipo: 'Autodescalificación', ab: 'Z'}, { tipo: 'Esquizoide', ab: '1'},
   { tipo: 'Evitativo', ab: '2'}, { tipo: 'Dependiente', ab: '3'}, { tipo: 'Histriónico', ab: '4'} , { tipo: 'Narcisita', ab: '5'},
   { tipo: 'Antisocial', ab: '6A'}, { tipo: 'Agresivo-sádico', ab: '6B'}, { tipo: 'Compulsivo', ab: '7'}, { tipo: 'Pasivo-agresivo', ab: '8A'},
   { tipo: 'Autoderrotista', ab: '8B'}, { tipo: 'Esquizotípico' , ab: 'S'}, { tipo: 'Borderline' , ab: 'B'}, { tipo: 'Paranoide' , ab: 'P'},
   { tipo: 'Ansiedad' , ab: 'A'}, { tipo: 'Somatoformo' , ab: 'H'}, { tipo: 'Bipolar' , ab: 'N'}, { tipo: 'Distimia' , ab: 'D'},
   { tipo: 'Dependencia de alcohol' , ab: 'B'}, { tipo: 'Dependencia de drogas' , ab: 'T'}, { tipo: 'Desorden del pensamiento' , ab: 'SS'},
   { tipo: 'Depresión mayor' , ab: 'CC'}, { tipo: 'Desorden delusional' , ab: 'PP'}];
const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  getIntroOfPage(label) {
      if (label === 'X') {
        return 'Sinceridad';
      } else if (label === 'Y') {
        return 'Deseabilidad Social';
      } else if (label === 'Z') {
        return 'Autodescalificación';
      } else if (label === '1') {
        return 'Esquizoide';
      } else if (label === '2') {
        return 'Evitativo';
      } else if (label === '3') {
        return 'Dependiente';
      } else if (label === '4') {
        return 'Histriónico';
      } else if (label === '5') {
        return 'Narcisita';
      } else if (label === '6A') {
        return 'Antisocial';
      } else if (label === '6B') {
        return 'Agresivo-sádico';
      } else if (label === '7') {
        return 'Compulsivo';
      } else if (label === '8A') {
        return 'Pasivo-agresivo';
      } else if (label === '8B') {
        return 'Autoderrotista';
      } else if (label === 'S') {
        return 'Esquizotípico';
      } else if (label === 'B') {
        return 'Borderline';
      } else if (label === 'P') {
        return 'Paranoide';
      } else if (label === 'A') {
        return 'Ansiedad';
      } else if (label === 'H') {
        return 'Somatoformo';
      } else if (label === 'A') {
        return 'Ansiedad';
      } else if (label === 'N') {
        return 'Bipolar';
      } else if (label === 'D') {
        return 'Distimia';
      } else if (label === 'B') {
        return 'Dependencia de alcohol';
      } else if (label === 'T') {
        return 'Dependencia de drogas';
      } else if (label === 'SS') {
        return 'Desorden del pensamiento';
      } else if (label === 'CC') {
        return 'Depresión mayor';
      } else if (label === 'PP') {
        return 'Desorden delusional';
      }
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className='custom-tooltip' style={{backgroundColor: 'white', padding: '10px'}}>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='intro'>{this.getIntroOfPage(label)}</p>
        </div>
      );
    }

    return null;
  }
});

export default ({resultado}: { resultado: IResultado }) => (
  <section>
    <div className='card blue-grey darken-1' key={resultado.id}>
      <div className='card-content white-text'>
        <span className='card-title'>Gráficos</span>
      </div>
      <div className='card-content white'>
        <Tabs className='z-depth-1 tabs-fixed-width'>
          <Tab title='Area' active>
            <br/>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.id) - Number(b.id))} margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                <XAxis dataKey='tipo'/>
                <YAxis/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip />
                <Area type='monotone' dataKey='value' stroke='#3E84D9' fill='#3E84D9' />
              </AreaChart>
            </ResponsiveContainer>
          </Tab>
          <Tab title='Lineal' active>
          <br/>
            <ResponsiveContainer width='100%' height={300}>
              <ScatterChart width={600} height={400} margin={{top: 10, right: 10, bottom: 0, left: 0}}>
                <XAxis dataKey={'tipo'} name='tipo'/>
                <YAxis dataKey={'value'} name='valor'/>
                <ZAxis range={[100]}/>
                <CartesianGrid />
                <Tooltip content={<CustomTooltip/>}/>
                <Scatter name='tipo' data={resultado.valores} fill='#8884d8' line shape='circle'/>
              </ScatterChart>
            </ResponsiveContainer>
          </Tab>
        </Tabs>
      </div>
    </div>
    <div className='row'>
      <div className='col s12 m6'>
      <div className='card-panel teal'>
          {tipos.map(un => (<h6 className='white-text'>{un.ab} : {un.tipo}</h6>))}
          </div>
      </div>
      <div className='col s12 m6'>
      <div className='card-panel light-blue darken-3'>
        <h6 className='white-text'>Descripción</h6>
          <div className='divider'></div><br/>
          {resultado.valores.map(res => (<span className='white-text'>{ res.descripcion }. </span>))}
        </div>
      </div>
    </div>
  </section>
);