import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
} from 'material-ui';
import Stars from '../../Jobs/JobShow/Stars';

// Css
import cls from './CardAgentShow.css';

import * as actions from '../../../../store/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onDisableButton(localStorage.getItem('token'), this.props.job_id);
  }

  render() {
    let name = null;
    let count = null;
    let avatar = null;
    let cellPhone = null;
    if (this.props.agent) {
      cellPhone = this.props.agent.cell_phone
      name = (`${this.props.agent.first_name} ${this.props.agent.last_name}`).replace(/\b\w/g, l => l.toUpperCase());
      count = this.props.review_count;
      avatar = this.props.agent.avatar.url === null ? (
        <div className={cls.AvatarInitials}>
          {this.props.agent.first_name.charAt(0).toUpperCase()}{this.props.agent.last_name.charAt(0).toUpperCase()}
        </div>
      ) : (
        <div className={cls.AvatarInitials} style={{backgroundImage: `url(${this.props.agent.avatar.url})`}}>
        </div>
      )
    }
    return (
      <Grid container>
        <div className={cls.AgentReview}>
          <h2 className={cls.Title}>Agente Contratado</h2>
        </div>
        <div className={cls.AgentDetailsWrapper}>
          <div className={cls.AgentHeader}>
            <div className={cls.Avatar}>
              <div className={cls.AgentAvatarCircle}>
                {avatar}
              </div>
            </div>
            <div className={cls.AgentName}>
              <Grid container className={cls.AgentWrapper}>
                <Grid item xs={12} sm={4}>
                  <p>{name}</p>
                  <div>
                    <Stars agentRewiewsAverage={this.props.review_average}/>
                  </div>  
                  <div className={cls.QouteDetailStats}>{count} opiniones</div>
                  <div className={cls.QouteDetailStats}>{cellPhone === null ? (''):(<div>Celular: {cellPhone}</div>)}</div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={cls.AgentConfirmedAvatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 18 18">
                      <path d="M13 13v3a1 1 0 0 1-2 0v-3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zM7 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8.72-.78a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.97.97 2.47-2.47z" fillRule="evenodd"></path>
                    </svg>
                    <div className={cls.BackgroundCheck}>Verificado</div>
                    <div className={cls.BackgroundComplete}>
                      <span >Completado
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                          <path fillRule="evenodd" d="M14.581 3.198c-.449-.341-1.075-.23-1.396.248L8.017 11.14 4.528 8.832c-.47-.31-1.086-.158-1.378.34-.29.5-.147 1.155.322 1.466L8.554 14l6.26-9.318c.321-.478.216-1.143-.233-1.484"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div className={cls.AgentHire}>
                    {this.props.disableButtonjob.can_review === true ? (
                      <Link
                        to={`/cliente/trabajo/${this.props.job_id}/agente/calificar`}>
                        <button>
                          Calificar
                        </button>
                      </Link>
                      ) : (
                        null
                      )
                    }
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    disableButtonjob: state.disableButton.disableButton,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDisableButton: (token, job_id) => dispatch(actions.disableButton(token, job_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);