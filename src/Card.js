// pure component
import React from 'react';

export default ({
  id,
  name,
  initiative,
  hitpoints,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange
}) => (
  <div className="card">
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={e => onNameChange(id, e)}
      />
    </label>
    <label>
      Initiative:
      <input
        type="number"
        value={initiative}
        onChange={e => onInitiativeChange(id, e)}
      />
    </label>
    <label>
      Hitpoints:
      <input
        type="number"
        value={hitpoints}
        onChange={e => onHitpointsChange(id, e)}
      />
    </label>
  </div>
);
