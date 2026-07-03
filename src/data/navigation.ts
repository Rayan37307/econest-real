export interface NavLink {
  label: string;
  hash: string;
}

export const navigationLinks: NavLink[] = [
  { label: 'Home', hash: '#/' },
  { label: 'Projects', hash: '#/projects' },
  { label: 'About', hash: '#/about' },
  { label: 'Career', hash: '#/career' },
  { label: 'CSR', hash: '#/csr' },
  { label: 'Press Room', hash: '#/press-room' },
  { label: 'Contact', hash: '#/contact' }
];
