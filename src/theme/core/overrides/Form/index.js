import { merge } from 'lodash';
import Input from './Input';
import Radio from './Radio';
import Switch from './Switch';
import Checkbox from './Checkbox';
import ControlLabel from './ControlLabel';

// ----------------------------------------------------------------------

export default function Form({ theme }) {
  return merge(
    Input({ theme }),
    Radio({ theme }),
    Switch({ theme }),
    Checkbox({ theme }),
    ControlLabel({ theme })
  );
}
