import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import { Cards } from './components/cards/frame/cards-frame';
import { Main } from './components/styled';
import GraphLongWeek from './components/GraphLongWeek';
import GraphLong from './components/GraphLong';
import TypePayment from './components/graphCircle/TypePayment';
import TypeOrder from './components/graphCircle/TypeOrder';
import SupplierMoreSale from './components/Lists/SupplierMoreSale';
import ProductsMoreSale from './components/Lists/ProductsMoreSale';
import TicketAverage from './components/Lists/TicketAverage';

import OrdersAverageDay from './components/Lists/OrdersAverageDay';

import GraphLineGMV from './components/GraphLine/GMV';
import GraphLineOrders from './components/GraphLine/Orders';
import { Header, Container, ViewRow } from './styles';
import {
  orderWeekRequest,
  orderHourRequest,
} from '../../store/modules/chart/actions';

function Alfred() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (orderWeekRequest) {
      dispatch(orderWeekRequest());
      dispatch(orderHourRequest());
    }
  }, [dispatch]);

  return (
    <>
      <Container>
        <ViewRow>
          <TypePayment />
          <TicketAverage />
          <OrdersAverageDay />
        </ViewRow>
      </Container>

      {/* <Row justify="center" gutter={25}>
          <Col xxl={8} xl={16} md={16} xs={24}>
            <TypePayment />
          </Col>
          <Col xxl={8} xl={16} md={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TicketAverage />
            </Suspense>
          </Col>

          <Col xxl={8} xs={8}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OrdersAverageDay />
            </Suspense>
          </Col>
        </Row>
        <Row justify="center" gutter={55} style={{ marginTop: 20 }}>
          <Col xxl={8} xl={8} md={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TypeOrder />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24} md={16}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SupplierMoreSale />
            </Suspense>
          </Col>
        </Row>
        <Row justify="center" gutter={25} style={{ marginTop: 20 }}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <GraphLong />
            </Suspense>
          </Col>
        </Row>

        <Row justify="center" gutter={25} style={{ paddingTop: 20 }}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <GraphLineOrders />
            </Suspense>
          </Col>
        </Row>
        <Row justify="center" gutter={25}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <GraphLineGMV />
            </Suspense>
          </Col>
          >
        </Row>
        <Row justify="center" gutter={25}>
          <GraphLongWeek />
        </Row> */}
    </>
  );
}

export default Alfred;
