import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  // Sử dụng hook useTranslation để lấy hàm t (dịch) và i18n object
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home')}</h1>
    </div>
  );
}

export default Home;
