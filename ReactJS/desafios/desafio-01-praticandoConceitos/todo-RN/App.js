import { View, Text } from 'react-native';
import { Application, Body, Header, Img, Main } from './global.js'
import Logo from './src/assets/Logo.svg'
import { Form } from './src/components/Form';
import { List } from './src/components/List';

export default function App() {
  return (
    <Application>
      <Header>
        <Logo />
      </Header>
      <Body>
        <Main>
          <Form />
          <List />
        </Main>
      </Body>
    </Application>
  );
}


