# Expo Router Freezing When Using Gestures

We have an issue where pulling to dismiss a shared modal and then swiping to go back on a stack screen causes a `_UIParallaxDimmingView` to be left on top of
the application preventing user interactions until tabs are switched and switched back.

This issue isn't reproducible if the modal is in the same stack as the stack screen.

## Structure of the Navigation Stack

```mermaid
---
title: Navigation Structure
---
flowchart LR
    subgraph Legend
        direction LR
        Start -- Route --> End
        Start -. Link .-> End
        Start -. Link that Freezes .-x End
    end

    RootNav[Root Stack Navigation]

    RootNav --> Tabs["(tabs)"]
    RootNav --> Modal[modal]

    subgraph Original[Original Routes]
        Tabs --> TabOne[Tab One] -.-x Modal
    end

    Tabs --> FreezableStack[Freezable Stack]

    FreezableStack --> InnerModal[inner_modal]
    FreezableStack --> SecondScreen[Second Screen]
    FreezableStack --> LandingPage[Landing Page]

    LandingPage -.-> SecondScreen
    SecondScreen -.-x ExternalModal
    SecondScreen -.-> InnerModal

    %% this is here for layout purposes
    RootNav --> ExternalModal[outer_modal]
```

\* Note: routing from the freezable stack to the original modal will also freeze interactions with the app.  Thus, even in the original routes,
if you were able to swipe to go back after dismissing the modal, you would freeze the interactions.
