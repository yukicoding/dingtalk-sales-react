import { InputItem } from 'antd-mobile';
import React from 'react';

type Props = {
  extra?: string;
  value: string;
  onClick?: () => void;
  children: string;
};

export default (props: Props) => (
  <InputItem
    type="text"
    placeholder={props.extra}
    value={props.value && props.extra}
    onClick={props.onClick}
    editable={false}
  >
    {props.children}
  </InputItem>
);
