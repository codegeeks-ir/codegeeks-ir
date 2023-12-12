type NavigationItem = {
  name: string;
  category?: string;
  link: string;
  repo?: string;
  icon?: React.ReactNode;
};

type Navigation = NavigationItem[];

export default Navigation;
