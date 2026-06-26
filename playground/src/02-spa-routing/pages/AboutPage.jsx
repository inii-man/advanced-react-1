import React from 'react';
import PageLayout from '../components/PageLayout';

export function AboutPage() {
  return (
    <PageLayout header="About Page">
      <p>Ini adalah halaman About.</p>
      <p>Dengan React Router, pergantian halaman ini terjadi secara instan tanpa perlu memuat ulang (refresh) browser.</p>
    </PageLayout>
  );
}
