/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import {
  Container,
  Header,
  DivError,
  DivLoading,
  DivMaster,
  DivCenter,
  DivNames,
  DivLastWeek,
} from './style';
import { Cards } from '../../cards/frame/cards-frame';
import Heading from '../../heading/heading';

import { ticketAverageRequest } from '../../../../../store/modules/chart/actions';
import { SessionChartWrapper } from '../../graphCircle/style';

const TicketAverage = () => {
  const dispatch = useDispatch();
  const { ticketAverageData, ticketAverageLoading } = useSelector(state => {
    return {
      ticketAverageData: state.chart.ticketAverageData,
      ticketAverageLoading: state.chart.ticketAverageLoading,
    };
  });

  useEffect(() => {
    if (ticketAverageRequest) {
      dispatch(ticketAverageRequest());
    }
  }, [dispatch]);

  const teste = false;

  return (
    <Container>
      <Header>
        <span>Ticket Médio</span>
      </Header>

      {teste ? (
        <DivError>
          <span>Não foi possivel exibir as informações</span>
          <button type="button">
            <span>Atualizar</span>
          </button>
        </DivError>
      ) : ticketAverageLoading ? (
        <DivLoading>
          <ReactLoading type="bubbles" color="#e64b16" height={80} width={80} />
        </DivLoading>
      ) : (
        ticketAverageData !== null && (
          <DivMaster>
            <DivCenter>
              <DivNames>
                <span>MarketPlace</span>
                <h2>{`R$${ticketAverageData.Marketplace.value}`}</h2>
                <div className="classPercentege">
                  <FeatherIcon icon="arrow-down" color="red" size={28} />
                  <span style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                    {`${ticketAverageData.Marketplace.percent}%`}
                  </span>
                </div>
              </DivNames>
              <DivNames>
                <span>Empresarial</span>
                <h2>{`R$${ticketAverageData.Empresarial.value}`}</h2>
                <p className="classPercentege">
                  <FeatherIcon icon="arrow-up" color="green" size={28} />
                  <span style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
                    {`${ticketAverageData.Empresarial.percent}%`}
                  </span>
                </p>
              </DivNames>
            </DivCenter>
            <DivLastWeek>
              <span>Em relacão à última semana</span>
            </DivLastWeek>
          </DivMaster>
        )
      )}
    </Container>
  );
};

export default TicketAverage;
