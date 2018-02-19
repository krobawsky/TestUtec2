import * as React from 'react';

import { Link } from 'react-router';
import { IUser } from '../../types';
import { url } from '../../util';

interface IUsersPageProps {
  params?: { userId?: string };
}

interface IUserPageState {
  user?: IUser;
}

export default class UserPage extends React.Component<IUsersPageProps, IUserPageState> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.userId) {
      const fetchUrl = url(`/api/users/${params.userId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(user => this.setState({ user }));
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <h2>Loading..</h2>;
    }

    return (
      <span>
        <div className='row'>
          <div className='col s12 m6 offset-m3'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
            <span className='card-title center'>Información del Usuario</span>
            <p> Nombres : {user.firstName} {user.lastName} </p>
           <p> Usuario : {user.username} </p>
           <p> Rol : {user.rol} </p>
           <div className='right'>
          <a href='/users/list' className='btn waves-effect waves-light' type='submit' name='action'>Enviar
          <i className='material-icons right'>send</i>
          </a>
          </div><br/>
            </div>
            </div>
            </div>
        </div>
      </span>
    );
  }
}
