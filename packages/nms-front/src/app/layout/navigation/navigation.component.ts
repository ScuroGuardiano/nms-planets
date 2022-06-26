import { Component, OnInit } from '@angular/core';

interface INavigationTreeElementBase {
  name: string;
  expanded?: boolean;
  external?: string;
}

interface INavigationTreeElementChild extends INavigationTreeElementBase {
  route?: string;
}

interface INavigationTreeElement extends INavigationTreeElementBase {
  icon: string;
  route?: string;
  children?: INavigationTreeElementChild[]
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
  }

  domainsRoutes: INavigationTreeElementChild[] = [];

  navExpanded = true;

  navigationTree: INavigationTreeElement[] = [
    {
      name: "Dashboard",
      icon: "dashboard-outline",
      route: "dashboard"
    },
    {
      name: "Galaxies",
      icon: "circles",
      route: "galaxies"
    },
    {
      name: "Star Systems",
      icon: "graph",
      route: "systems"
    },
    {
      name: "Planets",
      icon: "globe",
      route: "planets"
    },
    {
      name: "Resources",
      icon: "integrations",
      route: "resources"
    },
    {
      name: "Galaxy regions",
      icon: "field-grid",
      route: "regions"
    },
    {
      name: "Users",
      icon: "users",
      route: "users"
    },
    {
      name: "Settings",
      icon: "gear-small",
      route: "settings"
    },
    {
      name: "Source code",
      icon: "html-code",
      external: "https://github.com/ScuroGuardiano/nms-planets"
    }
  ];

  get logo() {
    return this.navExpanded ? "NMS Planets" : "NMS";
  }

  trackByName(_index: number, item: any): string {
    return item.name;
  }

}
