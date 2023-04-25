import { useContext, useEffect, useState } from 'react';
import { BranchContext } from '../../context';

interface IChangeCityProps {
  target: string
}

export function ChangeCity({target}:IChangeCityProps) {

  const {targetBranch, setTargetBranch} = useContext(BranchContext);

  // useState( () => {

    setTargetBranch(target);

  // }, [])


  return (
    <>
    </>
  )
}
