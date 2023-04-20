import { BranchContext } from '../context';
import { useContext } from 'react';

const {targetBranch, setTargetBranch} = useContext(BranchContext);


// export function change (event:any) {

//   event.preventDefault();

//   console.log('Change data to '+ event.target.value);
//   setTargetBranch(event.target.value);

//   // branches?.forEach(branch => branch.city === event.target.value ? navigate(branch.pageLink):'');
// }
