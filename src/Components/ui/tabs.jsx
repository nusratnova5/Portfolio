// src/components/ui/tabs.jsx
import React from 'react';

export const Tabs = ({ children, defaultValue, className }) => {
  return <div defaultValue={defaultValue} className={className}>{children}</div>;
};

export const TabsContent = ({ children }) => {
  return <div>{children}</div>;
};

export const TabsList = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const TabsTrigger = ({ children }) => {
  return <button>{children}</button>;
};
