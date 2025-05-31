import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InstallPwaService {
  deferredPrompt: any = null;

  constructor() {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
  }

  isIos(): boolean {
    const ua = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(ua);
  }

  isInStandaloneMode(): boolean {
    return ('standalone' in window.navigator) && !!(window.navigator['standalone'] as boolean);
  }

  shouldShowIosInstallBanner(): boolean {
    return this.isIos() && !this.isInStandaloneMode();
  }

  canPromptInstall(): boolean {
    return !!this.deferredPrompt;
  }

  async promptInstall(): Promise<boolean> {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const result = await this.deferredPrompt.userChoice;
      this.deferredPrompt = null;
      return result.outcome === 'accepted';
    }
    return false;
  }
}
