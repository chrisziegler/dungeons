// pure component
import React from 'react';
import Input from './Input';
import { rollD20 } from '../utils';

export default ({
  id,
  name,
  initiative,
  hitpoints,
  onUpdateField,
  onInitiativeChange,
  onRemove
}) => (
  <div className="card">
    <Input
      label="Name:"
      type="text"
      value={name}
      onChange={e => onUpdateField(id, e, 'name')}
    />
    <Input
      label="Initiative:"
      type="number"
      value={initiative}
      onChange={e => onInitiativeChange(id, e)}
    />
    {/* mimicking structure of event object this method expects as 2nd arg */}
    <button
      onClick={e =>
        onInitiativeChange(id, { target: { value: rollD20() } })
      }
      className="icosiDi"
    >
      rollD20
    </button>
    <Input
      label="Hitpoints:"
      type="number"
      value={hitpoints}
      onChange={e => onUpdateField(id, e, 'hitpoints')}
    />
    <button onClick={() => onRemove(id)}>X</button>
  </div>
);
