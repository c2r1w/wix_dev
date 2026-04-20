import wixLocationFrontend from 'wix-location-frontend';

$w.onReady(function () {
    const rootx = $w('#rootx');
    if (!rootx) return;

    // Determine the current page slug from the URL path
    const path = wixLocationFrontend.path;
    const slug = (path && path.length > 0) ? path[0] : 'home';

    // Set the page attribute on the custom element so it renders the correct page
    rootx.setAttribute('page', slug);

    // Listen for internal navigation events from the custom element
    rootx.on('rootx-navigate', (event) => {
        const detail = event.detail;
        if (detail && detail.href) {
            wixLocationFrontend.to(detail.href);
        }
    });
});
