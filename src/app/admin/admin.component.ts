import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <!-- <app-sidenav></app-sidenav> -->
    <p>Admin Side</p>
  `,
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  //  }

  ngOnInit(): void {
  }

}
