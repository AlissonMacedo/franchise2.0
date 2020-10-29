import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="alfred" />
          <Link to="/dashboard" />
        </nav>

        <aside>
          <Profile>
            <div
              style={{
                height: 45,
                paddingTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#FFF' }}>
                alfred@alfreddelivery.com
              </span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
