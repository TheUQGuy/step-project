import React, { useState } from 'react';
import MilestoneGraph from '../graph/MilestoneGraph';

function MilestoneForm() {
  const [showForm, setShowMilestoneForm] = useState(false);
  const addMilestone = () => setShowMilestoneForm((prev) => !prev);
  return (
    <div>
      <MilestoneGraph />
      <button id='add-milestone-btn' onclick={addMilestone}>
        {showForm ? 'Hide Milestone Form' : 'Add Milestone'}
      </button>
      {showForm && <NewMilestoneForm />}
    </div>
  );
}

export default MilestoneForm;
