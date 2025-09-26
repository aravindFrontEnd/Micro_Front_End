import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Simple mount function
const mount = () => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        // Check if we're in standalone mode
        if (document.querySelector('app-root')) {
            // Already exists, just bootstrap
            platformBrowserDynamic()
                .bootstrapModule(AppModule)
                .catch(err => console.error('Angular error:', err));
        } else {
            // Create app-root for micro frontend mode
            const appRoot = document.createElement('app-root');
            document.body.appendChild(appRoot);

            platformBrowserDynamic()
                .bootstrapModule(AppModule)
                .catch(err => console.error('Angular error:', err));
        }
    }, 50);
};

// Auto-mount if running standalone
if (document.querySelector('app-root')) {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.error('Angular standalone error:', err));
}

export default mount;