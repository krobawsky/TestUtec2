import * as React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { IResultado } from '../../types';

import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine } from '../../../node_modules/recharts';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from '../../../node_modules/recharts';
import { Line, BarChart, Bar} from '../../../node_modules/recharts';
import { ResponsiveContainer} from '../../../node_modules/recharts';
import { Radar, RadarChart } from '../../../node_modules/recharts';
import { ComposedChart } from '../../../node_modules/recharts';
import { Tabs, Tab } from '../../../node_modules/react-materialize';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const tipos = [{ tipo: 'Aceptación', ab: 'A'}, { tipo: 'Afrontamiento Directo', ab: 'AD'} , { tipo: 'Análisis de las Emociones', ab: 'AE'},
  { tipo: 'Búsqueda de Soporte Emocional', ab: 'BSE'}, { tipo: 'Búsqueda de Soporte Social', ab: 'BSE'} , { tipo: 'Conductas Inadecuadas', ab: 'CI'},
  { tipo: 'Distracción', ab: 'D'}, { tipo: 'Negación', ab: 'N'}, { tipo: 'Planificación de Actividades', ab: 'PA'},
  { tipo: 'Retracción del Afrontamiento', ab: 'RA'}, { tipo: 'Reinterpretación Positiva de la Experiencia', ab: 'RPE'},
  { tipo: 'Retomo a la Religión' , ab: 'RR'}, { tipo: 'Superación de Actividades Competitivas' , ab: 'SAC'}];
const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  getIntroOfPage(label) {
      if (label === 'RA') {
        return 'Retracción del Afrontamiento';
      } else if (label === 'RR') {
        return 'Retomo a la Religión';
      } else if (label === 'PA') {
        return 'Planificación de Actividades';
      } else if (label === 'CI') {
        return 'Conductas Inadecuadas';
      } else if (label === 'A') {
        return 'Aceptación';
      } else if (label === 'SAC') {
        return 'Superación de Actividades Competitivas';
      } else if (label === 'BSS') {
        return 'Búsqueda de Soporte Social';
      } else if (label === 'D') {
        return 'Distracción';
      } else if (label === 'AE') {
        return 'Análisis de las Emociones';
      } else if (label === 'N') {
        return 'Negación';
      } else if (label === 'BSE') {
        return 'Búsqueda de Soporte Emocional';
      } else if (label === 'RPE') {
        return 'Reinterpretación Positiva de la Experiencia';
      } else if (label === 'AD') {
        return 'Afrontamiento Directo';
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
          <Tab title='Barras' active>
            <br/>
            <ResponsiveContainer width='90%' height={300}>
              <BarChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.value) - Number(b.value))} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <Bar dataKey='value'>
                  {
                    resultado.valores.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Bar>
                <XAxis dataKey='tipo'/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip content={<CustomTooltip/>}/>
                <YAxis/>
              </BarChart>
            </ResponsiveContainer>
          </Tab>
        <Tab title='Araña' active>
          <br/>
          <ResponsiveContainer width='90%' height={300}>
            <RadarChart outerRadius={120} width={600} height={300} data={resultado.valores}>
              <Radar dataKey='value' stroke='#FF8042' fill='#FF8042' fillOpacity={0.6}/>
              <PolarAngleAxis dataKey='tipo' />
              <PolarGrid />
              <PolarRadiusAxis />
            </RadarChart>
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