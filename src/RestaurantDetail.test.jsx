import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
  };

  const renderRestaurantDetail = () => render((
    <RestaurantDetail
      restaurant={restaurant}
    />
  ));

  it('renders name and address and reviews', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });
});