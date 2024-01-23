import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button title="Menu" type="button">
        <CgMenu size={32}></CgMenu>
      </button>
    </>
  );
};
