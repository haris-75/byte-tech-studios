import React from 'react';

export default function Layout({ children }: { children: JSX.Element }) {
  return <div>Top {children} bottom</div>;
}
