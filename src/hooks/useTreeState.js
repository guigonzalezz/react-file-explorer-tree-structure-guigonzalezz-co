import { useState, useCallback } from "react";

// Custom hook to manage expanded/collapsed state per node
export function useTreeState(initialExpandedIds = []) {
  const [expandedIds, setExpandedIds] = useState(
    () => new Set(initialExpandedIds),
  );

  const toggleNode = useCallback((nodeId) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const expandNode = useCallback((nodeId) => {
    setExpandedIds((prev) => {
      if (prev.has(nodeId)) return prev;
      const next = new Set(prev);
      next.add(nodeId);
      return next;
    });
  }, []);

  const collapseNode = useCallback((nodeId) => {
    setExpandedIds((prev) => {
      if (!prev.has(nodeId)) return prev;
      const next = new Set(prev);
      next.delete(nodeId);
      return next;
    });
  }, []);

  const isExpanded = useCallback(
    (nodeId) => expandedIds.has(nodeId),
    [expandedIds],
  );

  return {
    expandedIds,
    toggleNode,
    expandNode,
    collapseNode,
    isExpanded,
  };
}
