import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import TestInformation from './TestInformation';
import Test2Preguntas from './Test2Preguntas';

import RadioInput from '../form/RadioInput';
import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';

interface ITestPageProps {
  params?: { resultadoId?: string };
}

interface ITestPageState {
  test?: ITest;
  resultadoId?: string;
}

export default class Test2Page extends React.Component<ITestPageProps, ITestPageState> {

  constructor() {
    super();

    this.state = { };
  }

  componentDidMount() {

    const fetchUrl = url('api/tests/2');
    fetch(fetchUrl)
        .then(response => response.json())
        .then(test => { console.log('test', test); this.setState({ test }); });
  }

  onChange(value) {
    console.log(value);
  }

  comparar( a, b ) { return a - b; }

  render() {
    const { test } = this.state;
    const { params } = this.props;
    if (!test) {
      return <h2>No test loaded</h2>;
    }

    return (
      <span>
        <TestInformation test={test} />
        <Test2Preguntas params={test.preguntas} resultadoId={params.resultadoId}/>
      </span>
    );
  }
}
