import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../../pages/Missions';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';

describe('Space Travellers Hub App', () => {
  test('renders Mission in missions section:', () => {
    render(<Provider store={store}><BrowserRouter><Missions /></BrowserRouter></Provider>);
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });

  test('Missions snapshot test', () => {
    const myrender = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    );
    expect(myrender).toMatchSnapshot();
  });
});
