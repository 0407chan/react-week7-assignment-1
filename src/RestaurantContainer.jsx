import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import RestaurantReviews from './RestaurantReviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  // TODO:
  // 1. 로그인이 되었을 때, 안되었을 때 구분
  // 2. Logout 기능 구현
  // 3. accessToken을 localStorage에 저장
  // 4. reducer, action 비슷한 것끼리 모아주기
  // 5. 각 라인을 공백으로 의미 부여하기

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const { score, description } = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview(restaurantId));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        score={score}
        description={description}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <RestaurantReviews reviews={restaurant.reviews} />
    </>
  );
}
