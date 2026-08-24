# schwwaaa retro town v12

Updated from v11.

## Changes
- Rebuilt the welcome map as a connected 2.5D/isometric office park using an inline SVG map layer.
- Removed stray/disconnected roads by replacing the previous CSS road fragments with one connected road network.
- Reworked the building visuals to look more like an isometric RPG/city map.
- Kept clickable markers as standalone icons and labels on top of the map.
- Made Project Block smaller and changed it to a registry/archive icon.
- Service and project catalog icons remain `<img>` assets so they can be swapped easily.
- `icon-library.html` remains the local icon picker/reference page.


## v16 responsive campus navigation

- Keeps the generated SimCity/isometric office park map for desktop and wide tablet.
- Adds a separate mobile-only `campus-map-mobile` district selector.
- Mobile no longer attempts to shrink the full pinned map into the phone viewport.
- Uses the same map icon image assets as the desktop pins.
- Preserves `CITIZEN STATUS: GUEST` and all previously commented-out sections.


## v17 patch
- Disabled hover/focus movement on desktop welcome-map pins to stop jitter/stuck states.
- Commented out Central Commons in both the desktop map pins and mobile district selector.
- Preserved existing generated map, project/service image icons, and responsive mobile directory behavior.


## v19 — low-resolution countryside mode

- Preserves v18 as the visual baseline.
- Default load is high-resolution/full portal mode.
- The top system strip remains visible in both modes.
- Pressing the resolution button toggles low-resolution mode.
- Low-resolution mode fades/fizzles the portal UI away, keeps the campus map as the central simulation rectangle, and reveals an endless green countryside backdrop.
- Mobile high-resolution keeps the district selector; mobile low-resolution keeps the campus rectangle and hides labels to prevent collapse.


## v20 note
Low-resolution mode now hides the full website chrome, switches the campus to a grassified map image, and uses a cleaned rolling-hills countryside background for a more seamless simulation-window feel.


## v23 update
- Integrated the new low-resolution countryside concept directly into the site.
- Low-resolution mode now expands the welcome/campus area into a full scenic frame using `assets/lowland-countryside-v23.png`.
- The centered campus rectangle now swaps to `assets/office-park-map-lowland-v23.png` so the roads dissolve into grass and visually match the surrounding countryside.
- Slowed the fizzle transition for a softer, more fluid mode switch.


## v24 update
- Low-resolution mode now uses `assets/lowland-campus-frame-v24.png`, the matched landscape-frame concept with an open center.
- Low-resolution layout expands to the full viewport below the top bar so there are no green side gutters.
- The campus rectangle is softened with feathered edge treatments and no hard border so it feels embedded into the landscape.


## v27 update
- Based on the uploaded closest HTML/CSS/JS baseline.
- Removes the low-resolution settled timeout that caused the hero/map to move after the transition.
- Low-resolution mode now preserves the hero/campus layout geometry, fades the surrounding website away, and reveals the forest/campus frame behind it.
