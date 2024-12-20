import React from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  teks: string;
}

const ButtonLandingPage = (props: Props) => {
  return <Button className="max-w-max flex items-center justify-center mx-auto mt-4">{props.teks}</Button>;
};

export default ButtonLandingPage;
