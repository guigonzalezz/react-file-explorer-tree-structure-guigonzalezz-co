### Task Overview
TaskFolders is designed as a leading-edge document management SaaS that empowers teams to organize and navigate their files just like a modern desktop environment. However, the existing platform lacks an interactive file explorer—a tool critical for productivity and clarity when dealing with complex, nested folder structures. Your mission is to architect and implement an intrinsic part of the interface—a recursive TreeNode component—enabling seamless navigation, user-friendly expand/collapse, and custom content rendering for both files and folders. Proper component architecture here is crucial for scaling the file explorer to thousands of nodes, maintaining snappy UX, and enabling rich feature extensions as the product evolves.

### Objectives
- Implement a scalable, recursive TreeNode component that renders itself and its children for arbitrary tree depth.
- Design and use a custom hook for managing expand/collapse state for nodes.
- Enable expand/collapse per-folder node (files do not expand), with visual cues.
- Support customizable node rendering—each node displays both name and type (file/folder) and can easily extend to show icons or actions.
- Optimize rendering and updates as the tree changes or expands, using React.memo and callback memoization.
- Provide a demo <FileExplorer> view rendering a file/folder tree from provided mock data.
- Adhere to accessible and maintainable code structures, ready for future tree features.

### How to Verify
- Launch the demo and confirm the file explorer shows all tree items, rendered as a collapsible hierarchy.
- Expanding/collapsing any folder updates just the relevant part of the tree; unrelated nodes remain unaffected.
- Mock tree can be extended to deeper depths painlessly, and performance remains reasonable.
- Passing custom content (e.g., icons) to the TreeNode is straightforward and renders correctly.
- Essential accessibility roles are present or easily integrated.

### Helpful Tips
- Think of the tree as a reusable recursive component, where each node can display its own information and render any number of nested children.
- Keep expansion-related logic organized through a dedicated hook so that individual nodes manage their own open/closed behavior without relying on a central, monolithic state.
- Be mindful of how frequently parts of the tree re-render—use stable references and lightweight memoization when it helps maintain responsiveness as the structure grows.
- Allow each node to support flexible, customizable content so the tree can adapt to different UI needs beyond just labels.
- Consider basic accessibility patterns for hierarchical structures so the component behaves predictably with keyboard navigation and assistive technologies.
