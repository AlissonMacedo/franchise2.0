import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { Container, Header, DivLoading, DivLabels, Labels } from './style';
import { SessionChartWrapper, SessionState } from '../style';
import { Cards } from '../../cards/frame/cards-frame';
import { ChartjsDonutChart } from '../../charts/chartjs';

import {
  typePaymentFilter,
  typePaymentRequest,
} from '../../../../../store/modules/chart/actions';

const TypePayment = () => {
  const dispatch = useDispatch();
  const { typePaymentLoading, typeState } = useSelector(state => {
    return {
      typePaymentLoading: state.chart.typePaymentLoading,
      typeState: state.chart.typePaymentData,
    };
  });

  const [state, setState] = useState({
    date: 'today',
  });

  useEffect(() => {
    if (typePaymentRequest) {
      dispatch(typePaymentRequest());
    }
  }, [dispatch]);

  const handleActiveTypePayment = value => {
    setState({
      ...state,
      date: value,
    });
    // dispatch(typePaymentFilter(value));
  };

  const percentage = data => {
    const total = typeState[0] + typeState[1];
    const percent = (data * 100) / total;

    return percent;
  };

  return (
    <Container>
      <Header>
        <span>Tipo De Pagamento</span>
        <span>30 dias</span>
      </Header>

      {typePaymentLoading ? (
        <DivLoading>
          <ReactLoading type="bubbles" color="#e64b16" height={80} width={80} />
        </DivLoading>
      ) : (
        typeState !== null && (
          // <div
          //   isbutton={
          //     <div className="card-nav">
          //       <ul>
          //         <li className={state.date === 'today' ? 'active' : 'deactivate'}>
          //           <a onClick={() => handleActiveTypePayment('today')}>Hoje</a>
          //         </li>
          //         <li className={state.date === 'week' ? 'active' : 'deactivate'}>
          //           <a onClick={() => handleActiveTypePayment('week')}>Semana</a>
          //         </li>
          //         <li className={state.date === 'month' ? 'active' : 'deactivate'}>
          //           <a onClick={() => handleActiveTypePayment('month')}>Mês</a>
          //         </li>
          //       </ul>
          //     </div>
          //   }
          //   title="Tipo De Pagamento"
          //   size="large"
          // >
          <div>
            <ChartjsDonutChart
              labels={['On Line', 'Na entrega']}
              datasets={[
                {
                  data: typeState,
                  backgroundColor: ['#e64c1d', '#6ecb98'],
                  total: '10,283',
                },
              ]}
            />

            <DivLabels>
              <Labels>
                <div className="divCircle">
                  <div className="circle-green" />
                  <span className="title">On Line</span>
                </div>
                <span className="value">{`R$ ${typeState[0]}`}</span>
                {/* <sub>{`${percentage(typeState[0])}%`}</sub> */}
              </Labels>
              <Labels>
                <div className="divCircle">
                  <div className="circle-red" />
                  <span className="title">Na entrega</span>
                </div>
                <span className="value">{`R$ ${typeState[1]}`}</span>
                {/* <sub>{`${percentage(typeState[1])}%`}</sub> */}
              </Labels>
            </DivLabels>
          </div>
        )
      )}
    </Container>
  );
};

export default TypePayment;
