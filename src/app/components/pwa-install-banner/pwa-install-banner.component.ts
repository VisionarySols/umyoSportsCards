import { Component, OnInit } from '@angular/core';
import { InstallPwaService } from 'src/app/services/install-pwa.service';

@Component({
  selector: 'app-pwa-install-banner',
  templateUrl: './pwa-install-banner.component.html',
  styleUrls: ['./pwa-install-banner.component.css']
})
export class PwaInstallBannerComponent implements OnInit {
  showInstallPrompt = false;
  showIosBanner = false;

  constructor(public installPwa: InstallPwaService) {}

  ngOnInit(): void {
    this.showInstallPrompt = this.installPwa.canPromptInstall();
    this.showIosBanner = this.installPwa.shouldShowIosInstallBanner();
  }

  installApp() {
    this.installPwa.promptInstall().then(() => {
      this.showInstallPrompt = false;
    });
  }

  dismissIosBanner() {
    this.showIosBanner = false;
  }
}
