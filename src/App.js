import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Banner from './components/Layout/Banner';
import MealSummary from './components/Meals/MealSummary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalOpenHandler = () => {
    setIsModalVisible(true);
  };

  const modalCloseHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && <Cart onModalClose={modalCloseHandler} />}
      <Header onModalOpen={modalOpenHandler} />
      <Banner />
      <MealSummary />
      <Meals />
    </>
  );
};

export default App;
