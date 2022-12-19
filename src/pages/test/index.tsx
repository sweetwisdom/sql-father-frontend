import { PageContainer } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useEffect, useState } from 'react';

const Test: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 3) {
      message.success('count > 3');
    }
  }, [count]);

  return (
    <PageContainer>
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
    </PageContainer>
  );
};

export default Test;
