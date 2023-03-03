import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App'
import AllApplications from '../components/AllApplications';
import AddApplication from '../components/AddApplication';
import ApplicationStats from '../components/ApplicationStats';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('App', () => {
  test('renders AllApplications component on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const allApplicationsElement = screen.getByText(/all applications/i);
    expect(allApplicationsElement).toBeInTheDocument();
  });

  test('renders AddApplication component on the Add Application page', () => {
    render(
      <MemoryRouter initialEntries={['/addApplication']}>
        <App />
      </MemoryRouter>
    );
    const addApplicationElement = screen.getByText(/add application/i);
    expect(addApplicationElement).toBeInTheDocument();
  });

  test('renders ApplicationStats component on the Application Stats page', () => {
    render(
      <MemoryRouter initialEntries={['/ApplicationStats']}>
        <App />
      </MemoryRouter>
    );
    const applicationStatsElement = screen.getByText(/application stats/i);
    expect(applicationStatsElement).toBeInTheDocument();
  });
});

describe('AllApplications', () => {
  test('renders the correct text', () => {
    render(<AllApplications />);
    const textElement = screen.getByText(/all applications/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe('AddApplication', () => {
  test('renders the correct text', () => {
    render(<AddApplication />);
    const textElement = screen.getByText(/add application/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe('ApplicationStats', () => {
  test('renders the correct text', () => {
    render(<ApplicationStats />);
    const textElement = screen.getByText(/application stats/i);
    expect(textElement).toBeInTheDocument();
  });
});
