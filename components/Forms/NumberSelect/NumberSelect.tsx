import { useButton } from '@react-aria/button';
import React from 'react';

interface INumberSelectProps {
  value: number;
  small?: boolean;
  onAddButtonClick: () => void;
  onMinusButtonClick: () => void;
}

const NumberSelect: React.FC<INumberSelectProps> = (props) => {
  const minusButtonRef: React.MutableRefObject<HTMLButtonElement | null> =
    React.useRef(null);
  const addButtonRef: React.MutableRefObject<HTMLButtonElement | null> =
    React.useRef(null);
  const { buttonProps: minusButtonProps } = useButton({}, minusButtonRef);
  const { buttonProps: plusButtonProps } = useButton({}, addButtonRef);

  const containerStyles =
    'flex bg-white w-[205px] h-[64px] font-normal text-[19px]';
  const buttonStyles =
    'border border-solid border-black w-[64px] h-full text-black text-[30px] font-light';
  const valueStyles =
    'h-full w-[77px] border-t border-b border-solid border-black text-black';
  const paragraphStyles = 'w-full h-full text-center leading-[64px]';
  const smallContainerStyles = 'h-[44px] w-[142px] text-[13px]';
  const smallButtonStyles = 'w-[44px] text-[24px] leading-[0]';
  const smallValueStyles = 'w-[56px]';
  const smallparagraphStyles = 'leading-[44px]';

  return (
    <div
      className={`${containerStyles} ${props.small && smallContainerStyles}`}
    >
      <button
        ref={minusButtonRef}
        {...minusButtonProps}
        className={`${buttonStyles} ${props.small && smallButtonStyles}`}
        onClick={props.onMinusButtonClick}
        data-testid="number-select-minus"
      >
        -
      </button>
      <div className={`${valueStyles} ${props.small && smallValueStyles}`}>
        <p
          className={`${paragraphStyles} ${
            props.small && smallparagraphStyles
          }`}
          data-testid="number-select-value"
        >
          {props.value > 0 && props.value}
        </p>
      </div>
      <button
        ref={addButtonRef}
        {...plusButtonProps}
        className={`${buttonStyles} ${props.small && smallButtonStyles}`}
        onClick={props.onAddButtonClick}
        data-testid="number-select-add"
      >
        +
      </button>
    </div>
  );
};

export default NumberSelect;
