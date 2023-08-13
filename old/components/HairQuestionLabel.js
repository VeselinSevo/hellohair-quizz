import React from 'react';

export const HairQuestionLabel = ({ highlighted, text }) => <div style={{ color: highlighted ? 'red' : 'initial' }}>{ text }</div>