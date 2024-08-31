import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Space } from 'antd';

function PageHeader() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Select
        defaultValue="en"
        style={{ width: 120 }}
        onChange={changeLanguage} // Không cần e.target.value, Select từ antd truyền trực tiếp giá trị
        options={[
          { value: 'en', label: 'English' },
          { value: 'vi', label: 'Tiếng Việt' },
          { value: 'zh', label: '中文' },
        ]}
      />
    </div>
  );
}

export default PageHeader;
